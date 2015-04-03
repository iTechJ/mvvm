define(['modelView/homeViewModel',
        'modelView/routingViewModel',
        'modelView/viewModelViewModel',
        'modelView/servicesViewModel',
        'modelView/docsViewModel'
], function(homeVM, routingVM, viewModelVM, servicesVM, docsVM) {

    function MainViewModel() {
        // Data
        var self = this;
        self.view = 'home';
        self.chosenView = ko.observable(self.view);

        self.homeVM = new homeVM();
        self.routingVM = new routingVM();
        self.viewModelVM = new viewModelVM();
        self.servicesVM = new servicesVM();
        self.docsVM = new docsVM();

        // Client-side routes
        Sammy(function () {
            this.get('#:view', function () {
                self.view = this.params.view;
                self.chosenView(self.view);
            });
        }).run('#home');

        self.showTemplate = function(name) {
            return self.chosenView() == name;
        };
    };

    var launch = function() {
        ko.applyBindings(new MainViewModel());
    };

    return {
        launch: launch
    }

});
