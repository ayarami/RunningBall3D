'use strict';

System.register("project:///assets/Scripts/EndLayer.ts", ["cc", "./Global.ts"], function (_export, _context) {

  var _decorator, Component, Node, director, Global, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, EndLayer;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      director = _cc.director;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "44a13yf2fhPQakqLF1GAjq2", "EndLayer"); // begin EndLayer


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EndLayer", EndLayer = (_dec = ccclass("EndLayer"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(EndLayer, _Component);

        function EndLayer() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, EndLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(EndLayer)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "win", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "lose", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "again", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "next", _descriptor4, babelHelpers.assertThisInitialized(_this));
          _this.sceneIndex = 0;
          _this._isClicked = false;
          _this._GameResult = false;
          return _this;
        }

        babelHelpers.createClass(EndLayer, [{
          key: "setGameResult",
          value: function setGameResult(value) {
            if (value) {
              this.win.active = true;
              this.lose.active = false;
              this.next.active = true;
              this.again.active = false;
            } else {
              this.win.active = false;
              this.lose.active = true;
              this.next.active = false;
              this.again.active = true;
            }

            this._GameResult = value;
          }
        }, {
          key: "getGameResult",
          value: function getGameResult() {
            return this._GameResult;
          }
        }, {
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "clickAgain",
          value: function clickAgain() {
            if (this._isClicked) {
              return;
            }

            this._isClicked = true;
            var name = "Level" + this.sceneIndex;
            director.emit('SceneChange');
            setTimeout(function () {
              director.loadScene(name, function () {}, function () {});
            }, 50);
          }
        }, {
          key: "clickNext",
          value: function clickNext() {
            if (this._isClicked) {
              return;
            }

            this._isClicked = true;
            var index = this.sceneIndex + 1;

            if (this.sceneIndex >= Global.totleLevelNumber) {
              this.clickReturn();
              return;
            } else {
              var name = "Level" + index;
              director.emit('SceneChange');
              setTimeout(function () {
                director.loadScene(name, function () {}, function () {});
              }, 50);
            }
          }
        }, {
          key: "clickReturn",
          value: function clickReturn() {
            if (this._isClicked) {
              return;
            }

            this._isClicked = true;
            director.emit('SceneChange');
            setTimeout(function () {
              director.loadScene('Start', function () {}, function () {});
            }, 50);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return EndLayer;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "win", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "lose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "again", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "next", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end EndLayer

    }
  };
});

System.register("project:///assets/Scripts/GameInit.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, ccclass, property, GameInit;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "317cayy8YlA4r/06KWyNo/A", "GameInit"); // begin GameInit


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameInit", GameInit = (_dec = ccclass("GameInit"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameInit, _Component);

        function GameInit() {
          babelHelpers.classCallCheck(this, GameInit);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(GameInit).apply(this, arguments));
        }

        babelHelpers.createClass(GameInit, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return GameInit;
      }(Component)) || _class));

      cc._RF.pop(); // end GameInit

    }
  };
});

System.register("project:///assets/Scripts/GameScene.ts", ["cc", "./Global.ts", "./EndLayer.ts", "./Platform/Wechat/Wechat.ts"], function (_export, _context) {

  var _decorator, Component, Node, Global, EndLayer, Wechat, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, GameScene;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }, function (_EndLayerTs) {
      EndLayer = _EndLayerTs.EndLayer;
    }, function (_PlatformWechatWechatTs) {
      Wechat = _PlatformWechatWechatTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "b24300dn31IX4LtKG4pVrL0", "GameScene"); // begin GameScene


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameScene", GameScene = (_dec = ccclass("GameScene"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameScene, _Component);

        function GameScene() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameScene);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameScene)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "sceneIndex", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "endLayer", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameScene, [{
          key: "start",
          value: function start() {
            if (!this.endLayer) {
              return;
            } // Your initialization goes here.


            Global.EventSystem.on('GameLose', this.gameLose, this);
            Global.EventSystem.on('GameWin', this.gameWin, this);
            this.endLayer.getComponent(EndLayer).sceneIndex = this.sceneIndex;
          }
        }, {
          key: "gameWin",
          value: function gameWin() {
            if (!this.endLayer) {
              return;
            }

            this.endLayer.getComponent(EndLayer).setGameResult(true);
            this.endLayer.active = true;
            var nextIndex = this.sceneIndex + 1;
            var totleLevelNumber = Global.totleLevelNumber;
            nextIndex = nextIndex > totleLevelNumber ? totleLevelNumber : nextIndex;
            nextIndex = nextIndex > Global.userData.currentlevel ? nextIndex : Global.userData.currentlevel;
            Global.userData.currentlevel = nextIndex;
            Wechat.instance().setUserCloudData(Global.userData, function () {});
            Wechat.instance().setWorldRankInfo(this.sceneIndex, Global.levelTime);
          }
        }, {
          key: "gameLose",
          value: function gameLose() {
            if (!this.endLayer) {
              return;
            }

            this.endLayer.getComponent(EndLayer).setGameResult(false);
            this.endLayer.active = true;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return GameScene;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "sceneIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "endLayer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end GameScene

    }
  };
});

System.register("project:///assets/Scripts/GameStarter.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, Prefab, instantiate, director, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, GameStarter;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      director = _cc.director;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "2e40ctQY8hFCoQCa7phkKF/", "GameStarter"); // begin GameStarter


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameStarter", GameStarter = (_dec = ccclass("GameStarter"), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(GameStarter, _Component);

        function GameStarter() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, GameStarter);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(GameStarter)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "CharactorPrefab", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(GameStarter, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            if (this.CharactorPrefab) {
              var scene = director.getScene();
              var node = instantiate(this.CharactorPrefab);
              node.parent = scene;
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return GameStarter;
      }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "CharactorPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cc._RF.pop(); // end GameStarter

    }
  };
});

System.register("project:///assets/Scripts/Global.ts", ["cc"], function (_export, _context) {

  var EventTarget, UserData, Global;
  return {
    setters: [function (_cc) {
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "b1f44EMnEhJLbOWIppmP/BZ", "Global"); // begin Global


      _export("UserData", UserData =
      /*#__PURE__*/
      function () {
        function UserData(data) {
          babelHelpers.classCallCheck(this, UserData);
          this._id = "";
          this.openid = "";
          this.avatarUrl = "";
          this.nickName = "";
          this.currentlevel = 1;

          if (!data) {
            return;
          }

          this._id = data._id;
          this.openid = data.openid;
          this.avatarUrl = data.avatarUrl;
          this.nickName = data.nickName;
          this.currentlevel = data.currentlevel;
        }

        babelHelpers.createClass(UserData, [{
          key: "toData",
          value: function toData() {
            var data = {
              openid: this.openid,
              avatarUrl: this.avatarUrl,
              nickName: this.nickName,
              currentlevel: this.currentlevel
            };
            return data;
          }
        }]);
        return UserData;
      }());

      _export("default", Global =
      /*#__PURE__*/
      function () {
        function Global() {
          babelHelpers.classCallCheck(this, Global);
        }

        babelHelpers.createClass(Global, null, [{
          key: "convertSecondToTimeString",
          value: function convertSecondToTimeString(sec) {
            var second = Math.floor(sec);
            var millisecond = Math.round((sec - second) * 100);
            var msStr = millisecond < 10 ? "0" + millisecond : millisecond + "";
            var min = Math.floor(second / 60);
            var minStr = min < 10 ? "0" + min : min + "";
            second = second % 60;
            var secStr = second < 10 ? "0" + second : "" + second;
            var string = minStr + "\'" + secStr + "\'" + msStr;
            return string;
          }
        }]);
        return Global;
      }());

      Global.EventSystem = new EventTarget();
      Global.totleLevelNumber = 7;
      Global.userData = new UserData(null);
      Global.levelTime = 0;
      Global.rankLayerIndex = 1;
      Global.worldRankData = null;

      cc._RF.pop(); // end Global

    }
  };
});

System.register("project:///assets/Scripts/Level.ts", ["cc", "./LoadScene.ts"], function (_export, _context) {

  var _decorator, Component, Node, LabelComponent, ButtonComponent, LoadScene, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, Level;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      ButtonComponent = _cc.ButtonComponent;
    }, function (_LoadSceneTs) {
      LoadScene = _LoadSceneTs.LoadScene;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "96697sCmhtBZ4++SCpj1dpA", "Level"); // begin Level


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Level", Level = (_dec = ccclass("Level"), _dec2 = property(LabelComponent), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(Level, _Component);

        function Level() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, Level);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(Level)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "Label", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "Lock", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "Passed", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this._levelIndex = 0;
          _this._isLocked = false;
          _this._isPassed = false;
          return _this;
        }

        babelHelpers.createClass(Level, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "init",
          value: function init(levelIndex, isLocked, isPassed) {
            this._levelIndex = levelIndex;
            this._isLocked = isLocked;
            this._isPassed = isPassed;

            if (this._isLocked) {
              this.node.getComponent(ButtonComponent).enabled = false;
            } else {
              this.node.getComponent(ButtonComponent).enabled = true;
            }

            var loadScene = this.node.getComponent(LoadScene);
            loadScene.sceneIndex = this._levelIndex;
            this.updateDisplay();
          }
        }, {
          key: "updateDisplay",
          value: function updateDisplay() {
            this.Label.string = this._levelIndex.toString();

            if (this._isLocked) {
              this.Lock.active = true;
              this.Passed.active = false;
            } else if (this._isPassed) {
              this.Lock.active = false;
              this.Passed.active = true;
            } else {
              this.Lock.active = false;
              this.Passed.active = false;
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return Level;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "Label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "Lock", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "Passed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end Level

    }
  };
});

System.register("project:///assets/Scripts/LevelPlane.ts", ["cc", "./Level.ts", "./Global.ts", "./Platform/Wechat/Wechat.ts"], function (_export, _context) {

  var _decorator, Component, Node, Prefab, instantiate, ScrollViewComponent, Vec3, Level, Global, Wechat, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, LevelPlane;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      ScrollViewComponent = _cc.ScrollViewComponent;
      Vec3 = _cc.Vec3;
    }, function (_LevelTs) {
      Level = _LevelTs.Level;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }, function (_PlatformWechatWechatTs) {
      Wechat = _PlatformWechatWechatTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "ef78fF3HhVHP46QtAxFSyng", "LevelPlane"); // begin LevelPlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LevelPlane", LevelPlane = (_dec = ccclass("LevelPlane"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(LevelPlane, _Component);

        function LevelPlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, LevelPlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(LevelPlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "levelPrefab", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "content", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "LeftArrow", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "RightArrow", _descriptor4, babelHelpers.assertThisInitialized(_this));
          _this._numOfPrePage = 3;
          return _this;
        }

        babelHelpers.createClass(LevelPlane, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            console.log(Global.userData.currentlevel);

            if (wx) {
              if (!Wechat.instance().isLoaded) {
                Wechat.instance().init(function () {
                  Wechat.instance().isLoaded = true;

                  _this2.init();
                });
              } else this.init();
            } else {
              this.init();
            } // Your initialization goes here.

          }
        }, {
          key: "init",
          value: function init() {
            var _this3 = this;

            this.content.removeAllChildren();

            for (var i = 0; i < Global.totleLevelNumber; i++) {
              var node = instantiate(this.levelPrefab);
              var level = node.getComponent(Level);
              var isPassed = false;
              var isLocked = false;

              if (i + 1 < Global.userData.currentlevel) {
                isPassed = true;
              } else if (i + 1 > Global.userData.currentlevel) {
                isLocked = true;
              }

              level.init(i + 1, isLocked, isPassed);
              this.content.addChild(node);
            }

            this.node.on('scrolling', this.updateArrow, this);
            this.updateArrow();
            setTimeout(function () {
              _this3.jumpToCurrentLevel();
            }, 500);
          }
        }, {
          key: "updateArrow",
          value: function updateArrow() {
            if (this.content.position.x >= 0) {
              this.LeftArrow.active = false;
              this.RightArrow.active = true;
            } else if (this.content.position.x <= -this.content.getContentSize().width + 490) {
              this.LeftArrow.active = true;
              this.RightArrow.active = false;
            } else {
              this.LeftArrow.active = true;
              this.RightArrow.active = true;
            }
          }
        }, {
          key: "jumpToCurrentLevel",
          value: function jumpToCurrentLevel() {
            var pageIndex = Math.floor((Global.userData.currentlevel - 0.5) / this._numOfPrePage);
            var contentPosX = 490 * pageIndex;
            var scrollview = this.node.getComponent(ScrollViewComponent);
            scrollview.scrollToOffset(new Vec3(contentPosX, 0, 0), 1, true);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return LevelPlane;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "levelPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "LeftArrow", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "RightArrow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end LevelPlane

    }
  };
});

System.register("project:///assets/Scripts/LoadScene.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, director, AudioSourceComponent, find, Prefab, instantiate, CanvasComponent, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, LoadScene;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      AudioSourceComponent = _cc.AudioSourceComponent;
      find = _cc.find;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      CanvasComponent = _cc.CanvasComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "d1a542ah+JDTZ3MmeVoIxuf", "LoadScene"); // begin LoadScene


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadScene", LoadScene = (_dec = ccclass("LoadScene"), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(LoadScene, _Component);

        function LoadScene() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, LoadScene);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(LoadScene)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "sceneIndex", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "BlockLayerPrefab", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this._isClicked = false;
          return _this;
        }

        babelHelpers.createClass(LoadScene, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "clicked",
          value: function clicked() {
            if (this._isClicked) {
              return;
            }

            this._isClicked = true;
            var bgmAudio = find('BGM');
            console.log(bgmAudio);

            if (bgmAudio) {
              bgmAudio.getComponent(AudioSourceComponent).stop();
            }

            if (this.BlockLayerPrefab) {
              var blockLayer = instantiate(this.BlockLayerPrefab);
              var canvas = director.getRunningScene().getComponentInChildren(CanvasComponent);
              blockLayer.parent = canvas.node;
            }

            var name = "Level" + this.sceneIndex;
            setTimeout(function () {
              director.loadScene(name, function () {}, function () {});
            }, 500);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return LoadScene;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "sceneIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "BlockLayerPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end LoadScene

    }
  };
});

System.register("project:///assets/Scripts/LosePlane.ts", ["cc", "./Global.ts"], function (_export, _context) {

  var _decorator, Component, Node, AudioSourceComponent, Global, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, requireComponent, LosePlane;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "59805VSHjFMYLPB/0RWyOQO", "LosePlane"); // begin LosePlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;

      _export("LosePlane", LosePlane = (_dec = ccclass("LosePlane"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(LosePlane, _Component);

        function LosePlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, LosePlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(LosePlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "Charactor", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this._audio = null;
          _this._eventSended = false;
          return _this;
        }

        babelHelpers.createClass(LosePlane, [{
          key: "start",
          value: function start() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            this._audio = this.node.getComponent(AudioSourceComponent);
            this._eventSended = false;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this.Charactor.position.y < -5 && !this._eventSended) {
              Global.EventSystem.emit('GameLose');

              this._audio.play();

              this._eventSended = true;
            }
          }
        }]);
        return LosePlane;
      }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "Charactor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cc._RF.pop(); // end LosePlane

    }
  };
});

System.register("project:///assets/Scripts/RankLayer.ts", ["cc", "./Global.ts", "./Platform/Wechat/Wechat.ts", "./RemoteSprite.ts"], function (_export, _context) {

  var _decorator, Component, Node, LabelComponent, director, Global, Wechat, RemoteSprite, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp, ccclass, property, RankLayer;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      LabelComponent = _cc.LabelComponent;
      director = _cc.director;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }, function (_PlatformWechatWechatTs) {
      Wechat = _PlatformWechatWechatTs.default;
    }, function (_RemoteSpriteTs) {
      RemoteSprite = _RemoteSpriteTs.RemoteSprite;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "df8cfI1taxHC7xBShFWD4AJ", "RankLayer"); // begin RankLayer


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RankLayer", RankLayer = (_dec = ccclass("RankLayer"), _dec2 = property(RemoteSprite), _dec3 = property(LabelComponent), _dec4 = property(LabelComponent), _dec5 = property(LabelComponent), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(RankLayer, _Component);

        function RankLayer() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, RankLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(RankLayer)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "avatarSprite", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "nickNameLabel", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "scoreLabel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "levelLabel", _descriptor4, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "LeftButton", _descriptor5, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "RightButton", _descriptor6, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(RankLayer, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            director.on('WorldRankDataUpdated', function () {
              _this2.updateDisplay();
            }, this);
          }
        }, {
          key: "updateArrowAndLevelNum",
          value: function updateArrowAndLevelNum() {
            this.levelLabel.string = Global.rankLayerIndex + "";

            if (Global.rankLayerIndex == 1) {
              this.LeftButton.active = false;
              this.RightButton.active = true;
            } else if (Global.rankLayerIndex == Global.totleLevelNumber) {
              this.RightButton.active = false;
              this.LeftButton.active = true;
            } else {
              this.RightButton.active = true;
              this.LeftButton.active = true;
            }
          }
        }, {
          key: "updateDisplay",
          value: function updateDisplay() {
            var _this3 = this;

            this.updateArrowAndLevelNum();
            this.getLevelInfo(function (userData, score) {
              if (userData && score) {
                _this3.avatarSprite.setImageUrl(userData.avatarUrl);

                _this3.nickNameLabel.string = userData.nickName;
                _this3.scoreLabel.string = Global.convertSecondToTimeString(score);
              } else {
                _this3.avatarSprite.setImageUrl("");

                _this3.nickNameLabel.string = "----";
                _this3.scoreLabel.string = "99\'99\'99";
              }
            });
          }
        }, {
          key: "getLevelInfo",
          value: function getLevelInfo(cb) {
            if (!Global.worldRankData) {
              cb(null, null);
              return;
            }

            var openid = Global.worldRankData[0].openid;
            var score = Global.worldRankData[0].score;
            Wechat.instance().getUserCloudData(openid, function (userData) {
              cb(userData, score);
            });
          }
        }, {
          key: "show",
          value: function show() {
            this.node.active = true;
            this.updateArrowAndLevelNum();
            this.getInfo();
          }
        }, {
          key: "hide",
          value: function hide() {
            this.node.active = false;
          }
        }, {
          key: "left",
          value: function left() {
            Global.rankLayerIndex--;
            this.updateArrowAndLevelNum();
            this.getInfo();
          }
        }, {
          key: "right",
          value: function right() {
            Global.rankLayerIndex++;
            this.updateArrowAndLevelNum();
            this.getInfo();
          }
        }, {
          key: "getInfo",
          value: function getInfo() {
            Wechat.instance().getWorldRankInfo(Global.rankLayerIndex, function (data) {
              Global.worldRankData = data;
              director.emit('WorldRankDataUpdated');
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return RankLayer;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "avatarSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "nickNameLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "LeftButton", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "RightButton", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end RankLayer

    }
  };
});

System.register("project:///assets/Scripts/RemoteSprite.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, SpriteComponent, loader, Texture2D, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, requireComponent, RemoteSprite;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteComponent = _cc.SpriteComponent;
      loader = _cc.loader;
      Texture2D = _cc.Texture2D;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3fd20Rc0qtMS7DSiASyoSk/", "RemoteSprite"); // begin RemoteSprite


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;

      _export("RemoteSprite", RemoteSprite = (_dec = ccclass("RemoteSprite"), _dec2 = requireComponent(SpriteComponent), _dec3 = property(Texture2D), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(RemoteSprite, _Component);

        function RemoteSprite() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, RemoteSprite);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(RemoteSprite)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "imageUrl", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "defaultTexture", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this._sprite = null;
          return _this;
        }

        babelHelpers.createClass(RemoteSprite, [{
          key: "start",
          value: function start() {
            this.updateDisplay();
          }
        }, {
          key: "setImageUrl",
          value: function setImageUrl(value) {
            this.imageUrl = value;
            this.updateDisplay();
          }
        }, {
          key: "updateDisplay",
          value: function updateDisplay() {
            var _this2 = this;

            this._sprite = this.node.getComponent(SpriteComponent);

            if (!this.imageUrl || this.imageUrl === "") {
              this._sprite.spriteFrame.texture = this.defaultTexture;
              return;
            }

            loader.load({
              url: this.imageUrl,
              type: 'png'
            }, function (err, texture) {
              var tex = new Texture2D();
              tex.image = texture;
              _this2._sprite.spriteFrame.texture = tex;
            });
          }
        }]);
        return RemoteSprite;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "imageUrl", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "defaultTexture", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end RemoteSprite

    }
  };
});

System.register("project:///assets/Scripts/noteLayer.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, _dec, _class, ccclass, property, noteLayer;

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "e70867gAuBH1aRMEpQVyIUL", "noteLayer"); // begin noteLayer


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("noteLayer", noteLayer = (_dec = ccclass("noteLayer"), _dec(_class =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(noteLayer, _Component);

        function noteLayer() {
          babelHelpers.classCallCheck(this, noteLayer);
          return babelHelpers.possibleConstructorReturn(this, babelHelpers.getPrototypeOf(noteLayer).apply(this, arguments));
        }

        babelHelpers.createClass(noteLayer, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "show",
          value: function show() {
            this.node.active = true;
          }
        }, {
          key: "hide",
          value: function hide() {
            this.node.active = false;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return noteLayer;
      }(Component)) || _class));

      cc._RF.pop(); // end noteLayer

    }
  };
});

System.register("project:///assets/Scripts/Charactor/CharactorCamera.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, Node, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, CharactorCamera;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "e6051bfvPxMl7DOHwjhH4sK", "CharactorCamera"); // begin CharactorCamera


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CharactorCamera", CharactorCamera = (_dec = ccclass("CharactorCamera"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CharactorCamera, _Component);

        function CharactorCamera() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CharactorCamera);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CharactorCamera)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "charactor", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "XAxisFollow", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "YAxisFollow", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "ZAxisFollow", _descriptor4, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(CharactorCamera, [{
          key: "start",
          value: function start() {// Your initialization goes here.
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            var pos = this.node.position;

            if (this.XAxisFollow) {
              pos.x = this.charactor.position.x;
            }

            if (this.XAxisFollow) {
              pos.y = this.charactor.position.y;
            }

            if (this.XAxisFollow) {
              pos.z = this.charactor.position.z;
            }

            this.node.position = pos;
          }
        }]);
        return CharactorCamera;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "charactor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "XAxisFollow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "YAxisFollow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "ZAxisFollow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end CharactorCamera

    }
  };
});

System.register("project:///assets/Scripts/Charactor/CharactorController.ts", ["cc", "./CharactorMovement.ts", "../Global.ts"], function (_export, _context) {

  var _decorator, Component, Node, SystemEventType, Vec2, math, Enum, CharactorMovement, Global, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, ccclass, property, EControllerDirection, CharactorController;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      SystemEventType = _cc.SystemEventType;
      Vec2 = _cc.Vec2;
      math = _cc.math;
      Enum = _cc.Enum;
    }, function (_CharactorMovementTs) {
      CharactorMovement = _CharactorMovementTs.CharactorMovement;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "3f987c7PI5DYpvQbOWjRgxI", "CharactorController"); // begin CharactorController


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      EControllerDirection = Enum({
        FRONT: 0,
        BACK: 1,
        LEFT: 2,
        RIGHT: 3
      });

      _export("CharactorController", CharactorController = (_dec = ccclass("CharactorController"), _dec2 = property(Node), _dec3 = property(CharactorMovement), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CharactorController, _Component);

        function CharactorController() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CharactorController);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CharactorController)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "reciveInputNode", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "movement", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "movePower", _descriptor3, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "jumpPower", _descriptor4, babelHelpers.assertThisInitialized(_this));
          _this._pressTime = 0;
          _this._pressStart = false;
          _this._enableController = true;
          return _this;
        }

        babelHelpers.createClass(CharactorController, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            if (this.reciveInputNode) {
              this.reciveInputNode.on(SystemEventType.TOUCH_START, this._touchStart, this);
              this.reciveInputNode.on(SystemEventType.TOUCH_MOVE, this._touchMove, this);
              this.reciveInputNode.on(SystemEventType.TOUCH_END, this._touchEnd, this);
            }

            this._pressTime = 0;
            this._pressStart = false;
            Global.EventSystem.on('GameWin', this.disableController, this);
          }
        }, {
          key: "disableController",
          value: function disableController() {
            this._enableController = false;
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(event) {
            if (!this._enableController) {
              return;
            }

            var touches = event.getTouches();

            if (touches.length > 1) {
              return;
            } else if (this._pressStart === false) {
              this._pressStart = true;
              this._pressTime = 0;
            } else this._pressStart = false;
          }
        }, {
          key: "_touchMove",
          value: function _touchMove(event) {
            if (!this._enableController) {
              return;
            }

            var touches = event.getTouches();

            if (touches.length > 1) {
              return;
            } else {
              var touch = touches[0];
              var startPos = touch.getStartLocationInView();
              var nowPos = touch.getLocationInView();
              var direction = nowPos.subtract(startPos);

              if (this._pressStart && direction.length() > 20) {
                var directionType = this._toDirection(direction);

                switch (directionType) {
                  case EControllerDirection.LEFT:
                    this.movement.addLeftImpluse(this.movePower);
                    break;

                  case EControllerDirection.RIGHT:
                    this.movement.addRightImpluse(this.movePower);
                    break;

                  case EControllerDirection.FRONT:
                    this.movement.addFrontImpluse(this.movePower);
                    break;

                  case EControllerDirection.BACK:
                    this.movement.addBackImpluse(this.movePower);
                    break;
                }

                console.log(directionType);
                this._pressStart = false;
                this._pressTime = 0;
              }
            }
          }
        }, {
          key: "_touchEnd",
          value: function _touchEnd(event) {
            if (!this._enableController) {
              return;
            }

            console.log("touchend", event);
            var touches = event.getTouches();

            if (touches.length > 1) {
              return;
            } else if (this._pressStart && this._pressTime > 0) {
              var touch = touches[0];
              var startPos = touch.getStartLocationInView();
              var nowPos = touch.getLocationInView();
              var direction = nowPos.subtract(startPos);

              if (direction.length() < 20) {
                var trulyTime = math.clamp(this._pressTime, 0.0, 2.0);
                var trulyPower = this.jumpPower * trulyTime / 2.0;
                this.movement.addTopImpluse(trulyPower);
              }
            }

            this._pressStart = false;
            this._pressTime = 0;
          }
        }, {
          key: "_toDirection",
          value: function _toDirection(direction) {
            var angle = Vec2.angle(direction, new Vec2(1, 0));
            var degree = math.toDegree(angle);

            if (degree < 50) {
              return EControllerDirection.RIGHT;
            } else if (degree > 130) {
              return EControllerDirection.LEFT;
            } else if (Math.abs(degree - 90) < 40) {
              if (direction.y > 0) {
                return EControllerDirection.BACK;
              } else {
                return EControllerDirection.FRONT;
              }
            }
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (this._pressStart) {
              this._pressTime += deltaTime;
            }
          }
        }]);
        return CharactorController;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "reciveInputNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "movement", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "movePower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "jumpPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end CharactorController

    }
  };
});

System.register("project:///assets/Scripts/Charactor/CharactorMovement.ts", ["cc", "../Global.ts"], function (_export, _context) {

  var _decorator, Component, Vec3, RigidBodyComponent, AudioClip, AudioSourceComponent, Global, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, requireComponent, CharactorMovement;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      RigidBodyComponent = _cc.RigidBodyComponent;
      AudioClip = _cc.AudioClip;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "157465VS7JMJIqs945jX1yj", "CharactorMovement"); // begin CharactorMovement


      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;

      _export("CharactorMovement", CharactorMovement = (_dec = ccclass("CharactorMovement"), _dec2 = requireComponent(RigidBodyComponent), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec(_class = _dec2(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CharactorMovement, _Component);

        function CharactorMovement() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CharactorMovement);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CharactorMovement)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._rigidBody = null;
          _this._jumping = false;
          babelHelpers.initializerDefineProperty(_this, "movementAudio", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "jumpAudio", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this._audio = null;
          return _this;
        }

        babelHelpers.createClass(CharactorMovement, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this._audio = this.node.getComponent(AudioSourceComponent);
            this._rigidBody = this.node.getComponent(RigidBodyComponent);
            Global.EventSystem.on('GameWin', this.stopMove, this);
          }
        }, {
          key: "playMovementAudio",
          value: function playMovementAudio() {
            this._audio.stop();

            if (this._audio.clip != this.movementAudio) {
              this._audio.clip = this.movementAudio;
            }

            this._audio.play();
          }
        }, {
          key: "playJumpAudio",
          value: function playJumpAudio() {
            this._audio.stop();

            if (this._audio.clip != this.jumpAudio) {
              this._audio.clip = this.jumpAudio;
            }

            this._audio.play();
          }
        }, {
          key: "stopMove",
          value: function stopMove() {
            if (this._rigidBody) {
              this._rigidBody.setLinearVelocity(new Vec3(0, 0, 0));

              this._rigidBody.sleep();
            }
          }
        }, {
          key: "addFrontImpluse",
          value: function addFrontImpluse(power) {
            if (this._jumping) {
              return;
            }

            this._rigidBody.applyImpulse(new Vec3(power, 0, 0));

            this.playMovementAudio();
          }
        }, {
          key: "addLeftImpluse",
          value: function addLeftImpluse(power) {
            if (this._jumping) {
              return;
            }

            this._rigidBody.applyImpulse(new Vec3(0, 0, -power / 2));

            this.playMovementAudio();
          }
        }, {
          key: "addRightImpluse",
          value: function addRightImpluse(power) {
            if (this._jumping) {
              return;
            }

            this._rigidBody.applyImpulse(new Vec3(0, 0, power / 2));

            this.playMovementAudio();
          }
        }, {
          key: "addBackImpluse",
          value: function addBackImpluse(power) {
            if (this._jumping) {
              return;
            }

            this._rigidBody.applyImpulse(new Vec3(-power, 0, 0));

            this.playMovementAudio();
          }
        }, {
          key: "addTopImpluse",
          value: function addTopImpluse(power) {
            if (this._jumping) {
              return;
            }

            this._rigidBody.applyImpulse(new Vec3(0, power, 0));

            this.playJumpAudio();
          }
        }, {
          key: "addImpluse",
          value: function addImpluse(vector) {
            this._rigidBody.applyImpulse(vector);
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            if (Math.abs(this.node.position.y - 0.5) < 0.01) {
              this._jumping = false;
            } else {
              this._jumping = true;
            }
          }
        }]);
        return CharactorMovement;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "movementAudio", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "jumpAudio", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      cc._RF.pop(); // end CharactorMovement

    }
  };
});

System.register("project:///assets/Scripts/Hinder/CylinderHinder.ts", ["cc", "../Charactor/CharactorMovement.ts"], function (_export, _context) {

  var _decorator, Component, BoxColliderComponent, AnimationComponent, CharactorMovement, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, CylinderHinder;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BoxColliderComponent = _cc.BoxColliderComponent;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_CharactorCharactorMovementTs) {
      CharactorMovement = _CharactorCharactorMovementTs.CharactorMovement;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "2a603mLwVtFa6Osyi5OJxv+", "CylinderHinder"); // begin CylinderHinder


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CylinderHinder", CylinderHinder = (_dec = ccclass("CylinderHinder"), _dec2 = property(BoxColliderComponent), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(CylinderHinder, _Component);

        function CylinderHinder() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CylinderHinder);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CylinderHinder)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "collider", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "impluseScaler", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "playOnLoad", _descriptor3, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(CylinderHinder, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this.collider.on("onCollisionEnter", function (event) {
              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor") {
                var normal = event.contacts[0].normal;
                var movement = ball.getComponent(CharactorMovement);
                movement.addImpluse(normal.multiplyScalar(_this2.impluseScaler));
              }
            });
            setTimeout(function () {
              _this2.node.getComponent(AnimationComponent).play();
            }, this.playOnLoad);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return CylinderHinder;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "collider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "impluseScaler", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "playOnLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end CylinderHinder

    }
  };
});

System.register("project:///assets/Scripts/Plane/AddPlane.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, Node, BoxColliderComponent, AnimationComponent, ModelComponent, AudioSourceComponent, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, ccclass, property, AddPlane;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      BoxColliderComponent = _cc.BoxColliderComponent;
      AnimationComponent = _cc.AnimationComponent;
      ModelComponent = _cc.ModelComponent;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "58ce6sNv+dG9JoIyC436yva", "AddPlane"); // begin AddPlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AddPlane", AddPlane = (_dec = ccclass("AddPlane"), _dec2 = property(Node), _dec3 = property(AnimationComponent), _dec4 = property(ModelComponent), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(AddPlane, _Component);

        function AddPlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, AddPlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(AddPlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "MainPlane", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "SubPlane", _descriptor2, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "SubPlaneModel", _descriptor3, babelHelpers.assertThisInitialized(_this));
          _this._isAdded = false;
          _this._audio = null;
          return _this;
        }

        babelHelpers.createClass(AddPlane, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this._audio = this.node.getComponent(AudioSourceComponent);
            this.SubPlaneModel.enabled = false;
            var collider = this.MainPlane.getComponent(BoxColliderComponent);
            collider.on("onTriggerEnter", function (event) {
              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor" && !_this2._isAdded) {
                _this2.SubPlane.play();

                _this2._isAdded = true;
                _this2.SubPlaneModel.enabled = true;

                _this2._audio.play();
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return AddPlane;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "MainPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "SubPlane", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "SubPlaneModel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end AddPlane

    }
  };
});

System.register("project:///assets/Scripts/Plane/FinishPlane.ts", ["cc", "../Global.ts"], function (_export, _context) {

  var _decorator, Component, ColliderComponent, AudioSourceComponent, Global, _dec, _class, _temp, ccclass, property, FinishPlane;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ColliderComponent = _cc.ColliderComponent;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_GlobalTs) {
      Global = _GlobalTs.default;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "6ceaeE/xGlErbyfix5pCgsV", "FinishPlane"); // begin FinishPlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FinishPlane", FinishPlane = (_dec = ccclass("FinishPlane"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(FinishPlane, _Component);

        function FinishPlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, FinishPlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(FinishPlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._audio = null;
          _this._eventSended = false;
          return _this;
        }

        babelHelpers.createClass(FinishPlane, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this._audio = this.node.getComponent(AudioSourceComponent);
            var collider = this.node.getComponent(ColliderComponent);
            collider.on("onCollisionEnter", function (event) {
              if (_this2._eventSended) {
                return;
              }

              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor") {
                Global.EventSystem.emit('GameWin');

                _this2._audio.play();

                _this2._eventSended = true;
              }
            });
            Global.levelTime = 0;
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            Global.levelTime += deltaTime;
          }
        }]);
        return FinishPlane;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end FinishPlane

    }
  };
});

System.register("project:///assets/Scripts/Plane/JumpPlane.ts", ["cc", "../Charactor/CharactorMovement.ts"], function (_export, _context) {

  var _decorator, Component, BoxColliderComponent, CharactorMovement, _dec, _class, _class2, _descriptor, _temp, ccclass, property, JumpPlane;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BoxColliderComponent = _cc.BoxColliderComponent;
    }, function (_CharactorCharactorMovementTs) {
      CharactorMovement = _CharactorCharactorMovementTs.CharactorMovement;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "770edf8ptdA+5zwqD0/EQ3N", "JumpPlane"); // begin JumpPlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("JumpPlane", JumpPlane = (_dec = ccclass("JumpPlane"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(JumpPlane, _Component);

        function JumpPlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, JumpPlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(JumpPlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "JumpPower", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this._isJumped = false;
          return _this;
        }

        babelHelpers.createClass(JumpPlane, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            var collider = this.node.getComponent(BoxColliderComponent);
            collider.on("onTriggerEnter", function (event) {
              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor" && !_this2._isJumped) {
                var movement = ball.getComponent(CharactorMovement);
                movement.addTopImpluse(_this2.JumpPower);
                _this2._isJumped = true;
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return JumpPlane;
      }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "JumpPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class));

      cc._RF.pop(); // end JumpPlane

    }
  };
});

System.register("project:///assets/Scripts/Plane/MovePlane.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, SphereColliderComponent, AnimationComponent, AudioSourceComponent, _dec, _class, _temp, ccclass, property, MovePlane;

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SphereColliderComponent = _cc.SphereColliderComponent;
      AnimationComponent = _cc.AnimationComponent;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "aeee61UcKFCX659vFxQm7Dk", "MovePlane"); // begin MovePlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MovePlane", MovePlane = (_dec = ccclass("MovePlane"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(MovePlane, _Component);

        function MovePlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, MovePlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(MovePlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          _this._isMoved = false;
          _this._animation = null;
          _this._audio = null;
          return _this;
        }

        babelHelpers.createClass(MovePlane, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this._animation = this.node.getComponent(AnimationComponent);
            this._audio = this.node.getComponent(AudioSourceComponent);
            var collider = this.node.getComponent(SphereColliderComponent);
            collider.on("onTriggerEnter", function (event) {
              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor" && !_this2._isMoved) {
                _this2._animation.play();

                _this2._isMoved = true;

                _this2._audio.play();
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return MovePlane;
      }(Component), _temp)) || _class));

      cc._RF.pop(); // end MovePlane

    }
  };
});

System.register("project:///assets/Scripts/Plane/ReducePlane.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, Node, AnimationComponent, BoxColliderComponent, AudioSourceComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, ReducePlane;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      AnimationComponent = _cc.AnimationComponent;
      BoxColliderComponent = _cc.BoxColliderComponent;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "8fac6yeqK1BfKr3Zfj2gOIQ", "ReducePlane"); // begin ReducePlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("ReducePlane", ReducePlane = (_dec = ccclass("ReducePlane"), _dec2 = property(Node), _dec3 = property(AnimationComponent), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(ReducePlane, _Component);

        function ReducePlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, ReducePlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(ReducePlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "MainPlane", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "SubPlane", _descriptor2, babelHelpers.assertThisInitialized(_this));
          _this._isReduced = false;
          _this._audio = null;
          return _this;
        }

        babelHelpers.createClass(ReducePlane, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this._audio = this.node.getComponent(AudioSourceComponent);
            var collider = this.MainPlane.getComponent(BoxColliderComponent);
            collider.on("onTriggerEnter", function (event) {
              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor" && !_this2._isReduced) {
                _this2.SubPlane.play();

                _this2._isReduced = true;

                _this2._audio.play();
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return ReducePlane;
      }(Component), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "MainPlane", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "SubPlane", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end ReducePlane

    }
  };
});

System.register("project:///assets/Scripts/Plane/SpeedUpPlane.ts", ["cc", "../Charactor/CharactorMovement.ts"], function (_export, _context) {

  var _decorator, Component, BoxColliderComponent, AudioSourceComponent, CharactorMovement, _dec, _class, _class2, _descriptor, _temp, ccclass, property, SpeedUpPlane;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BoxColliderComponent = _cc.BoxColliderComponent;
      AudioSourceComponent = _cc.AudioSourceComponent;
    }, function (_CharactorCharactorMovementTs) {
      CharactorMovement = _CharactorCharactorMovementTs.CharactorMovement;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "ea03aYKz/1JVYvsuvqxjoS2", "SpeedUpPlane"); // begin SpeedUpPlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SpeedUpPlane", SpeedUpPlane = (_dec = ccclass("SpeedUpPlane"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SpeedUpPlane, _Component);

        function SpeedUpPlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SpeedUpPlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SpeedUpPlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "SpeedUpPower", _descriptor, babelHelpers.assertThisInitialized(_this));
          _this._isSpeedUpped = false;
          _this._audio = null;
          return _this;
        }

        babelHelpers.createClass(SpeedUpPlane, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            this._audio = this.node.getComponent(AudioSourceComponent);
            var collider = this.node.getComponent(BoxColliderComponent);
            collider.on("onTriggerEnter", function (event) {
              var otherCollider = event.otherCollider;
              var ball = otherCollider.node;

              if (ball.name == "Charactor" && !_this2._isSpeedUpped) {
                var movement = ball.getComponent(CharactorMovement);
                movement.addFrontImpluse(_this2.SpeedUpPower);
                _this2._isSpeedUpped = true;

                _this2._audio.play();
              }
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return SpeedUpPlane;
      }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "SpeedUpPower", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _class2)) || _class));

      cc._RF.pop(); // end SpeedUpPlane

    }
  };
});

System.register("project:///assets/Scripts/Plane/SubPlane.ts", ["cc"], function (_export, _context) {

  var _decorator, Component, Material, ModelComponent, AnimationComponent, _dec, _dec2, _class, _class2, _descriptor, _temp, ccclass, property, SubPlane;

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Material = _cc.Material;
      ModelComponent = _cc.ModelComponent;
      AnimationComponent = _cc.AnimationComponent;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "a62b3uHVA1KqILAOkTvffn+", "SubPlane"); // begin SubPlane


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("SubPlane", SubPlane = (_dec = ccclass("SubPlane"), _dec2 = property(Material), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        babelHelpers.inherits(SubPlane, _Component);

        function SubPlane() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, SubPlane);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(SubPlane)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "mat", _descriptor, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(SubPlane, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            var animation = this.node.getComponent(AnimationComponent);
            animation.on('ChangeMat', this.ChangeMat, this);
          }
        }, {
          key: "ChangeMat",
          value: function ChangeMat() {
            console.log("ChangeMat");
            var model = this.node.getComponent(ModelComponent);
            model.sharedMaterials[0] = this.mat;
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return SubPlane;
      }(Component), _temp), _descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "mat", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cc._RF.pop(); // end SubPlane

    }
  };
});

System.register("project:///assets/Scripts/Platform/Wechat/Wechat.ts", ["../../Global.ts", "cc"], function (_export, _context) {

  var Global, UserData, director, Wechat;
  return {
    setters: [function (_GlobalTs) {
      Global = _GlobalTs.default;
      UserData = _GlobalTs.UserData;
    }, function (_cc) {
      director = _cc.director;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "b5ce3m25SxPOrO7i1Y3sl/7", "Wechat"); // begin Wechat


      _export("default", Wechat =
      /*#__PURE__*/
      function () {
        babelHelpers.createClass(Wechat, null, [{
          key: "instance",
          value: function instance() {
            if (!this._instance) {
              this._instance = new Wechat();
            }

            return this._instance;
          }
        }]);

        function Wechat() {
          babelHelpers.classCallCheck(this, Wechat);
          this.isLoaded = false; //初始化云开发环境

          wx.cloud.init({
            traceUser: true,
            env: 'runningball-wbdtu'
          });
        }

        babelHelpers.createClass(Wechat, [{
          key: "getWorldRankInfo",
          value: function getWorldRankInfo(level, cb) {
            var collectionName = "Level" + level;
            var db = wx.cloud.database();
            var $ = db.command;
            db.collection(collectionName).orderBy('score', 'asc').limit(1).get({
              success: function success(res) {
                if (res.errMsg === "collection.get:ok") {
                  if (res.data.length > 0) {
                    cb(res.data);
                  } else cb(null);
                } else {
                  cb(null);
                }

                console.log(res);
              }
            });
          }
        }, {
          key: "setWorldRankInfo",
          value: function setWorldRankInfo(level, score) {
            var collectionName = "Level" + level;
            var db = wx.cloud.database();
            var $ = db.command;
            db.collection(collectionName).where({
              openid: Global.userData.openid,
              score: $.gt(score)
            }).get({
              success: function success(res) {
                if (res.errMsg === "collection.get:ok") {
                  if (res.data.length > 0) {
                    db.collection(collectionName).doc(res.data[0]._id).update({
                      data: {
                        score: score
                      }
                    });
                    return;
                  }
                }

                db.collection(collectionName).add({
                  data: {
                    openid: Global.userData.openid,
                    score: score
                  }
                });
              }
            });
          }
        }, {
          key: "getUserCloudData",
          value: function getUserCloudData(openid, cb) {
            var db = wx.cloud.database();
            db.collection('Data').where({
              openid: openid
            }).get({
              success: function success(res) {
                if (res.errMsg === "collection.get:ok") {
                  var userData = new UserData(res.data[0]);
                  cb(userData);
                } else {
                  cb(null);
                }
              },
              fail: function fail() {
                cb(null);
              }
            });
          }
        }, {
          key: "addUserCloudData",
          value: function addUserCloudData(option, cb) {
            var db = wx.cloud.database();
            db.collection('Data').add({
              data: option.toData(),
              success: function success(res) {
                option._id = res._id;
                cb();
              }
            });
          }
        }, {
          key: "updateUserCloudData",
          value: function updateUserCloudData(newData, cb) {
            var db = wx.cloud.database();
            db.collection('Data').doc(newData._id).update({
              data: newData.toData(),
              success: function success(res) {
                cb();
              }
            });
          }
        }, {
          key: "setUserCloudData",
          value: function setUserCloudData(newData, cb) {
            var _this = this;

            if (newData.openid !== Global.userData.openid || newData._id !== Global.userData._id) {
              cb();
            }

            this.getUserCloudData(newData.openid, function (userData) {
              if (userData) {
                //存在记录
                _this.updateUserCloudData(newData, cb);
              } else {
                //不存在记录，新建
                _this.addUserCloudData(newData, cb);
              }

              cb();
            });
          }
        }, {
          key: "init",
          value: function init(cb) {
            //this.authorize();
            this.login(cb);
          }
        }, {
          key: "loadSaveData",
          value: function loadSaveData(openid, cb) {
            this.getUserCloudData(openid, function (userData) {
              Global.userData = userData;
              if (cb) cb();
            });
          }
        }, {
          key: "uploadSaveData",
          value: function uploadSaveData(cb) {
            this.setUserCloudData(Global.userData, cb);
          }
        }, {
          key: "login",
          value: function login(cb) {
            var _this2 = this;

            var frameSize = director.getWinSize(); //创建用户信息按钮，全屏

            var button = wx.createUserInfoButton({
              type: "text",
              text: "",
              style: {
                left: 0,
                top: 0,
                width: frameSize.width,
                height: frameSize.height
              }
            });
            button.onTap(function (res) {
              var userInfo = res.userInfo;

              _this2.getUserOpenid(function (openid) {
                Global.userData.openid = openid;
                Global.userData.avatarUrl = userInfo.avatarUrl;
                Global.userData.nickName = userInfo.nickName;

                _this2.getUserCloudData(openid, function (data) {
                  if (data) {
                    Global.userData.currentlevel = data.currentlevel;
                  } else {
                    Global.userData.currentlevel = 1;
                  }

                  _this2.updateUserCloudData(Global.userData, function () {
                    cb();
                  });
                });

                button.destroy();
              });
            });
            wx.showShareMenu(); //监听用户点击右上角菜单的“转发”按钮时触发的事件

            wx.onShareAppMessage(function (res) {
              return {
                title: "RunningBall",
                imageUrl: "https://www.zzxgame.com.cn:18801/Client/RunningBall_Share.png"
              };
            });
          }
        }, {
          key: "getUserOpenid",
          value: function getUserOpenid(cb) {
            wx.cloud.callFunction({
              name: 'getOpenId',
              complete: function complete(res) {
                cb(res.result.openid);
              }
            });
          }
        }]);
        return Wechat;
      }());

      Wechat._instance = null;

      cc._RF.pop(); // end Wechat

    }
  };
});

System.register("project:///assets/Scripts/CustomAudioSourceComponent.ts", ["cc"], function (_export, _context) {

  var _decorator, SystemEventType, AudioSourceComponent, director, Director, _dec, _class, _class2, _descriptor, _descriptor2, _temp, ccclass, property, CustomAudioSourceComponent;

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      SystemEventType = _cc.SystemEventType;
      AudioSourceComponent = _cc.AudioSourceComponent;
      director = _cc.director;
      Director = _cc.Director;
    }],
    execute: function () {
      cc._RF.push(window.module || {}, "aeb59+uoZBFyLGuZmOEqw+w", "CustomAudioSourceComponent"); // begin CustomAudioSourceComponent


      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CustomAudioSourceComponent", CustomAudioSourceComponent = (_dec = ccclass("CustomAudioSourceComponent"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_AudioSourceComponent) {
        babelHelpers.inherits(CustomAudioSourceComponent, _AudioSourceComponent);

        function CustomAudioSourceComponent() {
          var _babelHelpers$getProt;

          var _this;

          babelHelpers.classCallCheck(this, CustomAudioSourceComponent);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = babelHelpers.possibleConstructorReturn(this, (_babelHelpers$getProt = babelHelpers.getPrototypeOf(CustomAudioSourceComponent)).call.apply(_babelHelpers$getProt, [this].concat(args)));
          babelHelpers.initializerDefineProperty(_this, "autoStopWhenSceneChange", _descriptor, babelHelpers.assertThisInitialized(_this));
          babelHelpers.initializerDefineProperty(_this, "autoplayWhenClicked", _descriptor2, babelHelpers.assertThisInitialized(_this));
          return _this;
        }

        babelHelpers.createClass(CustomAudioSourceComponent, [{
          key: "start",
          value: function start() {
            var _this2 = this; // Your initialization goes here.


            if (this.autoplayWhenClicked) {
              this.node.on(SystemEventType.TOUCH_START, function () {
                _this2.play();
              }, this);
            }

            if (this.autoStopWhenSceneChange) {
              director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, function () {
                _this2.stop();
              }, this);
            }
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);
        return CustomAudioSourceComponent;
      }(AudioSourceComponent), _temp), (_descriptor = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "autoStopWhenSceneChange", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = babelHelpers.applyDecoratedDescriptor(_class2.prototype, "autoplayWhenClicked", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));

      cc._RF.pop(); // end CustomAudioSourceComponent

    }
  };
});
