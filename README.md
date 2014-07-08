This example shows how you can/ or cannot bundle up react components and load only whats needed

**To run the react app locally**

    npm install jspm

    jspm install react=github:reactjs/react-bower -o "{main: 'react', format: 'global'}" -f
    jspm install react-nested-router=github:toranb/toranb-react-nested-router
    jspm install ajax-mixin=github:toranb/toranb-react-cjs-rsvp-ajax-mixin
    jspm install prefinal=github:toranb/toranb-react-jspm-view@0.1.7
    jspm install rsvp=github:tildeio/rsvp.js@3.0.7 -o "{main: 'lib/rsvp.js'}"

    cd jspm_packages/github/tildeio/rsvp.js@3.0.7
    mv rsvp.js rsvp.js.js
    cd -

    jspm bundle app/router

    python -m SimpleHTTPServer 3000

    visit http://localhost:3000 to see the running app
