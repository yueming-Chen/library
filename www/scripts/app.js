var app = angular.module('newLib',['ui.router'])
	.run(function($window,$rootScope,$state,$http,Api){
		$rootScope.Account = {
			'Id':'',
			'password':''
		};
		$rootScope.logined = false;
		$rootScope.name = "楊雅婷";
		$rootScope.logout = function(){
			alert('logout!');
			$rootScope.Account.Id = '';
			$rootScope.Account.password = '';
			$rootScope.logined = false;
		}
	})
	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');
		$stateProvider
		.state('home',{
			url:"/home",
			templateUrl:"view/home.html",
			controller:"homeCtrl"
		})
		.state('about',{
			url:"/about",
			templateUrl:"view/about.html"
		})
		.state('search',{
			url:"/search",
			templateUrl:"view/search.html",
			controller:"searchCtrl"
		})
		.state('bookDetail',{
			//$stateParams.id可以抓取傳送的值
			url:"/bookDetail/:bookId",
			templateUrl:"view/bookDetail.html",
			controller:"bookDetailCtrl"
		})
		.state('login',{
			url:"/login",
			templateUrl:"view/login.html",
			controller:"loginCtrl"
		})
		.state('upload',{
			url:"/upload",
			templateUrl:"view/upload.html",
			controller:"uploadCtrl"
		})
		.state('borrow',{
			url:"/borrow",
			templateUrl:"view/borrow.html",
			controller:"borrowCtrl"
		})
		.state('myBorrow',{
			url:"/myBorrow",
			templateUrl:"view/myBorrow.html",
			controller:"myBorrowCtrl"
		})
		.state('myReservation',{
			url:"/myReservation",
			templateUrl:"view/myReservation.html",
			controller:"myReservationCtrl"
		})
		.state('myDelay',{
			url:"/myDelay",
			templateUrl:"view/myDelay.html",
			controller:"myDelayCtrl"
		})
		.state('myDetailEdit',{
			url:"/myDetailEdit",
			templateUrl:"view/myDetailEdit.html",
			controller:"myDetailEditCtrl"
		})
		.state('changPassWord',{
			url:"/changPassWord",
			templateUrl:"view/changPassword.html",
			controller:"changPasswordCtrl"
		})
	});
	