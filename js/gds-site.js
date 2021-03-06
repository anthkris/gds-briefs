(function () {
  'use strict';
  // this function is strict...
  var app = angular.module('designBrief', ['ngAnimate','ui.bootstrap']);

  app.controller('CollapseCtrl', function ($scope) {
    $scope.isNavCollapsed = true;
  });

  app.filter("trust", ['$sce', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
  }]);

  app.controller('BriefCtrl', function($scope, $http, dataService) {
    function BriefDataObj(briefData) {
      //console.log(briefData);
      this.title = briefData.title;
      this.audience = briefData.audience;
      this.brief = briefData.brief;
      this.deliverables = briefData.deliverables;
      this.inspiration = briefData.inspiration;
    }

    $scope.randomBrief = function(briefData) {
      var briefs = briefData.data.briefs;
      //console.log(briefs);
      //random number to get random brief
      function randomNum (upper, lower){
        return Math.floor(Math.random() * (upper - lower + 1)) + lower;
      }

      //upper number needed to get random brief
      var allBriefs = briefs.length - 1;
      var chosenBrief = briefs[randomNum(allBriefs, 0)];
      $scope.designBrief = new BriefDataObj(chosenBrief);
    };

    $scope.getBriefs = function() {
      var query = 'https://api.myjson.com/bins/17bvvf';
      dataService.getBriefData(query).then(function(briefResponse) {
        $scope.randomBrief(briefResponse);
      });
    };

    $scope.getBriefs();
  });

  app.service('dataService', function($http) {
    return ({
      getBriefData: function(query) {
        return $http.get(query).then(function successCallback(response) {
          //console.log(response);
          return response;
        });
      }
    });
  });

  app.directive('briefs', function($interval) {
    return {
      restrict: 'E',
      templateUrl: 'briefs.html',
      replace: true,
    };
  });

  app.directive('inspire', function($interval){
    return {
        link: function(scope, elm){
          // Wait until last ng-repeat loop fired
          //console.log(scope.$last);
          if (scope.$last) {
            var header = angular.element(document.querySelector('.intro-header'));
            // Color function has to be in the briefs directive to affect getAnother,
            // since this is a template element
            var getAnother = angular.element(document.getElementsByClassName('get-another'));
            // Color function has to be in the inspire directive to affect inspireLinks,
            // since this is an ng-repeat directive inside of the template
            var inspireLinks = angular.element(document.getElementsByClassName('dont-break-out'));
            var footerLinks = angular.element(document.getElementsByClassName('footer-links'));

            $interval(function() {
              if (header.hasClass('color-red')) {
                header.removeClass('color-red');
                getAnother.removeClass('color-red');
                footerLinks.removeClass('link-color-red');
                inspireLinks.removeClass('link-color-red');
                header.addClass('color-green');
                getAnother.addClass('color-green');
                footerLinks.addClass('link-color-green');
                inspireLinks.addClass('link-color-green');
              } else if (header.hasClass('color-green')) {
                header.removeClass('color-green');
                getAnother.removeClass('color-green');
                footerLinks.removeClass('link-color-green');
                inspireLinks.removeClass('link-color-green');
                header.addClass('color-purple');
                getAnother.addClass('color-purple');
                footerLinks.addClass('link-color-purple');
                inspireLinks.addClass('link-color-purple');
              } else if (header.hasClass('color-purple')) {
                header.removeClass('color-purple');
                getAnother.removeClass('color-purple');
                footerLinks.removeClass('link-color-purple');
                inspireLinks.removeClass('link-color-purple');
                header.addClass('color-red');
                getAnother.addClass('color-red');
                footerLinks.addClass('link-color-red');
                inspireLinks.addClass('link-color-red');
              }
            }, 10000);
          }
        }
    };
  });

}());
