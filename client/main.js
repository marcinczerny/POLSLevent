import './main.html';
import { Accounts } from 'meteor/accounts-base';
import { Template } from 'meteor/templating';

Accounts.ui.config({

  passwordSignupFields: 'USERNAME_ONLY',

});

