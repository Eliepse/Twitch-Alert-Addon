function refreshPluginIcon() {

    if(live_statut) {

        console.log('Live on !')

        changeIcon('online')

        notify('live_on');

    } else {

        console.log('Live off !')

        changeIcon('offline')

    }

}

function changeIcon(state) {
    
    var path;
    
    switch(state) {
        case 'online':
            path = 'assets/icons/stream-on-32.png';
            break;
            
        case 'offline':
            path = 'assets/icons/stream-off-32.png';
            break;
            
        default:
            path = 'assets/icons/stream-off-32.png';
    }
    
    chrome.browserAction.setIcon({ path: path });
    
}
