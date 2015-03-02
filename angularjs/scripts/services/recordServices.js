angular.module("recordServices", ["ngResource"]).
    factory("Record", function($resource) {
        return $resource("data/:id.json", {}, {
            getAll: {method: "GET", params: {id: "all"}, isArray: true}
        });
    });