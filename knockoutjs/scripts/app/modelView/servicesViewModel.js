define(['service/recordService',
        'model/record',
        'model/recordDetails',
        'util/callback'], function(recordService, Record, RecordDetails, Callback) {

    function ServicesViewModel() {
        var self = this;

        self.records = ko.observableArray([]);
        self.chosen = ko.observable(new RecordDetails());

        self.showModal = function(record) {
            recordService.get(
                record.id,
                new Callback(
                    function(params){
                        var details = params.reply;
                        self.chosen(new RecordDetails(details.name, details.description, details.image));
                        $('#info').modal();
                    }, self, {}
                )
            );

        };

        self.init = function() {
            recordService.list(
                new Callback(
                    function(params){
                        var reply = params.reply;
                        for (var i in reply) {
                            this.records().push(new Record(reply[i].id, reply[i].name));
                        }
                    }, self, {}
                )
            );
        };

        //self.init();

        return {
            records : self.records,
            chosen : self.chosen,
            showModal : self.showModal,
            init : self.init
        };
    };

    return ServicesViewModel;
});