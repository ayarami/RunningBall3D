import { _decorator, Component, Node, BoxColliderComponent, ITriggerEvent, AudioSourceComponent } from "cc";
import { CharactorMovement } from "../Charactor/CharactorMovement";
const { ccclass, property } = _decorator;

@ccclass("SpeedUpPlane")
export class SpeedUpPlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    SpeedUpPower: number = 0;

    private _isSpeedUpped: boolean = false;
    private _audio: AudioSourceComponent = null;

    start () {
        // Your initialization goes here.
        this._audio = this.node.getComponent(AudioSourceComponent);
        var collider = this.node.getComponent(BoxColliderComponent);
        collider.on("onTriggerEnter", (event: ITriggerEvent) => {
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor" && !this._isSpeedUpped) {
                var movement = ball.getComponent(CharactorMovement);
                movement.addFrontImpluse(this.SpeedUpPower);
                this._isSpeedUpped = true;
                this._audio.play();
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
