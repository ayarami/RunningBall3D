import { _decorator, Component, Node, ITriggerEvent, BoxColliderComponent, AnimationComponent, ModelComponent, AudioSourceComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("AddPlane")
export class AddPlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Node)
    MainPlane: Node = null;
    
    @property(AnimationComponent)
    SubPlane: AnimationComponent = null;

    @property(ModelComponent)
    SubPlaneModel: ModelComponent = null;

    private _isAdded: boolean = false;

    private _audio: AudioSourceComponent = null;

    start () {
        // Your initialization goes here.
        this._audio = this.node.getComponent(AudioSourceComponent);
        this.SubPlaneModel.enabled = false;
        var collider = this.MainPlane.getComponent(BoxColliderComponent);
        collider.on("onTriggerEnter", (event: ITriggerEvent) => {
            var otherCollider = event.otherCollider;
            var ball = otherCollider.node;
            if (ball.name == "Charactor" && !this._isAdded) {
                this.SubPlane.play();
                this._isAdded = true;
                this.SubPlaneModel.enabled = true;
                this._audio.play();
            }
        });
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
