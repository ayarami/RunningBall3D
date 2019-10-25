import { _decorator, Component, Node, ICollisionEvent, ColliderComponent, AudioSourceComponent } from "cc";
import Global from "../Global";
const { ccclass, property } = _decorator;

@ccclass("FinishPlane")
export class FinishPlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    private _audio: AudioSourceComponent = null;
    private _eventSended: boolean = false;

    start () {
        // Your initialization goes here.
        this._audio = this.node.getComponent(AudioSourceComponent);
        var collider = this.node.getComponent(ColliderComponent);
        collider.on("onCollisionEnter", (event: ICollisionEvent) => {
            if (this._eventSended) {
                return;
            }
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor") {
                Global.EventSystem.emit('GameWin');
                this._audio.play();
                this._eventSended = true;
            }
        });

        Global.levelTime = 0;
    }

    update (deltaTime: number) {
        // Your update function goes here.
        Global.levelTime += deltaTime;
    }
}
