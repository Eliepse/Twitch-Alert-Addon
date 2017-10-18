// The main background script

console.log('App background launched !')

var live_statut = false;

setTimeout(function() {

    checkStreamStatut()

}, 1000)
