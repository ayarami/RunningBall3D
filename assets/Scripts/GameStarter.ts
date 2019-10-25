import { _decorator, Component, Node, Prefab, instantiate, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameStarter")
export class GameStarter extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Prefab)
    CharactorPrefab: Prefab = null;

    start () {
        // Your initialization goes here.
        if (this.CharactorPrefab) {
            var scene = director.getScene();
            var node: Node = instantiate(this.CharactorPrefab)
            node.parent = scene;
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
