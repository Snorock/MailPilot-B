module objects {
  export class PlaneFlash extends objects.GameObject {
    // private instance variables

    // public properties

    // constructors
    constructor() {
      super("planeflash");
      if(managers.Game.currentScene == config.Scene.LEVEL2){
        this.rotation = 90;
      }
      else {
        this.rotation = 0;
      }
    }

    // private methods

    // public methods
    public Start(): void {

    }

    public Update(): void {

    }
  }
}
