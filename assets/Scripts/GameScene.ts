import { _decorator, Component, Node } from "cc";
import Global from "./Global";
import { EndLayer } from "./EndLayer";
import Wechat from "./Platform/Wechat/Wechat";
const { ccclass, property } = _decorator;

@ccclass("GameScene")
export class GameScene extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    sceneIndex: number = 0;

    @property(Node)
    endLayer: Node = null;

    start () {
        if (!this.endLayer) {
            return;
        }
        // Your initialization goes here.
        Global.EventSystem.on('GameLose', this.gameLose, this);
        Global.EventSystem.on('GameWin', this.gameWin, this);
        this.endLayer.getComponent(EndLayer).sceneIndex = this.sceneIndex;
    }

    gameWin () {
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
        
        Wechat.instance().setUserCloudData(Global.userData, () => {});
        Wechat.instance().setWorldRankInfo(this.sceneIndex, Global.levelTime);
    }

    gameLose () {
        if (!this.endLayer) {
            return;
        }
        this.endLayer.getComponent(EndLayer).setGameResult(false);
        this.endLayer.active = true;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
