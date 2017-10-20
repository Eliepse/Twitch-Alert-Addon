var _app = {
    server : {
        url : "https://server.dev/streams/{user}"
    },
    user : "user_login",
    timeout: 60000,
    notifications : {
        live_on: {
            type: 'basic',
            title : 'Live en cours !',
            message: '{user} est actuellement en live.',
            iconUrl: chrome.extension.getURL("assets/icons/stream-on-32.png")
        }
    },
    notify: true
};
