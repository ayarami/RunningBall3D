import { _decorator, Component, Node, Material, ModelComponent, AnimationComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("SubPlane")
export class SubPlane extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Material)
    mat: Material = null;

    start () {
        // Your initialization goes here.
        var animation = this.node.getComponent(AnimationComponent);
        animation.on('ChangeMat', this.ChangeMat, this);
    }

    ChangeMat () {
        console.log("ChangeMat");
        var model = this.node.getComponent(ModelComponent);
        model.sharedMaterials[0] = this.mat;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
