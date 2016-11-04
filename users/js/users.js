(function(){

  angular.module('users',[])
  .component('userComponent',{
    templateUrl : 'user.component.html',
    bindings: { userItems:'<' }})
    .controller('userController',userController)
  .service('userService',userService);

  function userController()
  {
    var ctrl = this;
    ctrl.test="test";



  }
  function userService() {

  }

})();
