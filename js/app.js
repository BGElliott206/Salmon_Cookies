
'use strict';

//Global variables
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

var allStores = [];

var referenceTable = document.getElementById('cookie-stand');

var grandTotal = 0;

//Header
function renderTableHeader(){
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

//Constuctor
function Store(location, minCustomer, maxCustomer, avgCookieSale) {
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.location = location;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allStores.push(this);

  this.customerPerHour = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  this.calculateValues = function (){
    for (var i = 0; i < hours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.customerPerHour(23, 65) * this.avgCookieSale));
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

//Footer
function renderFooter() {
  var tfoot = document.createElement('tfoot');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = ' Totals:';
  tr.append(td);
  // Ryan - code smells check what is
  for(var r = 0; r < hours.length; r++){
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesPerHour[r];
    }
    grandTotal += hourlyTotal;
    td = document.createElement('td');
    td.textContent = hourlyTotal;
    tr.append(td);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.append(td);
  tfoot.append(tr);
  referenceTable.append(tfoot);
}

var firstAndPike = new Store('First & Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var CapitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

renderTableHeader();
firstAndPike.dailyStats();
seaTacAirport.dailyStats();
SeattleCenter.dailyStats();
CapitolHill.dailyStats();
alki.dailyStats();
renderFooter();

function addNewStore(event) {

  console.log('New store is added');
  event.preventDefault();

  var newStoreName = event.target.storename.value;
  var newMinimumCustomers = event.target.minimumcustomers.value;
  var newMaximumCustomers = event.target.maximumcustomers.value;
  var newAverageCookieSale = event.target.averagecookiesale.value;

  var newLocation = new Location(newStoreName, newMinimumCustomers, newMaximumCustomers, newAverageCookieSale);
  newLocation.render();
  allStores.push(newLocation);

  referenceTable.textContent = '';
}

var newStoreFormReference = document.getElementById('add-new-store');
newStoreFormReference.addEventListener('submit', addNewStore);

