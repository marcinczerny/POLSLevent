import { Meteor } from 'meteor/meteor';

Lists = new Meteor.Collection('lists');
Todos = new Mongo.Collection('todos');

Meteor.startup(() => {
  // code to run on server at startup
});
