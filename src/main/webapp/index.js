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
            var equations = {
                in: "teste"
            }
            $http.post('/simplex', equations).success(function (data) {
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
                    question: "",
                    questionPlaceholder: "foo",
                    text: "",
                    numRes: $scope.numRes
                });
            }
            console.log($scope.restrictions);
            console.log($scope.funcOtim);
        };
    })