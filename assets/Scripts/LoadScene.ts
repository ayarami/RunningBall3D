import { _decorator, Component, Node, director, AudioSourceComponent, find, Prefab, instantiate, CanvasComponent } from "cc";
const { ccclass, property } = _decorator;

@ccclass("LoadScene")
export class LoadScene extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property
    sceneIndex: number = 1;

    @property(Prefab)
    BlockLayerPrefab: Prefab = null;

    private _isClicked: boolean = false;

    start () {
        // Your initialization goes here.
    }

    clicked () {
        if (this._isClicked) {
            return;
        }
        this._isClicked = true;
        var bgmAudio: Node = find('BGM');
        console.log(bgmAudio);
        if (bgmAudio) {
            bgmAudio.getComponent(AudioSourceComponent).stop();
        }

        if (this.BlockLayerPrefab) {
            var blockLayer = instantiate(this.BlockLayerPrefab);
            var canvas: CanvasComponent = director.getRunningScene().getComponentInChildren(CanvasComponent);
            blockLayer.parent = canvas.node;
        }

        var name = "Level" + this.sceneIndex;

        setTimeout(() => {
            director.loadScene(name, ()=>{}, ()=>{});
        }, 500);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
