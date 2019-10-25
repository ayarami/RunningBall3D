import { _decorator, Component, Node, CCObject, SystemEventType, EventTouch, Touch, Vec2, director, math, Enum, CCInteger, v3, Vec3 } from "cc";
import { CharactorMovement } from "./CharactorMovement";
import Global from "../Global";
const { ccclass, property } = _decorator;

var EControllerDirection = Enum({
    FRONT   :   0,
    BACK    :   1,
    LEFT    :   2,
    RIGHT   :   3
})

@ccclass("CharactorController")
export class CharactorController extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property(Node)
    reciveInputNode: Node = null;

    @property(CharactorMovement)
    movement: CharactorMovement = null;

    @property
    movePower: number = 0;

    @property
    jumpPower: number = 0;

    private _pressTime: number = 0;
    private _pressStart: boolean = false;
    private _enableController: boolean = true;

    start () {
        // Your initialization goes here.
        if (this.reciveInputNode) {
            this.reciveInputNode.on(SystemEventType.TOUCH_START, this._touchStart, this);
            this.reciveInputNode.on(SystemEventType.TOUCH_MOVE, this._touchMove, this);
            this.reciveInputNode.on(SystemEventType.TOUCH_END, this._touchEnd, this);
        }
        this._pressTime = 0;
        this._pressStart = false;
        Global.EventSystem.on('GameWin', this.disableController, this)
    }

    disableController () {
        this._enableController = false;
    }

    _touchStart (event: EventTouch) {
        if (!this._enableController) {
            return;
        }
        var touches: Touch[] = event.getTouches();
        if (touches.length > 1) {
            return;
        }
        else if (this._pressStart === false) {
            this._pressStart = true;
            this._pressTime = 0;
        }
        else
            this._pressStart = false;
    }

    _touchMove (event: EventTouch) {
        if (!this._enableController) {
            return;
        }
        var touches: Touch[] = event.getTouches();
        if (touches.length > 1) {
            return;
        }
        else {
            var touch: Touch = touches[0];
            var startPos: Vec2 = touch.getStartLocationInView();
            var nowPos: Vec2 = touch.getLocationInView();
            var direction: Vec2 = nowPos.subtract(startPos);
            if (this._pressStart && direction.length() > 20) {
                var directionType = this._toDirection(direction);
                switch (directionType) {
                    case EControllerDirection.LEFT:
                        this.movement.addLeftImpluse(this.movePower);
                        break;
                    case EControllerDirection.RIGHT:
                        this.movement.addRightImpluse(this.movePower);
                        break;
                    case EControllerDirection.FRONT:
                        this.movement.addFrontImpluse(this.movePower);
                        break;
                    case EControllerDirection.BACK:
                        this.movement.addBackImpluse(this.movePower);
                        break;
                }
                console.log(directionType);
                this._pressStart = false;
                this._pressTime = 0;
            }
        }
    }

    _touchEnd (event: EventTouch) {
        if (!this._enableController) {
            return;
        }
        console.log("touchend", event);
        var touches: Touch[] = event.getTouches();
        if (touches.length > 1) {
            return;
        }
        else if (this._pressStart && this._pressTime > 0) {
            var touch: Touch = touches[0];
            var startPos: Vec2 = touch.getStartLocationInView();
            var nowPos: Vec2 = touch.getLocationInView();
            var direction: Vec2 = nowPos.subtract(startPos);
            if (direction.length() < 20) {
                var trulyTime = math.clamp(this._pressTime, 0.0, 2.0);
                var trulyPower = this.jumpPower * trulyTime / 2.0;
                this.movement.addTopImpluse(trulyPower);
            }
        }
        this._pressStart = false;
        this._pressTime = 0;
    }

    _toDirection (direction: Vec2): number {
        var angle = Vec2.angle(direction, new Vec2(1,0));
        var degree = math.toDegree(angle);
        if (degree < 50) {
            return EControllerDirection.RIGHT;
        }
        else if (degree > 130) {
            return EControllerDirection.LEFT;
        }
        else if (Math.abs(degree - 90) < 40) {
            if (direction.y > 0) {
                return EControllerDirection.BACK;
            }
            else {
                return EControllerDirection.FRONT;
            }
        }
    }

    update (deltaTime: number) {
        // Your update function goes here.
        if (this._pressStart) {
            this._pressTime += deltaTime;
        }
    }
}
