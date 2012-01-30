var windows = {
        'mobile 240x320': [240, 320],
        'mobile 320x480': [320, 480],
        'small tablet': [480, 640],
        'tablet - portrait': [768, 1024],
        'tablet - landscape': [1024, 768]
    }, 
    i, 
    url = window.location.href;

for(i in windows){
    if(windows.hasOwnProperty(i)){
        var params = windows[i],
            win = window.open(url, i, 'width='+ params[0] + ',height='+params[1]);
        win.document.title = i;
    } 
}