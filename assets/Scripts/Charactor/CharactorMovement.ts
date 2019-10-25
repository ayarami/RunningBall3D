import { _decorator, Component, Node, Vec3, Vec2, RigidBodyComponent, AudioClip, AudioSourceComponent } from "cc";
import Global from "../Global";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("CharactorMovement")
@requireComponent(RigidBodyComponent)
export class CharactorMovement extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    private _rigidBody: RigidBodyComponent = null;

    private _jumping: boolean = false;

    @property(AudioClip)
    movementAudio: AudioClip = null;

    @property(AudioClip)
    jumpAudio: AudioClip = null;

    private _audio: AudioSourceComponent = null;

    start () {
        // Your initialization goes here.
        this._audio = this.node.getComponent(AudioSourceComponent);
        this._rigidBody = this.node.getComponent(RigidBodyComponent);
        Global.EventSystem.on('GameWin', this.stopMove, this);
    }

    playMovementAudio () {
        this._audio.stop();
        if (this._audio.clip != this.movementAudio) {
            this._audio.clip = this.movementAudio;
        }
        this._audio.play();
    }

    playJumpAudio () {
        this._audio.stop();
        if (this._audio.clip != this.jumpAudio) {
            this._audio.clip = this.jumpAudio;
        }
        this._audio.play();
    }

    stopMove () {
        if (this._rigidBody) {
            this._rigidBody.setLinearVelocity(new Vec3(0,0,0));
            this._rigidBody.sleep();
        }
    }

    addFrontImpluse (power: number) {
        if (this._jumping) {
            return;
        }
        this._rigidBody.applyImpulse(new Vec3(power, 0, 0));
        this.playMovementAudio();
    }

    addLeftImpluse (power: number) {
        if (this._jumping) {
            return;
        }
        this._rigidBody.applyImpulse(new Vec3(0, 0, -power / 2));
        this.playMovementAudio();
    }

    addRightImpluse (power: number) {
        if (this._jumping) {
            return;
        }
        this._rigidBody.applyImpulse(new Vec3(0, 0, power / 2));
        this.playMovementAudio();
    }

    addBackImpluse (power: number) {
        if (this._jumping) {
            return;
        }
        this._rigidBody.applyImpulse(new Vec3(-power, 0, 0));
        this.playMovementAudio();
    }

    addTopImpluse (power: number) {
        if (this._jumping) {
            return;
        }
        this._rigidBody.applyImpulse(new Vec3(0, power, 0));
        this.playJumpAudio();
    }

    addImpluse (vector: Vec3) {
        this._rigidBody.applyImpulse(vector);
    }

    update (deltaTime: number) {
        // Your update function goes here.
        if (Math.abs(this.node.position.y - 0.5) < 0.01) {
            this._jumping = false;
        }
        else {
            this._jumping = true;
        }
    }
}
