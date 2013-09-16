app.factory('Product', function($resource) {
    return $resource("/product.php?id=:id", {id: "@id"}, {
        get: {method: "GET"}
    });
});