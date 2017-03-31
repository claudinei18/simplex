/**
 * Created by claudinei on 20/03/17.
 */

angular.module('simplex', [])
    .controller('SimplexCtrl', function ($scope, $http) {

        $scope.restrictions = [];
        $scope.funcOtim = [];
        $scope.varVal = [];
        $scope.numVar = 0;
        $scope.numRes = 0;

        $scope.runSimplex = function(){
            var parameters = {
                json: JSON.stringify($scope.restrictions),
                numVar: $scope.numVar
            }

            $http.post('/simplex', JSON.stringify($scope.restrictions)).then(function (data) {
                $scope.status = data.data;
            });
        }

        $scope.range = function(n) {
            return new Array(n);
        };

        $scope.add = function () {
            console.log($scope.numVar);
            if($scope.numVar > 0){
                $scope.numRes = $scope.numRes + 1;
                var emptyArray = new Array($scope.numVar);
                $scope.restrictions.push({
                    arrayValVar: emptyArray,
                    numRes: $scope.numRes
                });
            }
            console.log(JSON.stringify($scope.restrictions))
        };

        $scope.deleteRestriction = function(index){
            console.log(index);
            $scope.restrictions.splice(index-1, 1)
        }
    })