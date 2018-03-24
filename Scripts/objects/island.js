var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        // private instance variables
        // public properties
        // Constructor
        function Island() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island.prototype.Start = function () {
            this._dy = 5;
            this.Reset();
        };
        // updates the game object every frame
        Island.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Island.prototype.Reset = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
                    this.y = -this.height;
                    break;
                case config.Scene.LEVEL2:
                    this.x = 640 + this.width;
                    this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
                    break;
                case config.Scene.LEVEL3:
                    this.x = -this.width;
                    this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
                    break;
            }
        };
        // move the object to some new location
        Island.prototype.Move = function () {
            switch (managers.Game.currentScene) {
                case config.Scene.PLAY:
                    this.y += this._dy;
                    break;
                case config.Scene.LEVEL2:
                    this.x -= this._dy;
                    break;
                case config.Scene.LEVEL3:
                    this.x += this._dy;
                    break;
            }
        };
        // check to see if some boundary has been passed
        Island.prototype.CheckBounds = function () {
            // check lower bounds
            if (managers.Game.currentScene == config.Scene.PLAY && this.y >= 480 + this.height) {
                this.Reset();
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL2 && this.x <= 0 - this.halfWidth) {
                this.Reset();
            }
            else if (managers.Game.currentScene == config.Scene.LEVEL3 && this.x >= 640 + this.halfWidth) {
                this.Reset();
            }
        };
        return Island;
    }(objects.GameObject));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map