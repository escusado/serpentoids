Module("Serpentoids")({
    Components : {},
    Systems : {},
    Nodes : {},
    engine : null,
    game : null,
    init : function init(config) {

      this.engine = new Serpentity();
      this.entityFactory = Serpentoids.EntityFactory;
      this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
          preload : this._preload.bind(this),
          create  : this._create.bind(this),
          update  : this._update.bind(this)
      });
    },

    _preload : function preload() {
        this._initializeSystems();
        this._initializeEntities();
        console.log("Preloading.");
    },

    _create : function create() {
        console.log("Creating.");
    },

    _update : function update(game) {
        this.engine.update(game.time.elapsed);
    },

    _initializeSystems : function initializeSystems() {
        this.engine.addSystem(new Serpentoids.Systems.MainControl({
            keyboard : this.game.input.keyboard,
        }));
        this.engine.addSystem(new Serpentoids.Systems.PhaserRenderer());
    },

    _initializeEntities : function initializeEntities() {
        this.entityFactory.createSampleEntity();
    }
});
