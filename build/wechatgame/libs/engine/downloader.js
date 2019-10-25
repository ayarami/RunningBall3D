cc.loader.downloader.loadSubpackage = function(name, completeCallback) {
    wx.loadSubpackage({
        name: name,
        success: function() {
            Promise.all(packageModuleIds.map((id) => {
                return ccEnv.imp(id);
            })).then(() => {
                if (completeCallback) { completeCallback(); }
            }).catch((error) => {
                console.error(error);
                if (completeCallback) { completeCallback(new Error(`Failed to load subpackage ${name}`)); }
            });
        },
        fail: function() {
            if (completeCallback) { completeCallback(new Error(`Failed to load subpackage ${name}`)); }
        },
    });
};

function downloadScript(item, callback, isAsync) {
    var url = '../../' + item.url;
    require(url);
    callback(null, item.url);
}

function loadFont(item) {
    var url = item.url;
    var fontFamily = wx.loadFont(url);
    return fontFamily || 'Arial';
}

cc.loader.downloader.addHandlers({
    js : downloadScript,
});

cc.loader.loader.addHandlers({
    // Font
    font: loadFont,
    eot: loadFont,
    ttf: loadFont,
    woff: loadFont,
    svg: loadFont,
    ttc: loadFont,
});
