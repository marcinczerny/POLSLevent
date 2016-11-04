var supportedTypes = ['Map', 'StreetViewPanorama'];

GoogleMaps2 = {
  load: _.once(function(options) {
    options = _.extend({ v: '3.exp' }, options);
    var params = _.map(options, function(value, key) { return key + '=' + value; }).join('&');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?' + params +
 '&signed_in=true' + '&callback=GoogleMaps.initialize';

    document.body.appendChild(script);
  }),
  utilityLibraries: [],
  loadUtilityLibrary: function(path) {
    this.utilityLibraries.push(path);
  },
  _loaded: new ReactiveVar(false),
  loaded: function() {
    return this._loaded.get();
  },
  maps: {},
  _callbacks: {},
  initialize: function() {
    this._loaded.set(true);
    _.each(this.utilityLibraries, function(path) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = path;

      document.body.appendChild(script);
    });
  },
  _ready: function(name, map) {
    _.each(this._callbacks[name], function(cb) {
      if (_.isFunction(cb)) {
        cb(map);
      }
    });
  },
  ready: function(name, cb) {
    if (! this._callbacks[name]) {
      this._callbacks[name] = [];
    }
    // make sure we run the callback only once
    // as the tilesloaded event will also run after initial load
    this._callbacks[name].push(_.once(cb));
  },
  // options: function(options) {
  //   var self = this;
  //   return function() {
  //     if (self.loaded())
  //       return options();
  //   };
  // },
  get: function(name) {
    return this.maps[name];
  },
  _create: function(name, options) {
    var self = this;
    self.maps[name] = {
      instance: options.instance,
      options: options.options
    };

    if (options.type === 'StreetViewPanorama') {
      options.instance.setVisible(true);
      self._ready(name, self.maps[name]);
    } else {
      google.maps.event.addListener(options.instance, 'tilesloaded', function() {
        self._ready(name, self.maps[name]);
      });
    }
  },
  create: function(options) {
    // default to Map
    var type = options.type ? options.type : 'Map';
    if (! _.include(supportedTypes, type)) {
      throw new Meteor.Error("GoogleMaps - Invalid type argument: " + type);
    }

    this._create(options.name, {
      type: type,
      instance: new google.maps[type](options.element, options.options),
      options: options.options
    });
  }
};

Template.googleMap2.onRendered(function() {
  var self = this;
  self.autorun(function(c) {
    // if the api has loaded
    if (GoogleMaps2.loaded()) {
      var data = Template.currentData();

      if (! data.options) {
        return;
      }
      if (! data.name) {
        throw new Meteor.Error("GoogleMaps - Missing argument: name");
      }

      self._name = data.name;

      var canvas = self.$('.map-canvas-2').get(0);

      GoogleMaps2.create({
        name: data.name,
        type: data.type,
        element: canvas,
        options: data.options
      });

      c.stop();
    }
  });
});

Template.googleMap2.onDestroyed(function() {
  if (GoogleMaps2.maps[this._name]) {
    google.maps.event.clearInstanceListeners(GoogleMaps.maps[this._name].instance);
    delete GoogleMaps2.maps[this._name];
  }
});
