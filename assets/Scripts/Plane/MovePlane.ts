import { _decorator, Component, Node, SphereColliderComponent, ITriggerEvent, AnimationComponent, AudioSourceComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MovePlane")
export class MovePlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    private _isMoved: boolean = false;
    private _animation: AnimationComponent = null;
    private _audio: AudioSourceComponent = null;

    start () {
        // Your initialization goes here.
        this._animation = this.node.getComponent(AnimationComponent);
        this._audio = this.node.getComponent(AudioSourceComponent);
        var collider = this.node.getComponent(SphereColliderComponent);
        collider.on("onTriggerEnter", (event: ITriggerEvent) => {
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor" && !this._isMoved) {
                this._animation.play();
                this._isMoved = true;
                this._audio.play();
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
