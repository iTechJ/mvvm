define([], function() {

    function Callback(fn, scope, parameters){
        this.fn = fn;
        this.scope = scope;
        this.parameters = parameters;
    }

    return Callback;
});