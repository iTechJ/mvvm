app.showRecordDialogCtrl = function ($scope, $modalInstance, Record, id) {

    Record.get({id: id}, function(result) {
        $scope.chosen = result;
    });

    $scope.close = function () {
        $modalInstance.close();
    };

};

