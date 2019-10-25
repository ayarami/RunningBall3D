import { _decorator, Component, Node, ColliderComponent, ITriggerEvent, AudioSourceComponent } from "cc";
import Global from "./Global";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("LosePlane")
export class LosePlane extends Component {

    @property(Node)
    Charactor: Node = null;

    private _audio: AudioSourceComponent = null;

    private _eventSended: boolean = false;

    start () {
        this.init();
    }

    init () {
        this._audio = this.node.getComponent(AudioSourceComponent);
        this._eventSended = false;
    }

    update (deltaTime: number) {
        // Your update function goes here.
        if (this.Charactor.position.y < -5 && !this._eventSended) {
            Global.EventSystem.emit('GameLose');
            this._audio.play();
            this._eventSended = true;
        }
    }
}
