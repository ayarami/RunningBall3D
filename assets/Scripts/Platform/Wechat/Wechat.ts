import Global, { UserData } from "../../Global";
import { __internal, director, Size } from "cc";

export default class Wechat {

    private static _instance: Wechat = null;

    public isLoaded: boolean = false;

    static instance () {
        if (!this._instance) {
            this._instance = new Wechat();
        }
        return this._instance;
    }

    constructor () {
        //初始化云开发环境
        wx.cloud.init({
            traceUser: true,
            env: 'runningball-wbdtu'
        });
    }

    getWorldRankInfo (level: number, cb : ((data: any) => void)) {
        var collectionName = "Level" + level;
        const db = wx.cloud.database();
        const $ = db.command;
        
        db.collection(collectionName).orderBy('score', 'asc').limit(1).get({
            success: (res) => {
                if (res.errMsg === "collection.get:ok") {
                    if (res.data.length > 0) {
                        cb(res.data);
                    }
                    else
                        cb(null);
                }
                else {
                    cb(null);
                }
                console.log(res);
            }
        })
    }

    setWorldRankInfo (level: number, score: number) {
        var collectionName = "Level" + level;
        const db = wx.cloud.database();
        const $ = db.command;

        db.collection(collectionName).where({
            openid: Global.userData.openid,
            score: $.gt(score)
        }).get({
            success: (res) => {
                if (res.errMsg === "collection.get:ok") {
                    if (res.data.length > 0) {
                        db.collection(collectionName).doc(res.data[0]._id).update({
                            data: {
                                score: score
                            }
                        })
                        return;
                    }
                }
                
                db.collection(collectionName).add({
                    data: {
                        openid: Global.userData.openid,
                        score: score
                    }
                })
            }
        })
    }

    getUserCloudData (openid: string, cb: ((userData: UserData | null) => void)) {
        const db = wx.cloud.database();
        db.collection('Data').where({
            openid: openid
        }).get({
            success: (res) => {
                if (res.errMsg === "collection.get:ok") {
                    var userData = new UserData(res.data[0]);
                    cb(userData);
                }
                else {
                    cb(null);
                }
            },
            fail: () => {
                cb(null);
            }
        })
    }

    addUserCloudData (option: UserData, cb: (() => void)) {
        const db = wx.cloud.database();
        db.collection('Data').add({
            data: option.toData(),
            success: (res) => {
                option._id = res._id;
                cb();
            }
        })
    }

    updateUserCloudData (newData: UserData, cb: (() => void)) {
        const db = wx.cloud.database();
        db.collection('Data').doc(newData._id).update({
            data : newData.toData(),
            success: (res) => {
                cb();
            }
        })
    }

    setUserCloudData (newData: UserData, cb: (() => void)) {
        if (newData.openid !== Global.userData.openid || newData._id !== Global.userData._id) {
            cb();
        }
        this.getUserCloudData(newData.openid, (userData: UserData | null) => {
            if (userData) {
                //存在记录
                this.updateUserCloudData(newData, cb);
            }
            else {
                //不存在记录，新建
                this.addUserCloudData(newData, cb);
            }
            cb();
        })
    }

    init (cb: (() => void)) {
        //this.authorize();
        this.login(cb);
    }

    loadSaveData (openid: string, cb: (() => void)) {
        this.getUserCloudData(openid, (userData) => {
            Global.userData = userData;
            if (cb) cb();
        });
    }

    uploadSaveData (cb: (() => void)) {
        this.setUserCloudData(Global.userData, cb);
    }

    login (cb: (() => void)) {
        var frameSize: Size = director.getWinSize();
        //创建用户信息按钮，全屏
        let button = wx.createUserInfoButton({
            type: "text",
            text: "",
            style: {
                left: 0,
                top: 0,
                width: frameSize.width,
                height: frameSize.height,
            }
        })
        button.onTap((res) => {
            var userInfo = res.userInfo;
            this.getUserOpenid((openid: string) => {
                Global.userData.openid = openid;
                Global.userData.avatarUrl = userInfo.avatarUrl;
                Global.userData.nickName = userInfo.nickName;
                this.getUserCloudData(openid, (data: UserData) => {
                    if (data) {
                        Global.userData.currentlevel = data.currentlevel;
                    }
                    else {
                        Global.userData.currentlevel = 1;
                    }
                    this.updateUserCloudData(Global.userData, () => {
                        cb();
                    })
                })
                button.destroy();
            })
        });

        wx.showShareMenu();
        //监听用户点击右上角菜单的“转发”按钮时触发的事件
        wx.onShareAppMessage(function(res){
            return {
                title: "RunningBall",
                imageUrl: "https://www.zzxgame.com.cn:18801/Client/RunningBall_Share.png",
            }
        });
    }

    getUserOpenid (cb: ((openid: string) => void)) {
        wx.cloud.callFunction({ 
            name: 'getOpenId',
            complete: (res) => {
                cb(res.result.openid);
            }
        });
    }
}

