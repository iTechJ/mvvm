app.showRecordDialogCtrl = function ($scope, $modalInstance, record) {

    $scope.chosen = record;

    $scope.close = function () {
        $modalInstance.close();
    };

};

