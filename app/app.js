(function(){
  angular.module('Countdown', ['ngMaterial'])

  .controller('mainController', function($scope){

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    $scope.imageUrls = [
                          // 'assets/img/1.jpg',
                          'assets/img/2.jpg',
                          'assets/img/3.jpg',
                          'assets/img/4.jpg',
                          'assets/img/5.jpg',
                          'assets/img/6.jpg',
                          'assets/img/7.jpg',
                          'assets/img/8.jpg',
                          'assets/img/9.jpg',
                          'assets/img/10.jpg',
                          'assets/img/11.jpg',
                          'assets/img/12.jpg',
                          'assets/img/13.jpg',
                          'assets/img/14.jpg',
                          'assets/img/15.jpg',
                          'assets/img/16.jpg',
                          'assets/img/17.jpg',
                          'assets/img/18.jpg',
                          'assets/img/19.jpg',
                          'assets/img/20.jpg',
                          'assets/img/21.jpg',
                          'assets/img/22.jpg',
                          'assets/img/23.jpg',
                          'assets/img/24.jpg',
                          'assets/img/25.jpg',
                          'assets/img/26.jpg',
                          'assets/img/27.jpg',
                          'assets/img/28.jpg',
                          'assets/img/29.jpg',
                          'assets/img/30.jpg',
                          'assets/img/31.jpg',
                          'assets/img/32.jpg',
                          'assets/img/33.jpg',
                          'assets/img/34.jpg',
                          'assets/img/35.jpg',
                          'assets/img/36.jpg',
                          'assets/img/37.jpg',
                          'assets/img/38.jpg',
                          'assets/img/39.jpg',
                          'assets/img/42.png',
                          'assets/img/43.png'
                        ];
    $scope.imageUrls = shuffle($scope.imageUrls);


    setTimeout(function(){
      $("img").addClass('blur');
    }, 3000);

    
  });


})();
