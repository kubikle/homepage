app.directive('navActive', function($location, $animate) {
    return {
        restrict: "A",
        link: function(scope, element, attr) {

            scope.$on("$routeChangeSuccess", function (event, current, previous) {
                console.log(attr.navActive);
                console.log($location.path());
                if($location.path().contains(attr.navActive)) {
                    console.log("add");
                    $animate.addClass(element, "active");
                } else {
                    console.log("remove");
                    $animate.removeClass(element, "active");
                }
            });
        }
    };
});