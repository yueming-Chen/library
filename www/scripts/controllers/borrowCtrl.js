app.controller('borrowCtrl',function($rootScope,$scope,Api){
	$scope.bookId="";

	$scope.borrow = function(){
		if($scope.bookId != ''){
			Api.borrowBook($rootScope.Account.Id,$scope.bookId,function(){
				alert("借閱成功!");
			});
			$scope.clear();
		}	
	}

	$scope.clear = function(){
		$scope.bookId="";
		$scope.memberAccount="";		
	}
});