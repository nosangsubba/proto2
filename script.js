$(document).ready(function(){
    $('#locationSelect').on('change',function () {
        // alert($(this).val());
        var selectedOption = $(this).val();
        $('#locationRest').text("Restaurants in " + selectedOption);
        $('.restaurantsByLocation').css('visibility','visible');
  });
});
var app = angular
  .module("myApp",["ngRoute"])
  .controller("listController",["$scope", "$location", "$routeParams", function ($scope, $location, $routeParams) {
    $scope.editItem = function (index) {
      $location.path("List/show")
      }

    $scope.data = [
      {rating:"4",image:"foods/food1.jpg",name:"Ithaa",detail:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
      {rating:"5",image:"foods/food2.jpeg",name:"Dinner in the Sky",detail:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
      {rating:"5",image:"foods/food2.jpeg",name:"El Diablo",detail:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
      {rating:"5",image:"foods/food2.jpeg",name:"Norma's Kitchen",detail:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
      {rating:"5",image:"foods/food2.jpeg",name:"The Disaster Cafe",detail:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
      {rating:"5",image:"foods/food2.jpeg",name:"Eternity",detail:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."}
    ];
    }])
  .controller("showController",["$scope", "$location", "$routeParams",
  function ($scope, $location, $routeParams) {
    $scope.review = function () {
      $location.path("/List/review")
      // alert("hello");
      }
  }])
  .controller("reviewController",["$scope", "$location", "$routeParams",
  function ($scope, $location, $routeParams) {
    $scope.reviews = [
      {name:"Nosang",comment:"The ambience is pretty nice",rating:"5"}
    ]
    $scope.submitReview = function () {
      // alert("hello");
      $scope.reviews.push(
        {name:$scope.name, comment:$scope.comment, rating:$scope.rating}
      )
      }
  }]);
app.config(function ($routeProvider) {
    $routeProvider.when("/List",{
      templateUrl:"view-list.html",
      controller:"listController"
    })
    .when("/List/show",{
      templateUrl:"view-detail.html",
      controller:"showController"
    })
    .when("/List/review",{
      templateUrl:"view-review.html",
      controller:"reviewController"
    })
    .otherwise({
      redirectTo: "/List"
  })
  });