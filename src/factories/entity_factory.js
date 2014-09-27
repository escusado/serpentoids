Module(Serpentoids, "EntityFactory")({
    // Will create an entity that can be drawn and moved
    createSampleEntity : function createSampleEntity() {
        var entity, graphic;

            Serpentoids.game.load.image("cow", "assets/img/cow.png");
            graphic = Serpentoids.game.add.sprite(0, 0, "cow");

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
    },

    createDotMouseFollowerEntity : function createDotMouseFollowerEntity(speed){

        var entity,
            circle = Serpentoids.game.add.graphics(0, 0);

        // draw a dot
        circle.lineStyle(0);
        circle.beginFill(0xFFCB00, 0.9);
        circle.drawCircle(0,0,3);

        entity = new (Serpentity.Entity)();

        entity.addComponent(new Serpentoids.Components.Position({
            x: 100,
            y: 100
        }));

        entity.addComponent(new Serpentoids.Components.Motion());

        entity.addComponent(new Serpentoids.Components.DisplayShape({
            shape : circle
        }));

        entity.addComponent(new Serpentoids.Components.MouseFollower({
            speed : speed,
            input : Serpentoids.game.input.mousePointer
        }));

        Serpentoids.engine.addEntity(entity);

        this.createDotEntityFollowerEntity(0.1, entity);

        return entity;
    },

    createDotEntityFollowerEntity : function createDotEntityFollowerEntity(speed, followedEntity){
        var entity
            circle = Serpentoids.game.add.graphics(0, 0);

        // draw a dot
        circle.lineStyle(0);
        circle.beginFill(0xFF4C00, 0.2);
        circle.drawCircle(0,0,3);

        entity = new (Serpentity.Entity)();

        entity.addComponent(new Serpentoids.Components.Position({
            x: 100,
            y: 100
        }));

        entity.addComponent(new Serpentoids.Components.Motion());

        entity.addComponent(new Serpentoids.Components.DisplayShape({
            shape : circle
        }));

        entity.addComponent(new Serpentoids.Components.EntityFollower({
            speed : speed,
            entity : followedEntity
        }));

        Serpentoids.engine.addEntity(entity);

        return entity;
    },

    createLineEntity : function createLineEntity(config){
        var entity;

        entity = new (Serpentity.Entity)();

        entity.addComponent(new Serpentoids.Components.Line({
            entity_from : config.entity_from,
            entity_to : config.entity_to,
            graphic : new Phaser.Line(0, 0, 10, 10)
        }));

        Serpentoids.engine.addEntity(entity);

        return entity;
    }
});
