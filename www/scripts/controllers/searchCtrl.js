app.controller('searchCtrl',function($scope,Api){
	
	$scope.Searched = 0;
	$scope.search = function(text){
		Api.getBookListByList(text,function(){
			$scope.bookList = data;
		})
		$scope.Searched = 1;
	}
});