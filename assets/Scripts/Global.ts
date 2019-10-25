import { EventTarget, loader, AudioClip } from "cc";

export class UserData {

    public _id: string = "";

    public openid: string = "";

    public avatarUrl: string = "";

    public nickName: string = "";

    public currentlevel: number = 1;

    constructor (data: any) {
        if (!data) {
            return;
        }
        this._id = data._id;
        this.openid = data.openid;
        this.avatarUrl = data.avatarUrl;
        this.nickName = data.nickName;
        this.currentlevel = data.currentlevel;
    }

    toData (): object {
        var data = {
            openid: this.openid,
            avatarUrl: this.avatarUrl,
            nickName: this.nickName,
            currentlevel: this.currentlevel
        }
        return data;
    }
}

export default class Global {
    static EventSystem: EventTarget = new EventTarget();

    static totleLevelNumber: number = 7;

    static userData: UserData = new UserData(null);

    static levelTime: number = 0;

    static rankLayerIndex: number = 1;

    static worldRankData: any = null;

    static convertSecondToTimeString (sec: number) {
        var time = sec * 1000;
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
}
