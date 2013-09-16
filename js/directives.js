app.directive('navActive', function($location, $animate) {
    return {
        restrict: "A",
        link: function(scope, element, attr) {

            scope.$on("$routeChangeSuccess", function (event, current, previous) {
                if($location.path().contains(attr.navActive)) {
                    $animate.addClass(element, "active");
                } else {
                    $animate.removeClass(element, "active");
                }
            });
        }
    };
});