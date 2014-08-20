Class(Serpentoids.Systems, "PhaserRenderer").inherits(Serpentity.System)({
    prototype : {
        renderables : null,
        added : function added(engine) {
            this.renderables = engine.getNodes(Serpentoids.Nodes.Render);
        },
        removed : function removed(engine) {
            this.renderables = null;
        },
        update : function update(dt) {
            this.renderables.forEach(function (renderable) {
                // TODO: Give this guy the game instance on init...
                renderable.display.graphic.x = renderable.position.x;
                renderable.display.graphic.y = renderable.position.y;
                console.log(renderable.position)
            })
        }
    }
});
