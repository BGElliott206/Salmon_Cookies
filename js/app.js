
'use strict';

var hours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm'];

var allStores = [firstAndPike, seaTacAirport, SeattleCenter, CapitolHill, alki];

var referenceTable = document.getElementById('cookie-stand');

function tableHeader(){
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = ' ';
  tr.append(th);

  for (var i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    th.textContent = hours[i];
    tr.append(th);
  }
  th = document.createElement('th');
  th.textContent = 'totals';
  tr.append(th);
  referenceTable.append(tr);
}
function Store(location, minCustomer, maxCustomer, avgCookieSale) {
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.location = location;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  this.customerCount = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.calculateValues = function (){
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


    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.location;
    trElement.append(tdElement);
    for(var i = 0; i < this.cookiesPerHour.length; i++) {
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesPerHour[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookies;
    trElement.append(tdElement);
    referenceTable.append(trElement);
  };

  this.dailyStats = function () {
    this.calculateValues();
    this.dailyTotal();
    this.render();
  };

}

var firstAndPike = new Store('First & Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);



tableHeader();
firstAndPike.dailyStats();
seaTacAirport.dailyStats();
SeattleCenter.dailyStats();
CapitolHill.dailyStats();
alki.dailyStats();

