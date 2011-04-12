// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Twitter',
    url: 'JavaScripts/TwitterWindow.js',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Twitter',
    window:win1
});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'@',
    url: 'JavaScripts/TwitterMentionWindow.js',
    backgroundColor:'#fff'
});

var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'@',
    window:win2
});

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
    title:'flickr',
    url: 'JavaScripts/FlickrWindow.js',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'flickr',
    window:win3
});


//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  


// open tab group
tabGroup.open();
