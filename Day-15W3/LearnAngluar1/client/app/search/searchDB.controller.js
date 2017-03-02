(function (){
    angular
        .module("DMS")
        .controller("SearchDBCtrl", SearchDBCtrl);

   SearchDBCtrl.$inject = ['DeptService'];

   function SearchDBCtrl(DeptService){
        var vm = this;

        vm.searchString = '';
        vm.result = null;
        vm.showManager = false;
        vm.search = search;
        vm.searchForManager = searchManager;

        init();

        function init(){
           searchDeptFromDB('');
        }

        function search(){
            vm.showManager = false;
            searchDeptFromDB(vm.searchString);
        }

        function searchManager(){
            vm.showManager = true;
            searchDeptManagerDB(vm.searchString);
        }

        function searchDeptFromDB(param){
            DeptService
                .retrieveDeptDB(param)
                .then(function (results){
                    vm.departments  = results.data;
                })
                .catch(function (err){
                    console.log("error " + err);
                });
        }

        function searchDeptManagerDB(param){
            DeptService
                .retrieveDeptManagerDB(param)
                .then(function (results){
                    vm.departments  = results.data;
                })
                .catch(function (err){
                    console.log("error " + err);
                });
        }
   }

})();
