app.editRecordDialogCtrl = function ($scope, $modalInstance, record) {

    $scope.record = record;

    $scope.save = function () {
        $modalInstance.close($scope.record);
    };

    $scope.close = function () {
        $modalInstance.close();
    };

};

