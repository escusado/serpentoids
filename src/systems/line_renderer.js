Class(Serpentoids.Systems, "LineRenderer").inherits(Serpentity.System)({
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
            this.renderables = engine.getNodes(Serpentoids.Nodes.LineRenderer);
        },
        removed : function removed(engine) {
            this.renderables = null;
        },
        update : function update(dt) {

            this.renderables.forEach(function (renderable) {

                var line = renderable.line.graphic,

                    x1 = renderable.line.entity_from.getComponent(Serpentoids.Components.Position).x,
                    y1 = renderable.line.entity_from.getComponent(Serpentoids.Components.Position).y,

                    x2 = renderable.line.entity_to.getComponent(Serpentoids.Components.Position).x,
                    y2 = renderable.line.entity_to.getComponent(Serpentoids.Components.Position).y;


                line.setTo(x1, y1, x2, y2);

                Serpentoids.game.debug.geom(line, "#0000FF");

            }.bind(this));
        }
    }
});
