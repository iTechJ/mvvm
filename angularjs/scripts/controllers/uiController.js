app.UICtrl = function ($scope, $uibModal) {

    // hardcoded collection of test records
    $scope.records = [{
        name: "James Gosling",
        description: "The inventor of Java programming language. He created the original design of Java and" +
        " implemented the language's original compiler and virtual machine."
    }, {
        name: "Martin Odersky",
        description: "Designed the Scala programming language and Generic Java. Built the current generation" +
        " of \"javac\", the Java compiler."
    }, {
        name: "Brendan Eich",
        description: "Created the JavaScript scripting language. Helped found mozilla.org. " +
        "Chief technology officer at the Mozilla Corporation."
    }, {
        name: "Douglas Crockford",
        description: "Have popularized the data format JSON (JavaScript Object Notation). Developed various" +
        " JavaScript related tools such as JSLint and JSMin."
    }];

    // sets the currently editable record,
    // initializes dialog screen and then opens it
    $scope.editRecord = function(record) {
        var temp = {};
        temp.name = record.name;
        temp.description = record.description;

        var modalInstance = $uibModal.open({
            templateUrl: 'views/dialogs/editRecord.html',
            controller: app.editRecordDialogCtrl,
            resolve: { record : function() { return temp; } }
        });

        modalInstance.result.then(function (result) {
            if (result) {
                record.name = result.name;
                record.description = result.description;
            }
        }, function() {});
    };

};