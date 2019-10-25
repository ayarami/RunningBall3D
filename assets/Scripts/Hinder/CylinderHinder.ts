import { _decorator, Component, Node, BoxColliderComponent, ICollisionEvent, AnimationComponent } from "cc";
import { CharactorMovement } from "../Charactor/CharactorMovement";
import Global from "../Global";
const { ccclass, property } = _decorator;

@ccclass("CylinderHinder")
export class CylinderHinder extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(BoxColliderComponent)
    collider: BoxColliderComponent = null;

    @property
    impluseScaler: number = 0;

    @property
    playOnLoad: number = 0;

    start () {
        // Your initialization goes here.
        this.collider.on("onCollisionEnter", (event: ICollisionEvent) => {
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor") {
                var normal = event.contacts[0].normal;
                var movement = ball.getComponent(CharactorMovement);
                movement.addImpluse(normal.multiplyScalar(this.impluseScaler));
            }
        });
        setTimeout(() => {
            this.node.getComponent(AnimationComponent).play();
        }, this.playOnLoad);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
