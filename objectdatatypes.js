//variables

let name = 'Arnell';

//arrays

let names = ['Claude', 'Arnell', 'Milhouse'];

//objects

let customer = {
    firstName: 'Arnell', //key: 'value' pairs === aka properites
    middleName: '',
    lastName: 'Milhouse',
    customerId: '8108',
    dateHired:'2017-06-19',
    salary: 80000,
    shoppingDates: ['2020-01-07','2020-01-09','2020-01-10','2020-01-15',],

    highWageEarners: function () { //a function within an object is called a METHOD
        if (customer.salary >= 70000) {
            console.log(`Customer ${this.firstName} is a high wage earner who has made ${this.shoppingDates.length} shopping trips.`) //this. = inside the object
        }
    }
        
    }



//dot notation
customer.highWageEarners(); // <----METHOD    

document.getElementById('name').innerText = customer.firstName;//getElementById is the object | 'name' is the property
document.getElementById('storeVisits').innerText = `${customer.shoppingDates.length} shopping visits `;
