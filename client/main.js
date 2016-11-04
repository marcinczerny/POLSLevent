import './main.html';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';

Lists = new Meteor.Collection('lists');
Todos = new Mongo.Collection('todos');
Markers = new Mongo.Collection('markers');
Markersinfo = new Meteor.Collection('Markersinfo');
//Info = new Mongo.Collection('info');
Accounts.ui.config({

  passwordSignupFields: 'USERNAME_ONLY',

});

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/register');
Router.route('/login');
Router.route('/eventy');
Router.route('/moje_eventy');
Router.route('/dodaj_event');
Router.route('/grupy');
Router.route('/moje_grupy');
Router.route('/dodaj_grupe');
Router.route('/',{
	 name: 'home',
	 template: 'home'
});
Router.route('/list/:_id', {
	name: 'listPage',
	template: 'listPage',
    data: function(){
        var currentList = this.params._id;
        return Lists.findOne({ _id: currentList });
    },
});
Template.map.onCreated(function() {
    GoogleMaps.ready('map', function(map) {
      google.maps.event.addListener(map.instance, 'click', function(event) {
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng(), owner: Meteor.userId() });
      });
      var curuser = Meteor.userId();
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var image = {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32)
        };
	 var shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly'
        };
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
            'features of the Uluru - Kata Tjuta National Park. Uluru is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. Uluru is listed as a World '+
            'Heritage Site.</p>'+
            '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

        
      var markers = {};
      
      Markers.find().observe({
        added: function (document) {
	
          var marker = new google.maps.Marker({
            draggable: false,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map.instance,
            id: document._id,
	    icon: image,
            shape: shape,
	     userId: document.owner,
	    title: document.title,
		
	    
          });
	if(marker.userId){
var markerinfo = Markersinfo.findOne({ createdBy: marker.userId});	

 marker.info = new google.maps.InfoWindow({
		          
content: markerinfo.info
        });}else {
marker.info = new google.maps.InfoWindow({
		          
content: contentString});
}

	  if(Meteor.userId()==marker.userId){
	    marker.addListener('dragend', function() {
	      if(Meteor.userId()==marker.userId){Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});}
	      else{throw new Meteor.Error('No Access!');}
          });}
          marker.addListener('rightclick', function() {
		console.log("jestem tu");
	    if(Meteor.userId()!=marker.userId){throw new Meteor.Error(marker.userId);}
            console.log("Meteor.userId %s, \n marker user %s",Meteor.userId(),marker.userId);
            var zmienna=marker.id;
            markers[document._id] = marker;
            marker.setMap(null);
	    
            Markers.remove({_id: zmienna });
          });
	  marker.addListener('click', function() {
	console.log(marker.info);
          marker.info.open(map, marker);
	    if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
          });
        

          markers[document._id] = marker;
        },
        changed: function (newDocument, oldDocument) {
          markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });
        },
        removed: function (oldDocument) {
          markers[oldDocument._id].setMap(null);
          google.maps.event.clearInstanceListeners(markers[oldDocument._id]);
          delete markers[oldDocument._id];
          //Markers.remove({_id: oldDocument._id});
        }
      });
    });
  });

Meteor.startup(function() {
  GoogleMaps.load();
});

Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(50.2880701, 18.6778916),
        zoom: 15
      };
    }
  }
});
Template.addList.events({
    'submit form': function(event){
      event.preventDefault();
      var listName = $('[name=listName]').val();
      var currentUser = Meteor.userId();
      Lists.insert({
          name: listName,
          createdBy: currentUser
      },function(error, results){
        Router.go('listPage', { _id: results });
  		});
      $('[name=listName]').val('');
    }
});

Template.lists_all.helpers({
    'list': function(){
        return Lists.find({}, {sort: {name: 1}});
    }
});

Template.lists.helpers({
    'list': function(){
    	var currentUser = Meteor.userId();
        return Lists.find({createdBy: currentUser}, {sort: {name: 1}});
    }
});

Template.todos.helpers({
    'todo': function(){
        var currentList = this._id;
        var currentUser = Meteor.userId();
        return Todos.find({ listId: currentList, createdBy: currentUser }, {sort: {createdAt: -1}})
    }
});

Template.addTodo.events({
    'submit form': function(event){
    event.preventDefault();
    var todoName = $('[name="todoName"]').val();
    var currentUser = Meteor.userId();
    var currentList = this._id;
	var infowindows = $('[name=infos]').val();
console.log(infowindows);
    Todos.insert({
        name: todoName,
        completed: false,
        createdAt: new Date(),
        createdBy: currentUser,
        listId: currentList,
	info: infowindows
    });
	Markersinfo.insert({
	createdBy: currentUser,
	info: infowindows});
var markerinfo =Markersinfo.findOne({ createdBy: currentUser});
console.log(markerinfo.info);    
$('[name="todoName"]').val('');
}
});

Template.todoItem.events({
    'click .delete-todo': function(event){
    event.preventDefault();
    var documentId = this._id;
    var confirm = window.confirm("Delete this task?");
    if(confirm){
        Todos.remove({ _id: documentId });
    }
},
	'keyup [name=todoItem]': function(event){
    if(event.which == 13 || event.which == 27){
        $(event.target).blur();
    } else {
        var documentId = this._id;
        var todoItem = $(event.target).val();
        Todos.update({ _id: documentId }, {$set: { name: todoItem }});
    }
},
	'change [type=checkbox]': function(){
    var documentId = this._id;
    var isCompleted = this.completed;
    if(isCompleted){
        Todos.update({ _id: documentId }, {$set: { completed: false }});
        console.log("Task marked as incomplete.");
    } else {
        Todos.update({ _id: documentId }, {$set: { completed: true }});
        console.log("Task marked as complete.");
    }
	}

});

Template.todoItem.helpers({
    'checked': function(){
        var isCompleted = this.completed;
        if(isCompleted){
            return "checked";
        } else {
            return "";
        }
    }
});

Template.todosCount.helpers({
    'totalTodos': function(){
    	var currentList = this._id;
        return Todos.find({ listId: currentList }).count();
    },
    'completedTodos': function(){
    	var currentList = this._id;
        return Todos.find({ listId: currentList, completed: true }).count();
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(username, password, function(error){
        	if(error){
        	console.log(error.reason);
    		} else {
       		 Router.go("home");
   			}
        });
    }
});

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            username: username,
            password: password
        },  function(error){
            if(error){
        	console.log(error.reason);
   			} else {
        	Router.go("home");
    	}
		});
    }
});

Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }

});


