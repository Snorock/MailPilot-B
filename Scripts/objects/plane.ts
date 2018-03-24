module objects {
  export class Plane extends objects.GameObject {
    // private instance variables


    // public properties
    public planeFlash: objects.PlaneFlash;

    // Constructor
    constructor() {
      super("plane");
      this.Start();
    }

    // private methods
    private _animationEnded(): void {
      if (this.alpha == 0) {
        this.alpha = 1;
        this.planeFlash.alpha = 0;
      }
    }

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      //switch()
      this.planeFlash = new objects.PlaneFlash();
      this.planeFlash.alpha = 1;
      this.planeFlash.on("animationend", this._animationEnded.bind(this), false);
      switch (managers.Game.currentScene) {
        case config.Scene.PLAY:
          this.x = 320;
          this.y = 430;
          break;
        case config.Scene.LEVEL2:
          this.rotation = 90;
          this.x = 40;
          this.y = 240;
          break;
      }
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {

    }

    // move the object to some new location
    public Move(): void {
      switch (managers.Game.currentScene) {
        case config.Scene.LEVEL2:
          if (managers.Game.keyboardManager.moveForward) {
            this.y -= 5;
          }

          else if (managers.Game.keyboardManager.moveBackward) {
            this.y += 5;
          }

          break;
        // keyboard controls
        case config.Scene.PLAY:
          if (managers.Game.keyboardManager.moveLeft) {
            this.x -= 5;
          }

          else if (managers.Game.keyboardManager.moveRight) {
            this.x += 5;
          }
          break;
      }

      this.planeFlash.x = this.x;
      this.planeFlash.y = this.y;

    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      // right boundary
      if (this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }
      // left boundary
      else if (this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
      // right boundary
      else if (this.y >= 480 - this.halfWidth) {
        this.y = 480 - this.halfWidth;
      }
      // left boundary
      else if (this.y <= this.halfWidth) {
        this.y = this.halfWidth;
      }
    }
  }
}
