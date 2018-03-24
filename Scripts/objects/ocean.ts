module objects {
  export class Ocean extends createjs.Bitmap {
    // private instance variables
    private _dy: number;

    // public properties

    // Constructor
    constructor() {
      super(managers.Game.assetManager.getResult("ocean"));
      this.Start();
    }

    // private methods

    // reset the objects location to some value
    private _reset(): void {
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          this.y = -960;
          this.rotation = 0;
          break;
        case config.Scene.LEVEL2:
          this.x = 1440;
          this.rotation = 90;
          break;
      }
    }

    // move the object to some new location
    private _move(): void {
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          this.y += this._dy;
          break;
        case config.Scene.LEVEL2:
          this.x -= this._dy;
          break;
      }
    }

    // check to see if some boundary has been passed
    private _checkBounds(): void {
      if (managers.Game.currentScene == config.Scene.PLAY && this.y >= 0) {
        this._reset();
      } else if (managers.Game.currentScene == config.Scene.LEVEL2 && this.x <= 640) {
        this._reset();
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this._dy = 5;
      this._reset();
    }

    // updates the game object every frame
    public Update(): void {
      this._move();
      this._checkBounds();
    }
  }
}
