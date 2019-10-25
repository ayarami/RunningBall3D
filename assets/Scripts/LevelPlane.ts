import { _decorator, Component, Node, AnimationComponent, Prefab, instantiate, ScrollViewComponent, Vec3 } from "cc";
import { Level } from "./Level";
import Global from "./Global";
import Wechat from "./Platform/Wechat/Wechat";
const { ccclass, property } = _decorator;

@ccclass("LevelPlane")
export class LevelPlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Prefab)
    levelPrefab: Prefab = null;

    @property(Node)
    content: Node = null;

    @property(Node)
    LeftArrow: Node = null;

    @property(Node)
    RightArrow: Node = null;

    //private _page = 1;
    private _numOfPrePage = 3;

    start () {
        console.log(Global.userData.currentlevel);
        if (wx) {
            if (!Wechat.instance().isLoaded) {
                Wechat.instance().init(() => {
                    Wechat.instance().isLoaded = true;
                    this.init();
                });
            }
            else
                this.init();
        }
        else {
            this.init();
        }

        

        // Your initialization goes here.
        
    }

    init () {
        this.content.removeAllChildren();
        for (let i = 0; i < Global.totleLevelNumber; i++) {
            var node: Node = instantiate(this.levelPrefab);
            
            var level: Level = node.getComponent(Level);
            var isPassed = false;
            var isLocked = false;
            if (i + 1 < Global.userData.currentlevel) {
                isPassed = true;
            }
            else if (i + 1 > Global.userData.currentlevel) {
                isLocked = true;
            }
            level.init(i+1, isLocked, isPassed);
            this.content.addChild(node);
        }

        this.node.on('scrolling', this.updateArrow, this);
        this.updateArrow();
        setTimeout(() => {
            this.jumpToCurrentLevel();
        }, 500);
    }

    updateArrow () {
        if (this.content.position.x >= 0) {
            this.LeftArrow.active = false;
            this.RightArrow.active = true;
        }
        else if (this.content.position.x <= - this.content.getContentSize().width + 490) {
            this.LeftArrow.active = true;
            this.RightArrow.active = false;
        }
        else {
            this.LeftArrow.active = true;
            this.RightArrow.active = true;
        }
    }

    jumpToCurrentLevel () {
        var pageIndex = Math.floor((Global.userData.currentlevel - 0.5) / this._numOfPrePage);
        var contentPosX = 490 * pageIndex;
        var scrollview = this.node.getComponent(ScrollViewComponent);
        scrollview.scrollToOffset(new Vec3(contentPosX, 0, 0), 1, true);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
