app.controller("myReservationCtrl",function($scope,$rootScope,Api){
	$scope.books = ['鮑曼王2','鮑曼王3','鮑曼王4',
	'鮑曼王5','鮑曼王6','愛情同連演'];
	$scope.reserveTime="2016/1/04";
	Api.getMyReservation($rootScope.Account.Id,function(){
		//must parse
		$scope.ReverseList = data;
	});
});