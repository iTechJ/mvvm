app.factory('Record', ['$resource', function($resource) {
    return $resource('data/:id.json', {}, {
        getAll: {method: "GET", params: {id: "all"}, isArray: true}
    });
}]);