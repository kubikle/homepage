function DemoController($scope, $location, $routeParams, $sce, DemoModel) {
    $scope.model = DemoModel;
    DemoModel.refresh([62005,59145,59170,57447,56995,56859,54609,18352,13041]);

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
}

function GameController($scope, $location, $routeParams) {
    // Ei tätä tarvita
}



