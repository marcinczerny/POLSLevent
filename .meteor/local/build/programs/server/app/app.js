var require = meteorInstall({"server":{"main.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/main.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Lists = new Meteor.Collection('lists');                                     // 3
Todos = new Mongo.Collection('todos');                                      // 4
Markers = new Mongo.Collection('markers');                                  // 5
Markersinfo = new Meteor.Collection('Markersinfo');                         // 6
                                                                            //
Meteor.startup(function () {                                                // 8
  // code to run on server at startup                                       //
                                                                            //
});                                                                         // 11
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
