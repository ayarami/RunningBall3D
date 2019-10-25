import { _decorator, Component, Node, BoxColliderComponent, ITriggerEvent } from "cc";
import { CharactorMovement } from "../Charactor/CharactorMovement";
const { ccclass, property } = _decorator;

@ccclass("JumpPlane")
export class JumpPlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    JumpPower: number = 0;

    private _isJumped: boolean = false;

    start () {
        // Your initialization goes here.
        var collider = this.node.getComponent(BoxColliderComponent);
        collider.on("onTriggerEnter", (event: ITriggerEvent) => {
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor" && !this._isJumped) {
                var movement = ball.getComponent(CharactorMovement);
                movement.addTopImpluse(this.JumpPower);
                this._isJumped = true;
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
