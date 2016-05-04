app.controller("changPasswordCtrl",function($rootScope,$scope){
	//$rootScope.Account.password
	$scope.oldPassword='';
	$scope.changePassword="";
	$scope.doubleChangePassword="";

	$scope.clear=function(){
		$scope.oldPassword="";
		$scope.changePassword="";
		$scope.doubleChangePassword="";
	}

	$scope.confirm = function(){
		if($rootScope.Account.password === $scope.oldPassword){
			if($scope.changePassword === $scope.doubleChangePassword){
				$rootScope.Account.password = $scope.changePassword;
				alert("下次請使用新的密碼登入歐耶");
				$scope.clear();
			}else{
				alert("新的密碼第二次不相同");
			}
		}else{
			alert("舊的密碼輸入錯誤");
		}
	}
});