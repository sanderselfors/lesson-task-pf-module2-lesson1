// Question 1
var requiredName = "Gertrude";
var supppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === supppliedName.toLowerCase()) {
    console.log("The strings are equal");
}

// or
if (requiredName.toUpperCase() === supppliedName.toUpperCase()) {
    console.log("The strings are equal");
}


// Question 2
var username = "myusername";

// we're going to use the length property more than once so assign it to a variable
var len = username.length;
console.log(len);

if (len >= 4 && len <= 10) {
    console.log("Acceptable username");
}
else {
    if (len < 4) {
        console.log("Too few characters");
    }

    if (len > 10) {
        console.log("Too many characters");
    }
}


// Question 3
var invoicePaid = false;
var productDispatched = false;
var customerHasSigned = false;

// the below is shorthand for
// if(invoicePaid === true && productDispatched === true && customerHasSigned === true)
if (invoicePaid && productDispatched && customerHasSigned) {
    console.log("Order complete");
}
else {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}


// Question 4
if (!invoicePaid || !productDispatched || !customerHasSigned) {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}
else {
    console.log("Order complete");
}

