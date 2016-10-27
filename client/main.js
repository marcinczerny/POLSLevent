import './main.html';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';

Lists = new Meteor.Collection('lists');
Todos = new Mongo.Collection('todos');
Markers = new Mongo.Collection('markers');

Accounts.ui.config({

  passwordSignupFields: 'USERNAME_ONLY',

});



//Accounts.ui.config({

  //passwordSignupFields: 'USERNAME_ONLY',

//});


Router.configure({
    layoutTemplate: 'main'
});

Router.route('/register');
Router.route('/login');
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
        Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng() });
      });

      var markers = {};

      Markers.find().observe({
        added: function (document) {
          var marker = new google.maps.Marker({
            draggable: true,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(document.lat, document.lng),
            map: map.instance,
            id: document._id
          });

          google.maps.event.addListener(marker, 'dragend', function(event) {
            Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() }});
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
      Lists.insert({
          name: listName
      });
      $('[name=listName]').val('');
    }
});

Template.lists.helpers({
    'list': function(){
        return Lists.find({}, {sort: {name: 1}});
    }
});

Template.todos.helpers({
    'todo': function(){
        var currentList = this._id;
        return Todos.find({ listId: currentList }, {sort: {createdAt: -1}})
    }
});

Template.addTodo.events({
    'submit form': function(event){
    event.preventDefault();
    var todoName = $('[name="todoName"]').val();
    var currentList = this._id;
    Todos.insert({
        name: todoName,
        completed: false,
        createdAt: new Date(),
        listId: currentList
    });
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
