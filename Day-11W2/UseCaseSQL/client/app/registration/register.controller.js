// TODO: Send and retrieve information from server via Angular $http; modularize via services
// TODO: 6. Give controller access to EmpService services/functionalities
// TODO: 7. Use EmpService services to send information entered in view (HTML) to the server. Handle success/failure.
// TODO: 9. Show thank you page if registration is successful

(function() {
    angular
        .module("EMS")
        .controller("RegCtrl", RegCtrl);

    // TODO: 6.1 Inject the custom EmpService service so your controller can use its functionalities
    // TODO: 9.1 Inject the built-in service $window. This will be used to redirect to new page
    // TODO: 6.2 Accept the injected dependency as a parameter.

    function RegCtrl() {
        var vm = this;
        var today = new Date();
        var birthday = new Date();
        birthday.setFullYear(birthday.getFullYear() - 18);
        vm.employee = {
            empNo: "",
            firstname: "",
            lastname: "",
            gender: "male",
            birthday: birthday,
            hiredate: today,
            phonenumber: ""
        };

        vm.register = register;

        function register() {
            alert("The registration information you sent are \n" + JSON.stringify(vm.employee));

            console.log("The registration information you sent were:");
            console.log("Employee Number: " + vm.employee.empNo);
            console.log("Employee First Name: " + vm.employee.firstname);
            console.log("Employee Last Name: " + vm.employee.lastname);
            console.log("Employee Gender: " + vm.employee.gender);
            console.log("Employee Birthday: " + vm.employee.birthday);
            console.log("Employee Hire Date: " + vm.employee.hiredate);
            console.log("Employee Phone Number: " + vm.employee.phonenumber)

            // TODO: 7.1 In register function, pass the registration information to the appropriate EmpService
            // TODO: 7.1 function
            // TODO: 7.2 Handle promise object using .then() and .catch()
            // TODO: 9.2 On success, redirect to thanks.html
        }
    }
})();