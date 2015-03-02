define(['modelView/homeViewModel',
        'modelView/routingViewModel',
        'modelView/controllingViewModel',
        'modelView/servicesViewModel',
        'modelView/docsViewModel'
], function(homeMV, routingMV, controllingMV, servicesMV, docsMV) {

    var app = {};

    app['home'] = homeMV;
    app['routing'] = routingMV;
    app['controlling'] = controllingMV;
    app['services'] = servicesMV;
    app['docs'] = docsMV;

    function MainViewModel() {
        infuser.defaults.templateUrl = "template";

        // Data
        var parentSelf = this;
        parentSelf.view = 'home';
        parentSelf.chosenVM = ko.observable(new app[parentSelf.view]());
        parentSelf.chosenView = ko.observable(parentSelf.view);

        // Client-side routes
        Sammy(function () {
            this.get('#:view', function () {
                parentSelf.view = this.params.view;

                var mv = new app[parentSelf.view]();

                if (mv.init) {
                    mv.init();
                }

                parentSelf.chosenVM = ko.observable(mv);
                parentSelf.chosenView(parentSelf.view);
            });
        }).run('#home');
    };

    var launch = function() {
        ko.applyBindings(new MainViewModel());
    };

    return {
        launch: launch
    }

});
