(function () {
    angular
        .module("DMS")
        .controller("RegCtrl", RegCtrl);


RegCtrl.$inject = ['$window', 'DeptService'];

  function RegCtrl($window, DeptService) {
      var vm = this;
      vm.register = register;


      // Function declaration and definition -------------------------------------------------------------------------
      function register() {
          // Calls alert box and displays registration information
          alert("The registration information you sent are \n" + JSON.stringify(vm.department));

          // Prints registration information onto the client console
          console.log("The registration information you sent were:");
          console.log("Department id: " + vm.department.id);
          console.log("Department name: " + vm.department.name);

          // TODO: 7.1 In register function, pass the registration information to the appropriate DeptService
          // TODO: 7.1 function
          // TODO: 7.2 Handle promise object using .then() and .catch()
          // TODO: 9.2 On success, redirect to thanks.html
          // We call DeptService.insertDept to handle registration of department information. The data sent to this
          // function will eventually be inserted into the database.
          DeptService
              .insertDept(vm.department)
              .then(function (result) {
                  console.log("result " + JSON.stringify(result));
                  $window.location.assign('/app/registration/thanks.html');  // this say a thanks html page for the register 


              })
              .catch(function (err) {
                  console.log("error " + err);
              });
      } // END function register()
