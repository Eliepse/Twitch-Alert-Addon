
$(function(){
    
    restoreOptions();
    
    $("#notifications").change(function() {
        
        saveOptions('notifications', this.checked)
        
    });
    
});

function saveOptions(key, value) {
    
    var setting = {};
    setting[key] = value;
    
    chrome.storage.local.set(setting)
    
}

function restoreOptions() {

    chrome.storage.local.get('notifications', function(value) {
        
        $('#notifications').prop('checked', value['notifications']).change()
        
    });


}
