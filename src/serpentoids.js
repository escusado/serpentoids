Module("Serpentoids")({
    engine : null,
    game : null,
    init : function init(config) {

      this.engine = new Serpentity();
      this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
          preload : this._preload.bind(this),
          create  : this._create.bind(this),
          update  : this._update.bind(this)
      });
    },

    _preload : function () {
        console.log("Preloading.");
    },

    _create : function () {
        console.log("Creating.");
    },

    _update : function (game) {
        this.engine.update(game.time.elapsed);
    }
});
