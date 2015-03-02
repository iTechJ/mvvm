define(function() {

    function Record (id, name, description) {
        this.id = id;
        this.name = ko.observable(name);
        this.description = ko.observable(description);
    }

    return Record;
});
