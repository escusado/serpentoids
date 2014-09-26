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
        this.engine.addSystem(new Serpentoids.Systems.PhaserShapeRenderer());
        this.engine.addSystem(new Serpentoids.Systems.MouseFollower());
        this.engine.addSystem(new Serpentoids.Systems.EntityFollower());
    },

    _initializeEntities : function initializeEntities() {
        this.entityFactory.createSampleEntity();
        this.entityFactory.createDotMouseFollowerEntity(0.1);

        // for(var i=1;i< 10;i++){
        //     prev_entity = this.entityFactory.createDotEntityFollowerEntity(0.1, prev_entity);
        // }

    }
});
