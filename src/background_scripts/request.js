// The place to manage the requests to the server

var request_timeout;

function getRequestUrl() {

    return _app.server.url.replace('{user}', _app.user);

}

function checkStreamStatut() {

    console.log('Refreshing')

    reqwest({

        url: getRequestUrl(),
        method: 'get',

        success: function (resp) {

            handleSuccessResponse(resp)

        },

        error: function(resp) {

            delayedRefreshStatut()

        }

    })

}

function handleSuccessResponse(resp) {

    if(resp.data[_app.user] === false)
        changeLiveStatut(false)

    else if(resp.data[_app.user] === true)
        changeLiveStatut(true)


    delayedRefreshStatut(resp.timeout);

}

function delayedRefreshStatut(t) {

    if(!t)
        var t = _app.timeout;

    clearTimeout(request_timeout)

    setTimeout(function() {
        checkStreamStatut()
    }, t)
}
