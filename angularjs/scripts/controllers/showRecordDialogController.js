app.showRecordDialogCtrl = function ($scope, $uibModalInstance, record) {

    $scope.chosen = record;

    $scope.close = function () {
        $uibModalInstance.close();
    };

};

