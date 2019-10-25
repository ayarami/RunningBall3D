import { _decorator, Component, Node, SpriteComponent, LabelComponent, loader, SpriteFrame, director } from "cc";
import Global, { UserData } from "./Global";
import Wechat from "./Platform/Wechat/Wechat";
import { RemoteSprite } from "./RemoteSprite";
const { ccclass, property } = _decorator;

@ccclass("RankLayer")
export class RankLayer extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(RemoteSprite)
    avatarSprite: RemoteSprite = null;

    @property(LabelComponent)
    nickNameLabel: LabelComponent = null;

    @property(LabelComponent)
    scoreLabel: LabelComponent = null;

    @property(LabelComponent)
    levelLabel: LabelComponent = null;

    @property(Node)
    LeftButton: Node = null;

    @property(Node)
    RightButton: Node = null;

    start () {
        // Your initialization goes here.
        director.on('WorldRankDataUpdated', () => {
            this.updateDisplay();
        }, this);
    }

    updateArrowAndLevelNum () {
        this.levelLabel.string = Global.rankLayerIndex + "";
        if (Global.rankLayerIndex == 1) {
            this.LeftButton.active = false;
            this.RightButton.active = true;
        }
        else if (Global.rankLayerIndex == Global.totleLevelNumber) {
            this.RightButton.active = false;
            this.LeftButton.active = true;
        }
        else {
            this.RightButton.active = true;
            this.LeftButton.active = true;
        }
    }

    updateDisplay () {
        this.updateArrowAndLevelNum();
        this.getLevelInfo((userData: UserData | null, score: number | null) => {
            if (userData && score) {
                this.avatarSprite.setImageUrl(userData.avatarUrl);
                this.nickNameLabel.string = userData.nickName;
                this.scoreLabel.string = Global.convertSecondToTimeString(score);
            }
            else {
                this.avatarSprite.setImageUrl("");
                this.nickNameLabel.string = "----";
                this.scoreLabel.string = "99\'99\'99";
            }
        })
    }

    getLevelInfo (cb: ((userData: UserData | null, score: number | null) => void)) {
        if (!Global.worldRankData) {
            cb(null, null);
            return;
        }
        const openid = Global.worldRankData[0].openid;
        const score = Global.worldRankData[0].score;
        Wechat.instance().getUserCloudData(openid, (userData: UserData) => {
            cb(userData, score);
        });
    }

    show () {
        this.node.active = true;
        this.updateArrowAndLevelNum();
        this.getInfo();
    }

    hide () {
        this.node.active = false;
    }

    left () {
        Global.rankLayerIndex--;
        this.updateArrowAndLevelNum();
        this.getInfo();
    }

    right () {
        Global.rankLayerIndex++;
        this.updateArrowAndLevelNum();
        this.getInfo();
    }

    getInfo () {
        Wechat.instance().getWorldRankInfo(Global.rankLayerIndex, (data: any) => {
            Global.worldRankData = data;
            director.emit('WorldRankDataUpdated');
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
