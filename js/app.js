'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//Object-first location Salmon_Cookies
var firstAndPike = {

  location: 'first-and-pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  cookiesPerHour: [],
  totalCookies: 0,

  customerCount: function( min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

};

for (var i = 0; i < hours.length; i++){
  firstAndPike.cookiesPerHour.push(Math.ceil(firstAndPike.customerCount(23, 65) * firstAndPike.avgCookieSale));
}

firstAndPike.dailyTotal = function(){
  for( var i = 0; i < firstAndPike.cookiesPerHour.length; i++){
    firstAndPike.totalCookies += firstAndPike.cookiesPerHour[i];
  }

};

firstAndPike.render = function(){
  var elementUl = document.getElementById(this.location);
  for( var i = 0; i < firstAndPike.cookiesPerHour.length; i++){
    var liElement = document.createElement('li');
    liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    elementUl.append (liElement);
  }
  liElement.textContent = `Total cookies sold ${firstAndPike.totalCookies}`;
  elementUl.append(liElement);
};
firstAndPike.dailyTotal();
firstAndPike.render();
