define(function() {

    function RecordDetails (name, description, image) {
        this.name = ko.observable(name);
        this.description = ko.observable(description);
        this.image = ko.observable(image);
    }

    return RecordDetails;
});
