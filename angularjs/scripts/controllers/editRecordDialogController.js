app.editRecordDialogCtrl = function ($scope, $uibModalInstance, record) {

    $scope.record = record;

    $scope.save = function () {
        $uibModalInstance.close($scope.record);
    };

    $scope.close = function () {
        $uibModalInstance.close();
    };

};

