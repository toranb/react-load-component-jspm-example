This example shows how you can/ or cannot bundle up react components and load only whats needed

**To run the react app locally**

    npm install jspm

    jspm install
    jspm bundle app/router

    python -m SimpleHTTPServer 3000

    visit http://localhost:3000 to see the running app

**What I did to setup this web app**

    jspm install react=github:reactjs/react-bower -o "{main: 'react', format: 'global'}" -f
    jspm install react-nested-router=github:toranb/toranb-react-nested-router
    jspm install prefinal=github:toranb/toranb-react-jspm-view@0.2.2
