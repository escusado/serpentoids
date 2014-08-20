Class(Serpentoids.Components, "Motion")({
    prototype : {
        velocity : null,
        angularVelocity : 0,
        damping : 0,

        init : function (config) {
            var property;

            config = config || {};

            this.velocity = {
                x : 0,
                y : 0
            }

            for (property in config) {
                if (config.hasOwnProperty(property)) {
                    this[property] = config[property];
                }
            }
        }
    }
});
