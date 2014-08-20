Module(Serpentoids, "EntityFactory")({
    // Will create an entity that can be drawn and moved
    createSampleEntity : function createSampleEntity() {
        var entity, graphic;

            Serpentoids.game.load.image("cow", "/assets/img/cow.png");
            graphic = Serpentoids.game.add.sprite(0, 0, "cow")

            entity = new (Serpentity.Entity)();
            entity.addComponent(new Serpentoids.Components.Position({
                x: 100,
                y: 100
            }));
            entity.addComponent(new Serpentoids.Components.Motion());
            entity.addComponent(new Serpentoids.Components.Display({
                graphic : graphic
            }));
            entity.addComponent(new Serpentoids.Components.MotionControls({
                left: Phaser.Keyboard.LEFT,
                right: Phaser.Keyboard.RIGHT,
                up: Phaser.Keyboard.UP,
                down: Phaser.Keyboard.DOWN,
                accelerationRate : 2
            }));
            return Serpentoids.engine.addEntity(entity);
    }
});
