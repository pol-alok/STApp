define(["jquery"], function($) {

    return function() {
        var $firstName = $("#email");
        var red = "rgb(255, 0, 0)";
        var green = "rgb(0, 128, 0)";

        $firstName.css("color", red);

        $firstName.on("keyup", doSwitchColor);

        function doSwitchColor() {
            var $field = $(this);

            if ($field.css("color") == red) {
                $field.css("color", green);
            }
            else {
                $field.css("color", red);
            }
        }
    }

})