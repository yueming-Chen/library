app.controller('loginCtrl',function($rootScope,$state,$scope,Api){
	
	$scope.login = function(){
		if ($rootScope.Account.Id != "") {
			console.log("login succ : 666");
			$state.go($rootScope.previousState);
			$rootScope.logined = 1;
			Api.getAccountDetail($rootScope.Account.Id,function(){
				$scope.detail = data;
			});
		};
	}
});