function hydrateStr(str) {
    
    return str.replace('{user}', _app.user)
    
}

function hydrateObj(obj) {
    
    for(var t in obj) {
        
        if(obj.hasOwnProperty(t))
            obj[t] = hydrateStr(obj[t])
        
    }
    
    return obj
    
}
