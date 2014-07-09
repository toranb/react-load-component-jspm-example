System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "bundles": {
    "github:toranb/toranb-react-jspm-view@0.2.2/bundle": [
      "github:tildeio/rsvp.js@3.0.7/rsvp/events",
      "github:tildeio/rsvp.js@3.0.7/rsvp/utils",
      "github:tildeio/rsvp.js@3.0.7/rsvp/-internal",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise/resolve",
      "github:tildeio/rsvp.js@3.0.7/rsvp/enumerator",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise/race",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise/reject",
      "github:tildeio/rsvp.js@3.0.7/rsvp/node",
      "github:tildeio/rsvp.js@3.0.7/rsvp/all",
      "github:tildeio/rsvp.js@3.0.7/rsvp/all-settled",
      "github:tildeio/rsvp.js@3.0.7/rsvp/race",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise-hash",
      "github:tildeio/rsvp.js@3.0.7/rsvp/hash-settled",
      "github:tildeio/rsvp.js@3.0.7/rsvp/rethrow",
      "github:tildeio/rsvp.js@3.0.7/rsvp/defer",
      "github:tildeio/rsvp.js@3.0.7/rsvp/map",
      "github:tildeio/rsvp.js@3.0.7/rsvp/resolve",
      "github:tildeio/rsvp.js@3.0.7/rsvp/reject",
      "github:tildeio/rsvp.js@3.0.7/rsvp/filter",
      "github:tildeio/rsvp.js@3.0.7/rsvp/asap",
      "github:tildeio/rsvp.js@3.0.7/rsvp/config",
      "github:tildeio/rsvp.js@3.0.7/rsvp/instrument",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise/cast",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise/all",
      "github:tildeio/rsvp.js@3.0.7/rsvp/hash",
      "github:tildeio/rsvp.js@3.0.7/rsvp/promise",
      "github:tildeio/rsvp.js@3.0.7/rsvp.js",
      "github:tildeio/rsvp.js@3.0.7",
      "github:toranb/toranb-react-jspm-view@0.2.2/final"
    ]
  }
});

System.config({
  "map": {
    "react": "github:reactjs/react-bower@^0.10.0",
    "react-nested-router": "github:toranb/toranb-react-nested-router@^0.1.0",
    "github:toranb/toranb-react-nested-router@0.1.0": {
      "react": "github:reactjs/react-bower@^0.10.0"
    },
    "prefinal": "github:toranb/toranb-react-jspm-view@0.2.2",
    "github:toranb/toranb-react-jspm-view@0.2.2": {
      "react": "npm:react@0.10.0",
      "promise-mixin": "github:toranb/toranb-react-amd-rsvp-promise-mixin@0.1.2",
      "rsvp": "github:tildeio/rsvp.js@3.0.7"
    },
    "github:toranb/toranb-react-amd-rsvp-promise-mixin@0.1.2": {
      "rsvp": "github:tildeio/rsvp.js@3.0.7"
    },
    "npm:react@0.10.0": {},
    "github:jspm/nodelibs@0.0.2": {
      "inherits": "npm:inherits@^2.0.1",
      "Base64": "npm:Base64@0.2",
      "base64-js": "npm:base64-js@^0.0.4",
      "json": "github:systemjs/plugin-json@master",
      "ieee754": "npm:ieee754@^1.1.1"
    },
    "npm:inherits@2.0.1": {},
    "npm:Base64@0.2.1": {},
    "npm:base64-js@0.0.4": {},
    "npm:ieee754@1.1.3": {}
  }
});

System.config({
  "versions": {
    "github:reactjs/react-bower": "0.10.0",
    "github:toranb/toranb-react-nested-router": "0.1.0",
    "github:toranb/toranb-react-jspm-view": "0.2.2",
    "npm:react": "0.10.0",
    "github:toranb/toranb-react-amd-rsvp-promise-mixin": "0.1.2",
    "github:tildeio/rsvp.js": "3.0.7",
    "github:jspm/nodelibs": "0.0.2",
    "npm:inherits": "2.0.1",
    "npm:Base64": "0.2.1",
    "npm:base64-js": "0.0.4",
    "github:systemjs/plugin-json": "master",
    "npm:ieee754": "1.1.3"
  }
});

