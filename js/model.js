app.factory('DemoModel', function (Product) {

    var factory = (function() {
        var instance = {};
        instance.products = [];
        instance.ids = [];
        instance.refresh = function(ids) {
            if(instance.products.length == 0) {
                ids.forEach(function(id){
                    Product.get({id: id}, function(result) {
                        result.demo.download.url.forEach(function(url){

                            if(url['@attributes'].type === "youtube")
                            {
                               result.youtube = url.data.replace("http://www.youtube.com/watch?v=","//www.youtube.com/embed/");
                            }
                        });
                        instance.products.push(result);
                    });
                });
            }
        }

        return instance;
    })();

    return factory;

});