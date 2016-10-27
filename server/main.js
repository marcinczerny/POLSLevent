import { Meteor } from 'meteor/meteor';

Lists = new Meteor.Collection('lists');
Todos = new Mongo.Collection('todos');
Markers = new Mongo.Collection('markers');

Meteor.startup(() => {
  // code to run on server at startup
  
});
