define(['modelView/homeViewModel',
        'modelView/routingViewModel',
        'modelView/controllingViewModel',
        'modelView/servicesViewModel',
        'modelView/docsViewModel'
], function(homeVM, routingVM, controllingVM, servicesVM, docsVM) {

    var app = {};

    app['home'] = homeVM;
    app['routing'] = routingVM;
    app['controlling'] = controllingVM;
    app['services'] = servicesVM;
    app['docs'] = docsVM;

    function MainViewModel() {
        // Data
        var parentSelf = this;
        parentSelf.view = 'home';
        parentSelf.chosenView = ko.observable(parentSelf.view);

        parentSelf.homeVM = new homeVM();
        parentSelf.routingVM = new routingVM();
        parentSelf.controllingVM = new controllingVM();
        parentSelf.servicesVM = new servicesVM();
        parentSelf.docsVM = new docsVM();

        // Client-side routes
        Sammy(function () {
            this.get('#:view', function () {
                parentSelf.view = this.params.view;
                parentSelf.chosenView(parentSelf.view);
            });
        }).run('#home');

        parentSelf.showTemplate = function(name) {
            return parentSelf.chosenView() == name;
        };
    };

    var launch = function() {
        ko.applyBindings(new MainViewModel());
    };

    return {
        launch: launch
    }

});
