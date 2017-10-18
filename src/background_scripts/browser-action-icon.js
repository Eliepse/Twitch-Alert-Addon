function changeLiveStatut(statut) {

    if(live_statut === statut)
        return;

    if(statut)
        live_statut = true
    else
        live_statut = false

    refreshPluginIcon()

}

function refreshPluginIcon() {

    if(live_statut) {

        browser.browserAction.setIcon({
            path: 'assets/icons/stream-on-32png'
        });

    } else {

        browser.browserAction.setIcon({
            path: 'assets/icons/stream-off-32.png'
        });

    }

}
