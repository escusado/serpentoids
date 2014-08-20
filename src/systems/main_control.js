Class(Serpentoids.Systems, "MainControl").inherits(Serpentity.System)({
    prototype : {
        keyboard : null,
        renderables : null,
        init : function init(config) {
            var property;

            for (property in config) {
                if (config.hasOwnProperty(property)) {
                    this[property] = config[property];
                }
            }
        },
        added : function added(engine) {
            this.renderables = engine.getNodes(Serpentoids.Nodes.Movement);
        },
        removed : function removed(engine) {
            this.renderables = null;
        },
        update : function update(dt) {
            this.renderables.forEach(function (renderable) {
                if (this.keyboard.isDown(renderable.motion_controls.left)) {
                    renderable.position.x -= renderable.motion_controls.accelerationRate;
                }

                if (this.keyboard.isDown(renderable.motion_controls.right)) {
                    renderable.position.x += renderable.motion_controls.accelerationRate;
                }

                if (this.keyboard.isDown(renderable.motion_controls.up)) {
                    renderable.position.y -= renderable.motion_controls.accelerationRate;
                }

                if (this.keyboard.isDown(renderable.motion_controls.down)) {
                    renderable.position.y += renderable.motion_controls.accelerationRate;
                }
            }.bind(this));
        }
    }
});
