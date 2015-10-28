'use strict';


angular.module('wewashApp')
  .controller('FaqCtrl', function($scope) {

    $scope.questions = [{
      question: 'Vad är Hemtvätt?',
      answer: 'Hemtvätt är en online tjänst för tvättning inom Växjö'
    }, {
      question: 'Vem utför tvättningen?',
      answer: 'Tvättningen utförs av Dalbotvätten som är anslutna till Sveriges tvätteriförbund'
    }, {
      question: 'Vad är menas med rörligt pris?',
      answer: 'Rörligt pris innebär att du bokar en hämtning. Vi kommer därefter och hämtar din tvätt, efter att vi utfört tvättningen skickar vi totala priset i ett mail till dig.'
    }];

  });
