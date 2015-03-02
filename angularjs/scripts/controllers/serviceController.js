app.ServiceCtrl = function ($scope, Record, $modal) {

    //gets the list of records
    $scope.records = Record.getAll();

    //shows the record
    $scope.showRecord = function (id) {
        var modalInstance = $modal.open({
            templateUrl: 'views/dialogs/showRecord.html',
            controller: app.showRecordDialogCtrl,
            resolve: { id : function() { return id; } }
        });

        modalInstance.result.then(function (result) {}, function() {});
    };
};

