// The place to manage the requests to the server

function getRequestUrl() {

    return _app.server.url.replace('{user}', _app.user);

}

function checkStreamStatut() {

    reqwest({

        url: getRequestUrl(),
        method: 'get',

        success: function (resp) {
            handleSuccessResponse(resp)
        },

        error: function(resp) {

            setTimeout(function() {
                checkStreamStatut()
            }, _app.timeout)

        }

    })

}

function handleSuccessResponse(resp) {

    if(resp.data[_app.user] === false)
        changeLiveStatut(false)

    else if(resp.data[_app.user] === true)
        changeLiveStatut(true)


    if(resp.timeout)
        var t = resp.timeout
    else
        var t = _app.timeout;


    setTimeout(function() {
        checkStreamStatut()
    }, t)

}
