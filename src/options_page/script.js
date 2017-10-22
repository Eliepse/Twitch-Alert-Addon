// Load when page is loaded

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}



ready(function() {
    
    restoreOptions();
    
    document.querySelector('#notifications').addEventListener('change', function() {
        
        saveOptions('notifications', this.checked)
        
    })
    
})

function saveOptions(key, value) {
    
    var setting = {};
    setting[key] = value;
    
    chrome.storage.local.set(setting)
    
}

function restoreOptions() {

    chrome.storage.local.get('notifications', function(value) {
        
        document.querySelector('#notifications').checked = value['notifications']
        
    });

}
