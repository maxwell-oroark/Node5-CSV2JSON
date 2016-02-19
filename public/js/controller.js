angular.module('CSVapp')
	.controller('CSVcontroller', ['$scope', '$http', function ($scope, $http){
		
		$scope.greeting = "Welcome to my CSV app"

		$scope.getJson = function(data){
			console.log(data)
			$scope.data = data.data
		}

		$scope.parseCSV = function(userCSV){
					return $http.post('/api/csv', userCSV)
				}
				

				
		
		// FruitFactory.getFruits().then(function(returnData){
		// 	console.log('From the server : ', returnData)
		// 	$scope.fruits = returnData.data
		// })
		
		// $scope.createFruit = FruitFactory.createFruit
		
		
		// SAME AS : 
		// $http.get('/api/fruits').then(function(returnData){
		// 	console.log('From the server : ', returnData)
		// })
		// This is because getFruits is returning $http.get('/api/fruits')


		// angular.module('FruitCity')
		// 	.factory('FruitFactory', ['$http', function($http){
				
		// 		var getFruits = function(){
		// 			return $http.get('/api/fruits')
		// 		}
				
		// 		var createFruit = function(fruitData){
		// 			return $http.post('/api/fruits', fruitData)
		// 		}
				
		// 		return {
		// 			getFruits : getFruits,
		// 			createFruit : createFruit
		// 		}
		// 	}])
	}])