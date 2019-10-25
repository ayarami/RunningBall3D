import { _decorator, Component, Node, LabelComponent, ButtonComponent } from "cc";
import { LoadScene } from "./LoadScene";
const { ccclass, property } = _decorator;

@ccclass("Level")
export class Level extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(LabelComponent)
    Label: LabelComponent = null;

    @property(Node)
    Lock: Node = null;

    @property(Node)
    Passed: Node = null;

    private _levelIndex: number = 0;
    private _isLocked: boolean = false;
    private _isPassed: boolean = false;

    start () {
        // Your initialization goes here.
    }

    init (levelIndex: number, isLocked: boolean, isPassed: boolean) {
        this._levelIndex = levelIndex;
        this._isLocked = isLocked;
        this._isPassed = isPassed;
        
        if (this._isLocked) {
            this.node.getComponent(ButtonComponent).enabled = false;
        }
        else {
            this.node.getComponent(ButtonComponent).enabled = true;
        }

        var loadScene = this.node.getComponent(LoadScene);
        loadScene.sceneIndex = this._levelIndex;

        this.updateDisplay();
    }

    updateDisplay () {
        this.Label.string = this._levelIndex.toString();
        if (this._isLocked) {
            this.Lock.active = true;
            this.Passed.active = false;
        }
        else if (this._isPassed) {
            this.Lock.active = false;
            this.Passed.active = true;
        }
        else {
            this.Lock.active = false;
            this.Passed.active = false;
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
