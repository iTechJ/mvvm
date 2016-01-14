app.ResourceCtrl = function ($scope, Record, $uibModal) {

    //gets the list of records
    $scope.records = Record.getAll();

    //shows the record
    $scope.showRecord = function (id) {
        Record.get({id: id}, function(result) {
            $scope.chosen = result;

            var modalInstance = $uibModal.open({
                templateUrl: 'views/dialogs/showRecord.html',
                controller: app.showRecordDialogCtrl,
                resolve: { record : function() { return $scope.chosen; } }
            });

            modalInstance.result.then(function (result) {}, function() {});
        });
    };
};

