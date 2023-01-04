angular.module("movies",[])
.filter('strUpp',function(){
    return function( str ) {
      var revStr = str.split(' ');
      return revStr.map(function(wrd){return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();}).join(' ');
    }
 })

.controller("moviesctrl",function($scope)
{
    var mitems=[
        {name:'Interstellar',price:50, description:'A Man travels through space and time to unite with daughter', category:'Thriller', rating:'7'},
        {name:'Love Today',price:150, description:'Two people exchange phones before marriage', category:'Romance', rating:'8'},
        {name:'Ikon Lives',price:40, description:'A musical that lifts spirits and makes you fall in love with life', category:'Action', rating:'5'},
        {name:'Last Step',price:230, description:'Final years of Earth in the brink of destruction by humanity', category:'Adventure', rating:'5'},
        {name:'Fast and Furious',price:20, description:'Race to family and friends with wheels', category:'Racing', rating:'8'},
        {name:'Lost Island',price:110, description:'To dangerous islands and beyond - final chapter of the series', category:'Thriller', rating:'3'}
    ];
    $scope.fd=mitems;
    $scope.rowlimit=6;
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
      $scope.customStyle = {};
      $scope.turnGreen = function (){
          $scope.customStyle.style = {"color":"green"};
      }
      $scope.fname = " ";  

      $scope.changeColorFilter = function (item){
       
         if (item.category == 'Thriller') {
           item.class = 'thriller';
        }
        else if(item.category == 'Romance'){
            item.class= 'romance';
        }
        else if(item.category == 'Action'){
            item.class= 'action';
        }
        else if(item.category == 'Adventure'){
            item.class= 'adventure';
        }
        else if(item.category == 'Racing'){
            item.class= 'racing';
        }
     
       return true;
        
      };
    });