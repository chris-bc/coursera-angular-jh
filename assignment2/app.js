(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getItemsToBuy();

    buyList.bought = function (itemIndex) {
      ShoppingListCheckOffService.bought(itemIndex);
    };

    console.log('buylist', buyList);
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var itemsToBuy = [
      {
        name: 'cookies',
        quantity: 10
      }, {
        name: 'phones',
        quantity: 3
      }, {
        name: 'toothbrush',
        quantity: 1
      }, {
        name: 'vegan treats',
        quantity: 42
      }
    ];
    var itemsBought = [];

    service.getItemsToBuy = function() {
      return itemsToBuy;
    };

    service.getBoughtItems = function() {
      return itemsBought;
    };

    service.bought = function(itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };
  }

})();
