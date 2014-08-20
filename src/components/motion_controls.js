Class(Serpentoids.Components, "MotionControls")({
    prototype : {
        left : null,
        right : null,
        up : null,
        down : null,
        accelerate : null,
        accelerationRate : null,
        rotationRate : null,

        init : function (config) {
            var property;

            config = config || {};

            for (property in config) {
                if (config.hasOwnProperty(property)) {
                    this[property] = config[property];
                }
            }
        }
    }
});

