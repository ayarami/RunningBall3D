import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("noteLayer")
export class noteLayer extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
    }

    show () {
        this.node.active = true;
    }

    hide () {
        this.node.active = false;
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
