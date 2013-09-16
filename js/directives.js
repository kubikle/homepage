app.directive('navActive', function($location, $animate) {
    return {
        restrict: "A",
        link: function(scope, element, attr) {

            scope.$on("$routeChangeSuccess", function (event, current, previous) {
                console.log($location.path());
                if($location.path().indexOf(attr.navActive) != -1) {
                    $animate.addClass(element, "active");
                } else {
                    $animate.removeClass(element, "active");
                }
            });
        }
    };
});