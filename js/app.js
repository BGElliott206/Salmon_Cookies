/* eslint-disable no-unused-vars */
// 'use strict';




var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function Store(minCustomer, maxCustomer, avgCookieSale) {
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;

  this.location = 'first-and-pike';
  this.minCustomer = 23;
  this.maxCustomer = 65;
  this.avgCookieSale = 6.3;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  this.customerCount = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.CalculateValues = function (){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerCount(23, 65) * this.avgCookieSale));
    }


  };
  

  this.dailyTotal = function () {
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      this.totalCookies += this.cookiesPerHour[i];
    }
  };

  this.render = function () {
    var elementUl = document.getElementById(this.location);
    for (var i = 0; i < this.cookiesPerHour.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      elementUl.append(liElement);
    }
    liElement.textContent = `Total cookies sold ${this.totalCookies}`;
    elementUl.append(liElement);
  };

}
var firstAndPike = new Store();
firstAndPike.CalculateValues();
firstAndPike.render();

var seaTacAirport = new Store();
seaTacAirport.CalculateValues();
seaTacAirport.render();



//Salmon cookies 1st and Pike location




// var firstAndPike = {
//   location: 'first-and-pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   cookiesPerHour: [],
//   totalCookies: 0,

//   customerCount: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// };

// for (var i = 0; i < hours.length; i++) {
//   firstAndPike.cookiesPerHour.push(Math.ceil(firstAndPike.customerCount(23, 65) * firstAndPike.avgCookieSale));
// }

// firstAndPike.dailyTotal = function () {
//   for (var i = 0; i < firstAndPike.cookiesPerHour.length; i++) {
//     firstAndPike.totalCookies += firstAndPike.cookiesPerHour[i];
//   }

// };

// firstAndPike.render = function () {
//   var elementUl = document.getElementById(this.location);
//   for (var i = 0; i < firstAndPike.cookiesPerHour.length; i++) {
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     elementUl.append(liElement);
//   }
//   liElement.textContent = `Total cookies sold ${firstAndPike.totalCookies}`;
//   elementUl.append(liElement);
// };
// firstAndPike.dailyTotal();
// firstAndPike.render();

// //-----------------------------------------------------------------------
// var seaTacAirport = {

//   location: 'seatac-airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   cookiesPerHour: [],
//   totalCookies: 0,

//   customerCount: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// };

// for (var i = 0; i < hours.length; i++) {
//   seaTacAirport.cookiesPerHour.push(Math.ceil(seaTacAirport.customerCount(3, 24) * seaTacAirport.avgCookieSale));
// }

// seaTacAirport.dailyTotal = function () {
//   for (var i = 0; i < seaTacAirport.cookiesPerHour.length; i++) {
//     seaTacAirport.totalCookies += seaTacAirport.cookiesPerHour[i];
//   }

// };

// seaTacAirport.render = function () {
//   var elementUl = document.getElementById(this.location);
//   for (var i = 0; i < firstAndPike.cookiesPerHour.length; i++) {
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     elementUl.append(liElement);
//   }
//   liElement.textContent = `Total cookies sold ${seaTacAirport.totalCookies}`;
//   elementUl.append(liElement);
// };
// seaTacAirport.dailyTotal();
// seaTacAirport.render();
// //--------------------------------------------------------
// var seattleCenter = {

//   location: 'seattle-center',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   cookiesPerHour: [],
//   totalCookies: 0,

//   customerCount: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// };

// for (var i = 0; i < hours.length; i++) {
//   seattleCenter.cookiesPerHour.push(Math.ceil(seattleCenter.customerCount(11, 38) * seattleCenter.avgCookieSale));
// }

// seattleCenter.dailyTotal = function () {
//   for (var i = 0; i < seattleCenter.cookiesPerHour.length; i++) {
//     seattleCenter.totalCookies += seattleCenter.cookiesPerHour[i];
//   }

// };

// seattleCenter.render = function () {
//   var elementUl = document.getElementById(this.location);
//   for (var i = 0; i < seattleCenter.cookiesPerHour.length; i++) {
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     elementUl.append(liElement);
//   }
//   liElement.textContent = `Total cookies sold ${seattleCenter.totalCookies}`;
//   elementUl.append(liElement);
// };
// seattleCenter.dailyTotal();
// seattleCenter.render();
// //------------------------------------------------------------------------

// var capitolHill = {

//   location: 'capitol-hill',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   cookiesPerHour: [],
//   totalCookies: 0,

//   customerCount: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// };

// for (var i = 0; i < hours.length; i++) {
//   capitolHill.cookiesPerHour.push(Math.ceil(capitolHill.customerCount(11, 38) * capitolHill.avgCookieSale));
// }

// capitolHill.dailyTotal = function () {
//   for (var i = 0; i < capitolHill.cookiesPerHour.length; i++) {
//     capitolHill.totalCookies += capitolHill.cookiesPerHour[i];
//   }

// };

// capitolHill.render = function () {
//   var elementUl = document.getElementById(this.location);
//   for (var i = 0; i < capitolHill.cookiesPerHour.length; i++) {
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     elementUl.append(liElement);
//   }
//   liElement.textContent = `Total cookies sold ${capitolHill.totalCookies}`;
//   elementUl.append(liElement);
// };
// capitolHill.dailyTotal();
// capitolHill.render();
// //-----------------------------------------------------

// var alki = {

//   location: 'alki',
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   cookiesPerHour: [],
//   totalCookies: 0,

//   customerCount: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// };

// for (var i = 0; i < hours.length; i++) {
//   alki.cookiesPerHour.push(Math.ceil(alki.customerCount(11, 38) * alki.avgCookieSale));
// }

// alki.dailyTotal = function () {
//   for (var i = 0; i < alki.cookiesPerHour.length; i++) {
//     alki.totalCookies += alki.cookiesPerHour[i];
//   }

// };

// alki.render = function () {
//   var elementUl = document.getElementById(this.location);
//   for (var i = 0; i < alki.cookiesPerHour.length; i++) {
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//     elementUl.append(liElement);
//   }
//   liElement.textContent = `Total cookies sold ${alki.totalCookies}`;
//   elementUl.append(liElement);
// };
// alki.dailyTotal();
// alki.render();
