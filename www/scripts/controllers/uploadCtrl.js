app.controller('uploadCtrl',function($scope,Api){
	$scope.bookName="";
	$scope.bookISBN="";
	$scope.bookPublish="";
	$scope.author="";
	
	$scope.upload = function(){
		Api.uploadBook($scope.bookName,function(){
			alert("上傳成功");
		});
		alert("上傳成功");
		$scope.clear();
	}

	$scope.clear = function(){
		$scope.bookName="";
		$scope.bookISBN="";
		$scope.bookPublish="";
		$scope.author="";
	}
});