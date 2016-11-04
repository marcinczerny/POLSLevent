var require = meteorInstall({"client":{"main.html":["./template.main.js",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.html                                                                                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = require("./template.main.js");                                                                     // 1
                                                                                                                    // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"template.main.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/template.main.js                                                                                          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.body.addContent((function() {                                                                              // 2
  var view = this;                                                                                                  // 3
  return "";                                                                                                        // 4
}));                                                                                                                // 5
Meteor.startup(Template.body.renderToDocument);                                                                     // 6
                                                                                                                    // 7
Template.__checkName("main");                                                                                       // 8
Template["main"] = new Template("Template.main", (function() {                                                      // 9
  var view = this;                                                                                                  // 10
  return HTML.DIV({                                                                                                 // 11
    id: "wrapper"                                                                                                   // 12
  }, "\n  ", HTML.DIV({                                                                                             // 13
    id: "header"                                                                                                    // 14
  }, "\n    ", HTML.DIV({                                                                                           // 15
    id: "logo"                                                                                                      // 16
  }, "\n    ", HTML.A({                                                                                             // 17
    href: function() {                                                                                              // 18
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                              // 19
        route: "home"                                                                                               // 20
      }));                                                                                                          // 21
    }                                                                                                               // 22
  }, "\n        ", HTML.Raw('<img src="logo1.png" alt="logo">'), "\n    "), "\n    "), "\n    ", HTML.DIV({         // 23
    id: "menu"                                                                                                      // 24
  }, "\n        ", Spacebars.include(view.lookupTemplate("navigation")), "\n    "), "\n    "), "\n    ", HTML.DIV({
    id: "container"                                                                                                 // 26
  }, "\n    ", HTML.DIV({                                                                                           // 27
    id: "sidebar"                                                                                                   // 28
  }, "\n    ", HTML.Raw("<h1>Najnowsze wydarzenia</h1>"), "\n    ", HTML.DIV({                                      // 29
    id: "mapa"                                                                                                      // 30
  }, "\n    ", HTML.Raw("<h2>Moje wydarzenia</h2>"), "\n    ", HTML.Raw("<h3> Mapa wydarzeń</h3>"), "\n    ", HTML.P(Spacebars.include(view.lookupTemplate("map"))), "\n  "), "\n    ", HTML.Raw('<div id="content_box">\n    <h2>Trzy</h2>\n    <p><a href="#">WYDARZENIE1</a></p>\n    </div>'), "\n    ", HTML.Raw('<div id="content_box">\n    <h2>Cztery</h2>\n    <p><a href="#">WYDARZENIE2</a></p>\n    </div>'), "\n    "), "\n    ", HTML.DIV({
    id: "solid",                                                                                                    // 32
    class: "border"                                                                                                 // 33
  }, "\n   ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), "\n    "), HTML.Raw('\n    <div id="footer">\n        <p>Github link: <a href="https://github.com/marcinczerny/POLSLevent.git">https://github.com/marcinczerny/POLSLevent.git</a></p>\n    </div>\n    '));
}));                                                                                                                // 35
                                                                                                                    // 36
Template.__checkName("navigation");                                                                                 // 37
Template["navigation"] = new Template("Template.navigation", (function() {                                          // 38
  var view = this;                                                                                                  // 39
  return HTML.UL("\n        ", HTML.LI(HTML.A({                                                                     // 40
    href: function() {                                                                                              // 41
      return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                              // 42
        route: "home"                                                                                               // 43
      }));                                                                                                          // 44
    }                                                                                                               // 45
  }, "Strona główna")), "\n        ", Blaze.If(function() {                                                         // 46
    return Spacebars.call(view.lookup("currentUser"));                                                              // 47
  }, function() {                                                                                                   // 48
    return [ "\n        ", HTML.LI("\n        ", HTML.DIV({                                                         // 49
      class: "dropdown"                                                                                             // 50
    }, "\n        ", HTML.A({                                                                                       // 51
      href: "#"                                                                                                     // 52
    }, "Eventy"), "\n        ", HTML.DIV({                                                                          // 53
      class: "dropdown-content"                                                                                     // 54
    }, "\n        ", HTML.A({                                                                                       // 55
      href: function() {                                                                                            // 56
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 57
          route: "moje_eventy"                                                                                      // 58
        }));                                                                                                        // 59
      }                                                                                                             // 60
    }, "Moje eventy"), "\n        ", HTML.A({                                                                       // 61
      href: function() {                                                                                            // 62
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 63
          route: "eventy"                                                                                           // 64
        }));                                                                                                        // 65
      }                                                                                                             // 66
    }, "Lista eventów"), "\n        ", HTML.A({                                                                     // 67
      href: function() {                                                                                            // 68
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 69
          route: "dodaj_event"                                                                                      // 70
        }));                                                                                                        // 71
      }                                                                                                             // 72
    }, "Dodaj event"), "\n        "), "\n        "), "\n        "), "\n        ", HTML.LI("\n        ", HTML.DIV({  // 73
      class: "dropdown"                                                                                             // 74
    }, "\n        ", HTML.A({                                                                                       // 75
      href: "#"                                                                                                     // 76
    }, "Grupy"), "\n        ", HTML.DIV({                                                                           // 77
      class: "dropdown-content"                                                                                     // 78
    }, "\n        ", HTML.A({                                                                                       // 79
      href: function() {                                                                                            // 80
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 81
          route: "moje_grupy"                                                                                       // 82
        }));                                                                                                        // 83
      }                                                                                                             // 84
    }, "Moje grupy"), "\n        ", HTML.A({                                                                        // 85
      href: function() {                                                                                            // 86
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 87
          route: "grupy"                                                                                            // 88
        }));                                                                                                        // 89
      }                                                                                                             // 90
    }, "Lista grup"), "\n        ", HTML.A({                                                                        // 91
      href: function() {                                                                                            // 92
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 93
          route: "dodaj_grupe"                                                                                      // 94
        }));                                                                                                        // 95
      }                                                                                                             // 96
    }, "Dodaj grupę"), "\n        "), "\n        "), "\n        "), "\n        ", HTML.LI(HTML.A({                  // 97
      href: "#",                                                                                                    // 98
      class: "logout"                                                                                               // 99
    }, "Wyloguj się")), "\n        " ];                                                                             // 100
  }, function() {                                                                                                   // 101
    return [ "\n        ", HTML.LI(HTML.A({                                                                         // 102
      href: function() {                                                                                            // 103
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 104
          route: "register"                                                                                         // 105
        }));                                                                                                        // 106
      }                                                                                                             // 107
    }, "Rejestracja")), "\n        ", HTML.LI(HTML.A({                                                              // 108
      href: function() {                                                                                            // 109
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 110
          route: "login"                                                                                            // 111
        }));                                                                                                        // 112
      }                                                                                                             // 113
    }, "Zaloguj się")), "\n        " ];                                                                             // 114
  }), "\n    ");                                                                                                    // 115
}));                                                                                                                // 116
                                                                                                                    // 117
Template.__checkName("home");                                                                                       // 118
Template["home"] = new Template("Template.home", (function() {                                                      // 119
  var view = this;                                                                                                  // 120
  return HTML.Raw('<div class="solid_title1">Tytul1</div>\n    <div class="solid_title2">Tytul2</div>\n    <p>Tekscik.</p>\n    <h2>Home</h2>\n     <div id="solid_box">\n    <h2>Jeden</h2>\n    <p>\n    Tekscik_lewo.\n    </p>\n    </div>\n    <div id="solid_box" class="margin2">\n    <h2>Dwa</h2>\n    <p>\n\n    Tekscik_prawo.\n    </p>\n    </div>\n    <div id="border"></div>\n    <div id="solid_box">\n    <div id="solid_boximg">\n    <img src="icon_quote.gif" align="left">\n    </div>\n    <a href="#">\n    <h2>pięć</h2>\n    </a>\n    <p>Tekscik_dol_lewo.</p>\n    </div>\n    <div id="solid_box" class="margin2">\n    <div id="solid_boximg">\n    <img src="icon_mail.gif" align="left">\n    </div>\n    <a href="#">\n    <h2>sześć</h2>\n    </a>\n    <p>Tekscik_dol_prawo.</p>\n    </div>');
}));                                                                                                                // 122
                                                                                                                    // 123
Template.__checkName("register");                                                                                   // 124
Template["register"] = new Template("Template.register", (function() {                                              // 125
  var view = this;                                                                                                  // 126
  return HTML.Raw('<div align="center">\n    <h2><br><br><br>Rejestracja<br><br></h2>\n    <form class="register">\n    <div class="margin4">\n        <p>Nazwa użytkownika:</p>\n        <p><input type="username" name="username"></p>\n        <p>Hasło:</p>\n        <p><input type="password" name="password"></p>\n        <p><input type="submit" value="Rejestracja"></p>\n    </div>\n    </form>\n </div>');
}));                                                                                                                // 128
                                                                                                                    // 129
Template.__checkName("login");                                                                                      // 130
Template["login"] = new Template("Template.login", (function() {                                                    // 131
  var view = this;                                                                                                  // 132
  return HTML.Raw('<div align="center">\n    <h2><br><br><br>Logowanie<br><br></h2>\n    <form class="login">\n    <div class="margin4">\n        <p>Nazwa użytkownika:</p>\n        <p><input type="username" name="username"></p>\n        <p>Hasło:</p>\n        <p><input type="password" name="password"></p>\n        <p><input type="submit" value="Zaloguj"></p>\n    </div>\n    </form>\n </div>');
}));                                                                                                                // 134
                                                                                                                    // 135
Template.__checkName("eventy");                                                                                     // 136
Template["eventy"] = new Template("Template.eventy", (function() {                                                  // 137
  var view = this;                                                                                                  // 138
  return [ HTML.Raw("<h2>Lista eventów</h2>\n    "), Spacebars.include(view.lookupTemplate("lists_all")) ];         // 139
}));                                                                                                                // 140
                                                                                                                    // 141
Template.__checkName("mojeEventy");                                                                                 // 142
Template["mojeEventy"] = new Template("Template.mojeEventy", (function() {                                          // 143
  var view = this;                                                                                                  // 144
  return [ HTML.Raw("<h2>Moje eventy</h2>\n   "), Spacebars.include(view.lookupTemplate("lists")) ];                // 145
}));                                                                                                                // 146
                                                                                                                    // 147
Template.__checkName("dodajEvent");                                                                                 // 148
Template["dodajEvent"] = new Template("Template.dodajEvent", (function() {                                          // 149
  var view = this;                                                                                                  // 150
  return [ HTML.Raw("<h2>Dodaj event</h2>\n   "), Spacebars.include(view.lookupTemplate("addList")) ];              // 151
}));                                                                                                                // 152
                                                                                                                    // 153
Template.__checkName("grupy");                                                                                      // 154
Template["grupy"] = new Template("Template.grupy", (function() {                                                    // 155
  var view = this;                                                                                                  // 156
  return HTML.Raw("<h2>Lista grup</h2>");                                                                           // 157
}));                                                                                                                // 158
                                                                                                                    // 159
Template.__checkName("mojeGrupy");                                                                                  // 160
Template["mojeGrupy"] = new Template("Template.mojeGrupy", (function() {                                            // 161
  var view = this;                                                                                                  // 162
  return HTML.Raw("<h2>Moje grupy</h2>");                                                                           // 163
}));                                                                                                                // 164
                                                                                                                    // 165
Template.__checkName("dodajGrupe");                                                                                 // 166
Template["dodajGrupe"] = new Template("Template.dodajGrupe", (function() {                                          // 167
  var view = this;                                                                                                  // 168
  return HTML.Raw("<h2>Dodaj grupe</h2>");                                                                          // 169
}));                                                                                                                // 170
                                                                                                                    // 171
Template.__checkName("addList");                                                                                    // 172
Template["addList"] = new Template("Template.addList", (function() {                                                // 173
  var view = this;                                                                                                  // 174
  return HTML.Raw('<form>Stwórz listę:\n        <input type="text" placeholder="List name here..." name="listName">\n    </form>');
}));                                                                                                                // 176
                                                                                                                    // 177
Template.__checkName("lists");                                                                                      // 178
Template["lists"] = new Template("Template.lists", (function() {                                                    // 179
  var view = this;                                                                                                  // 180
  return HTML.UL("\n        ", Blaze.Each(function() {                                                              // 181
    return Spacebars.call(view.lookup("list"));                                                                     // 182
  }, function() {                                                                                                   // 183
    return [ "\n            ", HTML.LI(HTML.A({                                                                     // 184
      href: function() {                                                                                            // 185
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 186
          route: "listPage"                                                                                         // 187
        }));                                                                                                        // 188
      }                                                                                                             // 189
    }, Blaze.View("lookup:name", function() {                                                                       // 190
      return Spacebars.mustache(view.lookup("name"));                                                               // 191
    }))), "\n        " ];                                                                                           // 192
  }), "\n    ");                                                                                                    // 193
}));                                                                                                                // 194
                                                                                                                    // 195
Template.__checkName("lists_all");                                                                                  // 196
Template["lists_all"] = new Template("Template.lists_all", (function() {                                            // 197
  var view = this;                                                                                                  // 198
  return HTML.UL("\n        ", Blaze.Each(function() {                                                              // 199
    return Spacebars.call(view.lookup("list"));                                                                     // 200
  }, function() {                                                                                                   // 201
    return [ "\n            ", HTML.LI(HTML.A({                                                                     // 202
      href: function() {                                                                                            // 203
        return Spacebars.mustache(view.lookup("pathFor"), Spacebars.kw({                                            // 204
          route: "listPage"                                                                                         // 205
        }));                                                                                                        // 206
      }                                                                                                             // 207
    }, Blaze.View("lookup:name", function() {                                                                       // 208
      return Spacebars.mustache(view.lookup("name"));                                                               // 209
    }))), "\n        " ];                                                                                           // 210
  }), "\n    ");                                                                                                    // 211
}));                                                                                                                // 212
                                                                                                                    // 213
Template.__checkName("listPage");                                                                                   // 214
Template["listPage"] = new Template("Template.listPage", (function() {                                              // 215
  var view = this;                                                                                                  // 216
  return [ HTML.H2("Zadania: ", Blaze.View("lookup:name", function() {                                              // 217
    return Spacebars.mustache(view.lookup("name"));                                                                 // 218
  })), "\n    ", Spacebars.include(view.lookupTemplate("todos")) ];                                                 // 219
}));                                                                                                                // 220
                                                                                                                    // 221
Template.__checkName("todos");                                                                                      // 222
Template["todos"] = new Template("Template.todos", (function() {                                                    // 223
  var view = this;                                                                                                  // 224
  return [ Spacebars.include(view.lookupTemplate("addTodo")), "\n    ", HTML.UL("\n    ", Blaze.Each(function() {   // 225
    return Spacebars.call(view.lookup("todo"));                                                                     // 226
  }, function() {                                                                                                   // 227
    return [ "\n        ", Spacebars.include(view.lookupTemplate("todoItem")), "\n    " ];                          // 228
  }), "\n    "), "\n", Spacebars.include(view.lookupTemplate("todosCount")) ];                                      // 229
}));                                                                                                                // 230
                                                                                                                    // 231
Template.__checkName("todoItem");                                                                                   // 232
Template["todoItem"] = new Template("Template.todoItem", (function() {                                              // 233
  var view = this;                                                                                                  // 234
  return HTML.LI({                                                                                                  // 235
    class: function() {                                                                                             // 236
      return Spacebars.mustache(view.lookup("checked"));                                                            // 237
    }                                                                                                               // 238
  }, "\n        ", HTML.INPUT(HTML.Attrs({                                                                          // 239
    type: "checkbox"                                                                                                // 240
  }, function() {                                                                                                   // 241
    return Spacebars.attrMustache(view.lookup("checked"));                                                          // 242
  })), "\n        ", HTML.INPUT({                                                                                   // 243
    type: "text",                                                                                                   // 244
    value: function() {                                                                                             // 245
      return Spacebars.mustache(view.lookup("name"));                                                               // 246
    },                                                                                                              // 247
    name: "todoItem"                                                                                                // 248
  }), HTML.Raw('\n        [<a href="#" class="delete-todo">Delete</a>]\n    '));                                    // 249
}));                                                                                                                // 250
                                                                                                                    // 251
Template.__checkName("addTodo");                                                                                    // 252
Template["addTodo"] = new Template("Template.addTodo", (function() {                                                // 253
  var view = this;                                                                                                  // 254
  return HTML.Raw('<form>\n        Stwórz zadanie:\n        <input type="text" placeholder="Wpisz tutaj zadanie..." name="todoName">\n\t<p>info:</p>\n        <p><input type="text" name="infos"></p>\n\t\n        <p><input type="submit" name="password"></p>\n    </form>');
}));                                                                                                                // 256
                                                                                                                    // 257
Template.__checkName("todosCount");                                                                                 // 258
Template["todosCount"] = new Template("Template.todosCount", (function() {                                          // 259
  var view = this;                                                                                                  // 260
  return Blaze.If(function() {                                                                                      // 261
    return Spacebars.call(view.lookup("totalTodos"));                                                               // 262
  }, function() {                                                                                                   // 263
    return [ "\n    ", HTML.P("You have completed ", Blaze.View("lookup:completedTodos", function() {               // 264
      return Spacebars.mustache(view.lookup("completedTodos"));                                                     // 265
    }), " out of ", Blaze.View("lookup:totalTodos", function() {                                                    // 266
      return Spacebars.mustache(view.lookup("totalTodos"));                                                         // 267
    }), " tasks."), "\n" ];                                                                                         // 268
  });                                                                                                               // 269
}));                                                                                                                // 270
                                                                                                                    // 271
Template.__checkName("map");                                                                                        // 272
Template["map"] = new Template("Template.map", (function() {                                                        // 273
  var view = this;                                                                                                  // 274
  return HTML.DIV({                                                                                                 // 275
    class: "map-containers"                                                                                         // 276
  }, "\n\n\n    ", Blaze.Unless(function() {                                                                        // 277
    return Spacebars.call(view.lookup("geolocationError"));                                                         // 278
  }, function() {                                                                                                   // 279
    return [ "\n      ", Blaze._TemplateWith(function() {                                                           // 280
      return {                                                                                                      // 281
        name: Spacebars.call("map"),                                                                                // 282
        options: Spacebars.call(view.lookup("mapOptions"))                                                          // 283
      };                                                                                                            // 284
    }, function() {                                                                                                 // 285
      return Spacebars.include(view.lookupTemplate("googleMap"));                                                   // 286
    }), "\n    " ];                                                                                                 // 287
  }, function() {                                                                                                   // 288
    return [ "\n      Geolocation failed: ", Blaze.View("lookup:geolocationError", function() {                     // 289
      return Spacebars.mustache(view.lookup("geolocationError"));                                                   // 290
    }), "\n    " ];                                                                                                 // 291
  }), "\n  ");                                                                                                      // 292
}));                                                                                                                // 293
                                                                                                                    // 294
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["./main.html","meteor/accounts-base","meteor/templating",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// client/main.js                                                                                                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.import('./main.html');var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});
                                                                                                                    // 2
                                                                                                                    // 3
                                                                                                                    //
Lists = new Meteor.Collection('lists');                                                                             // 5
Todos = new Mongo.Collection('todos');                                                                              // 6
Markers = new Mongo.Collection('markers');                                                                          // 7
Markersinfo = new Meteor.Collection('Markersinfo');                                                                 // 8
//Info = new Mongo.Collection('info');                                                                              //
Accounts.ui.config({                                                                                                // 10
                                                                                                                    //
    passwordSignupFields: 'USERNAME_ONLY'                                                                           // 12
                                                                                                                    //
});                                                                                                                 // 10
                                                                                                                    //
Router.configure({                                                                                                  // 16
    layoutTemplate: 'main'                                                                                          // 17
});                                                                                                                 // 16
                                                                                                                    //
Router.route('/register');                                                                                          // 20
Router.route('/login');                                                                                             // 21
Router.route('/eventy');                                                                                            // 22
Router.route('/moje_eventy');                                                                                       // 23
Router.route('/dodaj_event');                                                                                       // 24
Router.route('/grupy');                                                                                             // 25
Router.route('/moje_grupy');                                                                                        // 26
Router.route('/dodaj_grupe');                                                                                       // 27
Router.route('/', {                                                                                                 // 28
    name: 'home',                                                                                                   // 29
    template: 'home'                                                                                                // 30
});                                                                                                                 // 28
Router.route('/list/:_id', {                                                                                        // 32
    name: 'listPage',                                                                                               // 33
    template: 'listPage',                                                                                           // 34
    data: function () {                                                                                             // 35
        function data() {                                                                                           // 35
            var currentList = this.params._id;                                                                      // 36
            return Lists.findOne({ _id: currentList });                                                             // 37
        }                                                                                                           // 38
                                                                                                                    //
        return data;                                                                                                // 35
    }()                                                                                                             // 35
});                                                                                                                 // 32
Template.map.onCreated(function () {                                                                                // 40
    GoogleMaps.ready('map', function (map) {                                                                        // 41
        google.maps.event.addListener(map.instance, 'click', function (event) {                                     // 42
            Markers.insert({ lat: event.latLng.lat(), lng: event.latLng.lng(), owner: Meteor.userId() });           // 43
        });                                                                                                         // 44
        var curuser = Meteor.userId();                                                                              // 45
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';                                                                  // 46
        var image = {                                                                                               // 47
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',  // 48
            // This marker is 20 pixels wide by 32 pixels high.                                                     //
            size: new google.maps.Size(20, 32),                                                                     // 50
            // The origin for this image is (0, 0).                                                                 //
            origin: new google.maps.Point(0, 0),                                                                    // 52
            // The anchor for this image is the base of the flagpole at (0, 32).                                    //
            anchor: new google.maps.Point(0, 32)                                                                    // 54
        };                                                                                                          // 47
        var shape = {                                                                                               // 56
            coords: [1, 1, 1, 20, 18, 20, 18, 1],                                                                   // 57
            type: 'poly'                                                                                            // 58
        };                                                                                                          // 56
        var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' + '<div id="bodyContent">' + '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' + 'sandstone rock formation in the southern part of the ' + 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' + 'south west of the nearest large town, Alice Springs; 450&#160;km ' + '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' + 'features of the Uluru - Kata Tjuta National Park. Uluru is ' + 'sacred to the Pitjantjatjara and Yankunytjatjara, the ' + 'Aboriginal people of the area. It has many springs, waterholes, ' + 'rock caves and ancient paintings. Uluru is listed as a World ' + 'Heritage Site.</p>' + '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + 'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' + '(last visited June 22, 2009).</p>' + '</div>' + '</div>';
                                                                                                                    //
        var markers = {};                                                                                           // 82
                                                                                                                    //
        Markers.find().observe({                                                                                    // 84
            added: function () {                                                                                    // 85
                function added(document) {                                                                          // 85
                                                                                                                    //
                    var marker = new google.maps.Marker({                                                           // 87
                        draggable: false,                                                                           // 88
                        animation: google.maps.Animation.DROP,                                                      // 89
                        position: new google.maps.LatLng(document.lat, document.lng),                               // 90
                        map: map.instance,                                                                          // 91
                        id: document._id,                                                                           // 92
                        icon: image,                                                                                // 93
                        shape: shape,                                                                               // 94
                        userId: document.owner,                                                                     // 95
                        title: document.title                                                                       // 96
                                                                                                                    //
                    });                                                                                             // 87
                    if (marker.userId) {                                                                            // 100
                        var markerinfo = Markersinfo.findOne({ createdBy: marker.userId });                         // 101
                                                                                                                    //
                        marker.info = new google.maps.InfoWindow({                                                  // 103
                                                                                                                    //
                            content: markerinfo.info                                                                // 105
                        });                                                                                         // 103
                    } else {                                                                                        // 106
                        marker.info = new google.maps.InfoWindow({                                                  // 107
                                                                                                                    //
                            content: contentString });                                                              // 109
                    }                                                                                               // 110
                                                                                                                    //
                    if (Meteor.userId() == marker.userId) {                                                         // 112
                        marker.addListener('dragend', function () {                                                 // 113
                            if (Meteor.userId() == marker.userId) {                                                 // 114
                                Markers.update(marker.id, { $set: { lat: event.latLng.lat(), lng: event.latLng.lng() } });
                            } else {                                                                                // 114
                                throw new Meteor.Error('No Access!');                                               // 115
                            }                                                                                       // 115
                        });                                                                                         // 116
                    }                                                                                               // 116
                    marker.addListener('rightclick', function () {                                                  // 117
                        console.log("jestem tu");                                                                   // 118
                        if (Meteor.userId() != marker.userId) {                                                     // 119
                            throw new Meteor.Error(marker.userId);                                                  // 119
                        }                                                                                           // 119
                        console.log("Meteor.userId %s, \n marker user %s", Meteor.userId(), marker.userId);         // 120
                        var zmienna = marker.id;                                                                    // 121
                        markers[document._id] = marker;                                                             // 122
                        marker.setMap(null);                                                                        // 123
                                                                                                                    //
                        Markers.remove({ _id: zmienna });                                                           // 125
                    });                                                                                             // 126
                    marker.addListener('click', function () {                                                       // 127
                        console.log(marker.info);                                                                   // 128
                        marker.info.open(map, marker);                                                              // 129
                        if (marker.getAnimation() !== null) {                                                       // 130
                            marker.setAnimation(null);                                                              // 131
                        } else {                                                                                    // 132
                            marker.setAnimation(google.maps.Animation.BOUNCE);                                      // 133
                        }                                                                                           // 134
                    });                                                                                             // 135
                                                                                                                    //
                    markers[document._id] = marker;                                                                 // 138
                }                                                                                                   // 139
                                                                                                                    //
                return added;                                                                                       // 85
            }(),                                                                                                    // 85
            changed: function () {                                                                                  // 140
                function changed(newDocument, oldDocument) {                                                        // 140
                    markers[newDocument._id].setPosition({ lat: newDocument.lat, lng: newDocument.lng });           // 141
                }                                                                                                   // 142
                                                                                                                    //
                return changed;                                                                                     // 140
            }(),                                                                                                    // 140
            removed: function () {                                                                                  // 143
                function removed(oldDocument) {                                                                     // 143
                    markers[oldDocument._id].setMap(null);                                                          // 144
                    google.maps.event.clearInstanceListeners(markers[oldDocument._id]);                             // 145
                    delete markers[oldDocument._id];                                                                // 146
                    //Markers.remove({_id: oldDocument._id});                                                       //
                }                                                                                                   // 148
                                                                                                                    //
                return removed;                                                                                     // 143
            }()                                                                                                     // 143
        });                                                                                                         // 84
    });                                                                                                             // 150
});                                                                                                                 // 151
                                                                                                                    //
Meteor.startup(function () {                                                                                        // 153
    GoogleMaps.load();                                                                                              // 154
});                                                                                                                 // 155
                                                                                                                    //
Template.map.helpers({                                                                                              // 157
    mapOptions: function () {                                                                                       // 158
        function mapOptions() {                                                                                     // 158
            if (GoogleMaps.loaded()) {                                                                              // 159
                return {                                                                                            // 160
                    center: new google.maps.LatLng(50.2880701, 18.6778916),                                         // 161
                    zoom: 15                                                                                        // 162
                };                                                                                                  // 160
            }                                                                                                       // 164
        }                                                                                                           // 165
                                                                                                                    //
        return mapOptions;                                                                                          // 158
    }()                                                                                                             // 158
});                                                                                                                 // 157
Template.addList.events({                                                                                           // 167
    'submit form': function () {                                                                                    // 168
        function submitForm(event) {                                                                                // 168
            event.preventDefault();                                                                                 // 169
            var listName = $('[name=listName]').val();                                                              // 170
            var currentUser = Meteor.userId();                                                                      // 171
            Lists.insert({                                                                                          // 172
                name: listName,                                                                                     // 173
                createdBy: currentUser                                                                              // 174
            }, function (error, results) {                                                                          // 172
                Router.go('listPage', { _id: results });                                                            // 176
            });                                                                                                     // 177
            $('[name=listName]').val('');                                                                           // 178
        }                                                                                                           // 179
                                                                                                                    //
        return submitForm;                                                                                          // 168
    }()                                                                                                             // 168
});                                                                                                                 // 167
                                                                                                                    //
Template.lists_all.helpers({                                                                                        // 182
    'list': function () {                                                                                           // 183
        function list() {                                                                                           // 183
            return Lists.find({}, { sort: { name: 1 } });                                                           // 184
        }                                                                                                           // 185
                                                                                                                    //
        return list;                                                                                                // 183
    }()                                                                                                             // 183
});                                                                                                                 // 182
                                                                                                                    //
Template.lists.helpers({                                                                                            // 188
    'list': function () {                                                                                           // 189
        function list() {                                                                                           // 189
            var currentUser = Meteor.userId();                                                                      // 190
            return Lists.find({ createdBy: currentUser }, { sort: { name: 1 } });                                   // 191
        }                                                                                                           // 192
                                                                                                                    //
        return list;                                                                                                // 189
    }()                                                                                                             // 189
});                                                                                                                 // 188
                                                                                                                    //
Template.todos.helpers({                                                                                            // 195
    'todo': function () {                                                                                           // 196
        function todo() {                                                                                           // 196
            var currentList = this._id;                                                                             // 197
            var currentUser = Meteor.userId();                                                                      // 198
            return Todos.find({ listId: currentList, createdBy: currentUser }, { sort: { createdAt: -1 } });        // 199
        }                                                                                                           // 200
                                                                                                                    //
        return todo;                                                                                                // 196
    }()                                                                                                             // 196
});                                                                                                                 // 195
                                                                                                                    //
Template.addTodo.events({                                                                                           // 203
    'submit form': function () {                                                                                    // 204
        function submitForm(event) {                                                                                // 204
            event.preventDefault();                                                                                 // 205
            var todoName = $('[name="todoName"]').val();                                                            // 206
            var currentUser = Meteor.userId();                                                                      // 207
            var currentList = this._id;                                                                             // 208
            var infowindows = $('[name=infos]').val();                                                              // 209
            console.log(infowindows);                                                                               // 210
            Todos.insert({                                                                                          // 211
                name: todoName,                                                                                     // 212
                completed: false,                                                                                   // 213
                createdAt: new Date(),                                                                              // 214
                createdBy: currentUser,                                                                             // 215
                listId: currentList,                                                                                // 216
                info: infowindows                                                                                   // 217
            });                                                                                                     // 211
            Markersinfo.insert({                                                                                    // 219
                createdBy: currentUser,                                                                             // 220
                info: infowindows });                                                                               // 221
            var markerinfo = Markersinfo.findOne({ createdBy: currentUser });                                       // 222
            console.log(markerinfo.info);                                                                           // 223
            $('[name="todoName"]').val('');                                                                         // 224
        }                                                                                                           // 225
                                                                                                                    //
        return submitForm;                                                                                          // 204
    }()                                                                                                             // 204
});                                                                                                                 // 203
                                                                                                                    //
Template.todoItem.events({                                                                                          // 228
    'click .delete-todo': function () {                                                                             // 229
        function clickDeleteTodo(event) {                                                                           // 229
            event.preventDefault();                                                                                 // 230
            var documentId = this._id;                                                                              // 231
            var confirm = window.confirm("Delete this task?");                                                      // 232
            if (confirm) {                                                                                          // 233
                Todos.remove({ _id: documentId });                                                                  // 234
            }                                                                                                       // 235
        }                                                                                                           // 236
                                                                                                                    //
        return clickDeleteTodo;                                                                                     // 229
    }(),                                                                                                            // 229
    'keyup [name=todoItem]': function () {                                                                          // 237
        function keyupNameTodoItem(event) {                                                                         // 237
            if (event.which == 13 || event.which == 27) {                                                           // 238
                $(event.target).blur();                                                                             // 239
            } else {                                                                                                // 240
                var documentId = this._id;                                                                          // 241
                var todoItem = $(event.target).val();                                                               // 242
                Todos.update({ _id: documentId }, { $set: { name: todoItem } });                                    // 243
            }                                                                                                       // 244
        }                                                                                                           // 245
                                                                                                                    //
        return keyupNameTodoItem;                                                                                   // 237
    }(),                                                                                                            // 237
    'change [type=checkbox]': function () {                                                                         // 246
        function changeTypeCheckbox() {                                                                             // 246
            var documentId = this._id;                                                                              // 247
            var isCompleted = this.completed;                                                                       // 248
            if (isCompleted) {                                                                                      // 249
                Todos.update({ _id: documentId }, { $set: { completed: false } });                                  // 250
                console.log("Task marked as incomplete.");                                                          // 251
            } else {                                                                                                // 252
                Todos.update({ _id: documentId }, { $set: { completed: true } });                                   // 253
                console.log("Task marked as complete.");                                                            // 254
            }                                                                                                       // 255
        }                                                                                                           // 256
                                                                                                                    //
        return changeTypeCheckbox;                                                                                  // 246
    }()                                                                                                             // 246
                                                                                                                    //
});                                                                                                                 // 228
                                                                                                                    //
Template.todoItem.helpers({                                                                                         // 260
    'checked': function () {                                                                                        // 261
        function checked() {                                                                                        // 261
            var isCompleted = this.completed;                                                                       // 262
            if (isCompleted) {                                                                                      // 263
                return "checked";                                                                                   // 264
            } else {                                                                                                // 265
                return "";                                                                                          // 266
            }                                                                                                       // 267
        }                                                                                                           // 268
                                                                                                                    //
        return checked;                                                                                             // 261
    }()                                                                                                             // 261
});                                                                                                                 // 260
                                                                                                                    //
Template.todosCount.helpers({                                                                                       // 271
    'totalTodos': function () {                                                                                     // 272
        function totalTodos() {                                                                                     // 272
            var currentList = this._id;                                                                             // 273
            return Todos.find({ listId: currentList }).count();                                                     // 274
        }                                                                                                           // 275
                                                                                                                    //
        return totalTodos;                                                                                          // 272
    }(),                                                                                                            // 272
    'completedTodos': function () {                                                                                 // 276
        function completedTodos() {                                                                                 // 276
            var currentList = this._id;                                                                             // 277
            return Todos.find({ listId: currentList, completed: true }).count();                                    // 278
        }                                                                                                           // 279
                                                                                                                    //
        return completedTodos;                                                                                      // 276
    }()                                                                                                             // 276
});                                                                                                                 // 271
                                                                                                                    //
Template.login.events({                                                                                             // 282
    'submit form': function () {                                                                                    // 283
        function submitForm(event) {                                                                                // 283
            event.preventDefault();                                                                                 // 284
            var username = $('[name=username]').val();                                                              // 285
            var password = $('[name=password]').val();                                                              // 286
            Meteor.loginWithPassword(username, password, function (error) {                                         // 287
                if (error) {                                                                                        // 288
                    console.log(error.reason);                                                                      // 289
                } else {                                                                                            // 290
                    Router.go("home");                                                                              // 291
                }                                                                                                   // 292
            });                                                                                                     // 293
        }                                                                                                           // 294
                                                                                                                    //
        return submitForm;                                                                                          // 283
    }()                                                                                                             // 283
});                                                                                                                 // 282
                                                                                                                    //
Template.register.events({                                                                                          // 297
    'submit form': function () {                                                                                    // 298
        function submitForm(event) {                                                                                // 298
            event.preventDefault();                                                                                 // 299
            var username = $('[name=username]').val();                                                              // 300
            var password = $('[name=password]').val();                                                              // 301
            Accounts.createUser({                                                                                   // 302
                username: username,                                                                                 // 303
                password: password                                                                                  // 304
            }, function (error) {                                                                                   // 302
                if (error) {                                                                                        // 306
                    console.log(error.reason);                                                                      // 307
                } else {                                                                                            // 308
                    Router.go("home");                                                                              // 309
                }                                                                                                   // 310
            });                                                                                                     // 311
        }                                                                                                           // 312
                                                                                                                    //
        return submitForm;                                                                                          // 298
    }()                                                                                                             // 298
});                                                                                                                 // 297
                                                                                                                    //
Template.navigation.events({                                                                                        // 315
    'click .logout': function () {                                                                                  // 316
        function clickLogout(event) {                                                                               // 316
            event.preventDefault();                                                                                 // 317
            Meteor.logout();                                                                                        // 318
            Router.go('login');                                                                                     // 319
        }                                                                                                           // 320
                                                                                                                    //
        return clickLogout;                                                                                         // 316
    }()                                                                                                             // 316
                                                                                                                    //
});                                                                                                                 // 315
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".css"]});
require("./client/template.main.js");
require("./client/main.js");