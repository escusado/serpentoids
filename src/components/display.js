Class(Serpentoids.Components, "Display")({
    prototype : {
        graphic : null,

        init : function (config) {
            var property;

            for (property in config) {
                if (config.hasOwnProperty(property)) {
                    this[property] = config[property];
                }
            }
        }
    }
});
