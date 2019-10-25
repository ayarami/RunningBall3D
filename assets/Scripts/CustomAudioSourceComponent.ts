import { _decorator, Component, Node, SystemEventType, AudioSourceComponent, director, Director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CustomAudioSourceComponent")
export class CustomAudioSourceComponent extends AudioSourceComponent {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    autoStopWhenSceneChange: boolean = false;

    @property
    autoplayWhenClicked: boolean = true;

    start () {
        // Your initialization goes here.
        if (this.autoplayWhenClicked) {
            this.node.on(SystemEventType.TOUCH_START, () => {
                this.play();
            }, this);
        }

        if (this.autoStopWhenSceneChange) {
            director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
                this.stop();
            } , this);
        }
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
