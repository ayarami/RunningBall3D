import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CharactorCamera")
export class CharactorCamera extends Component {
    
    @property(Node)
    charactor: Node = null;

    @property
    XAxisFollow: boolean = true;

    @property
    YAxisFollow: boolean = false;

    @property
    ZAxisFollow: boolean = false;

    start () {
        // Your initialization goes here.
    }

    update (deltaTime: number) {
        // Your update function goes here.
        var pos: Vec3 = this.node.position;
        if (this.XAxisFollow) {
            pos.x = this.charactor.position.x;
        }
        if (this.XAxisFollow) {
            pos.y = this.charactor.position.y;
        }
        if (this.XAxisFollow) {
            pos.z = this.charactor.position.z;
        }
        this.node.position = pos;
    }
}
