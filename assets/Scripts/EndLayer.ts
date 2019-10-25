import { _decorator, Component, Node, director } from "cc";
import Global from "./Global";
const { ccclass, property } = _decorator;

@ccclass("EndLayer")
export class EndLayer extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Node)
    win: Node = null;

    @property(Node)
    lose: Node = null;

    @property(Node)
    again: Node = null;

    @property(Node)
    next: Node = null;

    sceneIndex: number = 0;

    private _isClicked: boolean = false;

    private _GameResult: boolean = false;
    setGameResult (value: boolean) {
        if (value) {
            this.win.active = true;
            this.lose.active = false;
            this.next.active = true;
            this.again.active = false;
        }
        else {
            this.win.active = false;
            this.lose.active = true;
            this.next.active = false;
            this.again.active = true;
        }
        this._GameResult = value;
    }

    getGameResult (): boolean {
        return this._GameResult;
    }

    start () {
        // Your initialization goes here.
    }

    clickAgain () {
        if (this._isClicked) {
            return;
        }
        this._isClicked = true;
        var name: string = "Level" + this.sceneIndex;
        director.emit('SceneChange');
        setTimeout(() => {
            director.loadScene(name, ()=>{}, ()=>{});
        }, 50);
    }

    clickNext () {
        if (this._isClicked) {
            return;
        }
        this._isClicked = true;
        var index = this.sceneIndex + 1;
        if (this.sceneIndex >= Global.totleLevelNumber) {
            this.clickReturn();
            return;
        }
        else {
            var name: string = "Level" + index;
            director.emit('SceneChange');
            setTimeout(() => {
                director.loadScene(name, ()=>{}, ()=>{});
            }, 50);
        }
    }

    clickReturn () {
        if (this._isClicked) {
            return;
        }
        this._isClicked = true;
        director.emit('SceneChange');
        setTimeout(() => {
            director.loadScene('Start', ()=>{}, ()=>{});
        }, 50);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
