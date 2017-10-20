function showNotification(params) {
    
    console.log(params)
    
    params = hydrateObj(params)
    
    console.log(params)
    
    chrome.notifications.create(params)
    
}

function notify(nodes) {

    console.log('Notify user')
    
    if(!_app.notify)
        return
    
    var params = _app.notifications
    var path = nodes.split('.')
    
    console.log(params, path);
    
    for(var i_node=0; i_node < path.length; i_node++) {
        
            params = params[ path[i_node] ];
        
    }
    
    if(!params) return

    showNotification(params)

}
