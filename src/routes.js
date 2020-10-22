export const routes = [


    { 
     path: '/oauth2/callback',
     component: require('./components/authHandler').default
    },
    { 
        path: '/gallary',
        component: require('./components/gallary').default
    },
    { 
        path: '/upload',
        component: require('./components/upload').default
    }

 ]