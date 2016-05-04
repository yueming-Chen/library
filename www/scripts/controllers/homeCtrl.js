app.controller('homeCtrl',function($scope,$state,$rootScope,$timeout){
	$scope.named = {
		"1":{
			"no":1
		}
	};

	$scope.href = function(item){
		$state.go("bookDetail",{bookId:item.no});
	}

	$timeout(function () {
        $rootScope.$apply();
    }, 200);

    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
   	//assign the "from" parameter to something
   		$rootScope.previousState = from.name;
	});
});
