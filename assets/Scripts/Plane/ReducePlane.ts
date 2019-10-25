import { _decorator, Component, Node, AnimationComponent, BoxColliderComponent, ITriggerEvent, AudioSourceComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ReducePlane")
export class ReducePlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Node)
    MainPlane: Node = null;
    
    @property(AnimationComponent)
    SubPlane: AnimationComponent = null;

    private _isReduced: boolean = false;
    private _audio: AudioSourceComponent = null;

    start () {
        // Your initialization goes here.
        this._audio = this.node.getComponent(AudioSourceComponent);
        var collider = this.MainPlane.getComponent(BoxColliderComponent);
        collider.on("onTriggerEnter", (event: ITriggerEvent) => {
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor" && !this._isReduced) {
                this.SubPlane.play();
                this._isReduced = true;
                this._audio.play();
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
