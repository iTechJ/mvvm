define(['model/record'], function(Record) {

    function ViewModelViewModel() {
        var self = this;

        self.description = ko.observable();
        self.name = ko.observable();
        self.editedId = -1;

        self.tempRecords = [{
            id : 1,
            name: "James Gosling",
            description: "The inventor of Java programming language. He created the original design of Java and" +
            " implemented the language's original compiler and virtual machine."
        }, {
            id : 2,
            name: "Martin Odersky",
            description: "Designed the Scala programming language and Generic Java. Built the current generation" +
            " of \"javac\", the Java compiler."
        }, {
            id : 3,
            name: "Brendan Eich",
            description: "Created the JavaScript scripting language. Helped found mozilla.org. " +
            "Chief technology officer at the Mozilla Corporation."
        }, {
            id : 4,
            name: "Douglas Crockford",
            description: "Have popularized the data format JSON (JavaScript Object Notation). Developed various" +
            " JavaScript related tools such as JSLint and JSMin."
        }];

        self.records = ko.observableArray();
        for (var i in self.tempRecords) {
            var rec = self.tempRecords[i];
            self.records().push(new Record(rec.id, rec.name, rec.description));
        };

        self.showModal = function(record) {
            self.editedId = record.id;
            self.name(record.name());
            self.description(record.description());
            $('#details').modal();
        };

        self.saveChanges = function() {
            self.records()[self.editedId - 1].name(self.name());
            self.records()[self.editedId - 1].description(self.description());
            $('#details').modal('hide');
        };

        return {
            records : self.records,
            showModal : self.showModal,
            saveChanges : self.saveChanges,
            name : self.name,
            description : self.description
        };
    };

    return ViewModelViewModel;
});