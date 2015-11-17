'use strict';


angular.module('wewashApp')
  .controller('FaqCtrl', function($scope) {

    $scope.questions = [{
      question: 'Vad är Hemtvätt?',
      answer: 'Hemtvätt är en onlinetjänst för tvättning inom Växjö'
    }, {
      question: 'Vem utför tvättningen?',
      answer: 'Tvättningen utförs av ett tvätteri som är anslutet till Sveriges tvätteriförbund'
    }, {
      question: 'Vad händer om jag inte utnyttjar allt i veckan?',
      answer: 'Alla produkter som inte används går automatiskt vidare till nästa vecka, ingenting försvinner'
    }, {
      question: 'Hur länge kan jag avboka en hämtning?',
      answer: 'Hämtningen kan avbokas fram till 1 timme innan utsatt tid'
    }];

  });
