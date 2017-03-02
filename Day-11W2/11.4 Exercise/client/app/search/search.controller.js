// TODO: Send and retrieve information to/from server via Angular $http; modularize via services
// TODO: 10. Move data retrieved for display to the server
// TODO: 12. Give controller access to EmpService services/functionalities
// TODO: 13. Use EmpService services to retrieve all data from server during view initialization. Handle
// TODO: 13. success/failure.

(function () {
    angular
        .module("EMS")
        .controller("SearchCtrl", SearchCtrl);

    // TODO: 12.1 Inject the custom EmpService service so your controller can use its functionalities// Dependency injection. An empty [] means SearchCtrl does not have dependencies
    // TODO: 12.2 Accept the injected dependency as a parameter.
        // TODO: 10 Change vm.employees to an empty array. Move current contents to server.
        // TODO: 13.5 call init. Init is a private function
        // TODO: 13.1 Define init() function. This function would call appropriate EmpService service to populate
        // TODO: 13.1 view with initial value
            // TODO: 13.2 In init function, populate search.html with employee data from server
            // TODO: 13.3 Handle promise object using .then() and .catch()
            // TODO: 13.4 On success, fill vm.employees with data from server
})();