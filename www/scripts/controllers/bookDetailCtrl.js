app.controller('bookDetailCtrl',function($scope,$stateParams,$rootScope,$state,Api){
	
	var bookid = parseInt($stateParams.bookId);
	Api.getBookDetail(bookid,function(){
		$scope.bookDetail = data;
	});

	$scope.reserve = function(){
		alert('成功預約! 順位： 2 ');
	}
});