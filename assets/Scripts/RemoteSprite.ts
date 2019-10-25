import { _decorator, Component, SpriteComponent, loader, SpriteFrame, Texture2D, ImageAsset } from "cc";
const { ccclass, property, requireComponent } = _decorator;

@ccclass("RemoteSprite")
@requireComponent(SpriteComponent)
export class RemoteSprite extends Component {

    @property
    imageUrl: string = "";

    @property(Texture2D)
    defaultTexture: Texture2D = null;

    private _sprite: SpriteComponent = null;

    start () {
        this.updateDisplay();
    }

    setImageUrl (value: string) {
        this.imageUrl = value;
        this.updateDisplay();
    }

    updateDisplay () {
        this._sprite = this.node.getComponent(SpriteComponent);

        if (!this.imageUrl || this.imageUrl === "") {
            this._sprite.spriteFrame.texture = this.defaultTexture;
            return;
        }
        
        loader.load({url: this.imageUrl, type: 'png'},  (err: null | undefined | string, texture: ImageAsset) => {
            var tex = new Texture2D();
            tex.image = texture;
            this._sprite.spriteFrame.texture = tex;
        });
    }
}
