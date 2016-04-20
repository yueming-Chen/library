app.controller("myBorrowCtrl",function($rootScope,$scope,Api){
	$rootScope.name = "楊雅婷";
	$scope.books = ['鮑曼王1','如何學習c語言','今天人呢',
	'你看什麼','我要吃大便','天氣真的很好~~~~'];
	$scope.borrowTime="2016/1/05";
	$scope.returnTime="2016/1/15";

	Api.getMyBorrow($rootScope.Account.Id,function(){
		//must parse
		$scope.BorrowList = data;
	});

});