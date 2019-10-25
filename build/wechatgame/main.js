

function setupModuleSystem(settings) {
    var importMap = { imports: { }, };
    importMap.imports['cc'] = settings.debug ? 'cocos3d-js.js' : 'cocos3d-js.min.js';
    const importMapElement = document.createElement('script');
    importMapElement.type = ccEnv.importMapType;
    importMapElement.text = JSON.stringify(importMap, undefined, 2);
    document.body.appendChild(importMapElement);
}

function loadPrerequisiteModules(settings) {
    const promises = [];
    settings.scripts.forEach(function(script) {
        if (!script.defer) {
            promises.push(ccEnv.imp(script.moduleId));
        }
    });
    return Promise.all(promises);
}

function loadScriptPackages(settings) {
    
        if (settings.scriptPackages) {
            settings.scriptPackages.forEach((sp) => {
                require(sp);
            });
        }
        return Promise.resolve(0);
    
}

window.importEngine = function() {
    setupModuleSystem(window._CCSettings);
    return loadScriptPackages(window._CCSettings).then(function() {
        return ccEnv.imp("cc");
    });
};

window.boot = function () {
    var settings = window._CCSettings;
    window._CCSettings = undefined;

    

    function setLoadingDisplay () {
        // Loading splash scene
        var splash = document.getElementById('splash');
        var progressBar = splash.querySelector('.progress-bar span');
        cc.loader.onProgress = function (completedCount, totalCount, item) {
            var percent = 100 * completedCount / totalCount;
            if (progressBar) {
                progressBar.style.width = percent.toFixed(2) + '%';
            }
        };
        splash.style.display = 'block';
        progressBar.style.width = '0%';

        cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function () {
            splash.style.display = 'none';
        });
    }

    var onStart = function () {
        cc.loader.downloader._subpackages = settings.subpackages;

        cc.view.enableRetina(true);
        cc.view.resizeWithBrowserSize(true);
		
        
        cc.view.setDesignResolutionSize(960, 640, 4);
        
        // init assets
        cc.AssetLibrary.init({
            libraryPath: 'res/import',
            rawAssetsBase: 'res/raw-',
            rawAssets: settings.rawAssets,
            packedAssets: settings.packedAssets,
            md5AssetsMap: settings.md5AssetsMap,
            subpackages: settings.subpackages
        });

        var launchScene = settings.launchScene;
        loadPrerequisiteModules(settings).then(function() {
            // load scene
            cc.director.loadScene(launchScene, null,
                function () {
                    if (cc.sys.isBrowser) {
                        // show canvas
                        var canvas = document.getElementById('GameCanvas');
                        canvas.style.visibility = '';
                        var div = document.getElementById('GameDiv');
                        if (div) {
                            div.style.backgroundImage = '';
                        }
                    }
                    cc.loader.onProgress = null;
                    console.log('Success to load scene: ' + launchScene);
                }
            );
        });
    };

    // jsList
    var jsList = settings.jsList;
	/* <!--  --> */
	
		var bundledScript = 'src/project.dev.js';
        if (jsList) {
            jsList = jsList.map(function (x) {
                return 'src/' + x;
            });
        } else {
			jsList = [];
        }
	
    var option = {
        id: 'GameCanvas',
        scenes: settings.scenes,
        debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
        showFPS: !false && settings.debug,
        frameRate: 60,
        jsList: jsList,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
        renderpipeline: settings.renderpipeline,
    }

    cc.game.run(option, onStart);
};


if (window.jsb) {
    require('src/settings.js');
    require('src/-jsb.js');
    require('jsb-adapter/engine/index.js');
    window.boot();
}
