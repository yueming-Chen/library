app.controller("myDetailEditCtrl",function($rootScope,$scope,Api){
	$scope.modifying = false;
	$rootScope.sex = "M";
	$rootScope.birth = "1990/10/11";
	$scope.IdModified = $rootScope.Account.Id;
	$scope.sexModified = $rootScope.sex;
	$scope.birthModified = $rootScope.birth;

	$scope.clear = function(){
		$scope.IdModified = $rootScope.Account.Id;
		$scope.sexModified = $rootScope.sex;
		$scope.birthModified = $rootScope.birth;
		$scope.modifying = false;
	}

	$scope.confirm = function(){
		Api.uploadMyDetail($rootScope.Account.Id,function(){
			
		});
		$rootScope.Account.Id =  $scope.IdModified;
		$rootScope.sex = $scope.sexModified;
		$rootScope.birth = $scope.birthModified;
		$scope.modifying = false;
	}
});