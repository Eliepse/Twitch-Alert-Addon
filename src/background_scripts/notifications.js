function showNotification(params) {
    
    chrome.storage.local.get('notifications', function(value) {
        
        if(value['notifications'] === false) return;
        
        if(_app.notifications || value['notifications']) {
            
            params = hydrateObj(params)
            chrome.notifications.create(params)
            
        }
        
    });
    
}

function notify(nodes) {

    console.log('Notify user')
    
    if(!_app.notify)
        return
    
    var params = _app.notifications
    var path = nodes.split('.')
    
    for(var i_node=0; i_node < path.length; i_node++) {
        
            params = params[ path[i_node] ];
        
    }
    
    if(!params) return

    showNotification(params)

}
