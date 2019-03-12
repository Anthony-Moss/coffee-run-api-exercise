const API_URL = 'https://dc-coffeerun.herokuapp.com/api/coffeeOrders';

let ordersArray = [];

function accumulateOrders(theActualData) {
        console.log(theActualData)
        theActualData.forEach(function (order) {
            ordersArray.push(order);
        });       
    }

// const body = document.querySelector("[email-list]")
fetch(API_URL)
.then(function (response) {
    return response.json();
})
.then(accumulateOrders);