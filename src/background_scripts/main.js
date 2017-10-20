// The main background script

console.log('App background launched !')

var live_statut = false;

setTimeout(function() {

    checkStreamStatut()

}, 1000)

function changeLiveStatut(statut) {

    if(live_statut === statut)
        return;

    if(statut)
        live_statut = true
    else
        live_statut = false

    refreshPluginIcon()

}
