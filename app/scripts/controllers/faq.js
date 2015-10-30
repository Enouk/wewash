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
      question: 'Vad är menas med rörligt pris?',
      answer: 'Rörligt pris innebär att du bokar en hämtning. Vi kommer därefter och hämtar din tvätt, efter att vi utfört tvättningen skickar vi totala priset i ett mail till dig.'
    }, {
      question: 'Vad är menas med fast pris?',
      answer: 'Fast pris är ett abonnemang som innebär att man betalar ett fast pris i månaden. Om man går över gränsen som ingår i abonnemanget tillkomer en rörlig kostad för varje liter tvätt. Du kan lätt se hur mycket du har använt genom att logga in på ditt konto'
    }];

  });
