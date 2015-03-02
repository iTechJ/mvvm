define(["service/baseService"], function(baseService) {
    function RecordService(){
        var self = this;

        self.list = function(success, error, done) {
            baseService.send(
                "data/all.json",
                "GET",
                {},
                success,
                error,
                done
            );
        };

        self.get = function(id, success, error, done) {
            baseService.send(
                "data/" + id + ".json",
                "GET",
                {},
                success,
                error,
                done
            );
        };

        return {
            list: self.list,
            get: self.get
        }
    }

    return new RecordService();
});