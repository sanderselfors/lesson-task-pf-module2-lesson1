// Question 1 

const requiredName = "Gertrude";
const suppliedName = "GERTRUDE";

if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
  console.log("The strings are the same");
} else {
  console.log("The strings are not the same");
}

// Question 2

const username = "myusername";

const userLength = username.length;

console.log(`userLength ${userLength}`);

if (userLength >= 4 && userLength <= 10) {
  console.log("The username meets the conditions TRUE");
} else {
  console.log("The username does NOT meet the conditions FALSE");
}

// Question 3

const invoicePaid = true;
const productDispatched = true;
const customerHasSigned = true;

if (invoicePaid && productDispatched && customerHasSigned) {
  console.log("Order Complete");
} else if (!invoicePaid) {
  console.log("The invoice is not paid");
} else if (!productDispatched) {
  console.log("Product is on the way");
} else if (!customerHasSigned) {
  console.log("Please sign the delievery");
}

// Questin 4

if (!invoicePaid || !productDispatched || !customerHasSigned) {
    console.log("ERROR");
  
    if (!invoicePaid) {
      console.log("The invoice is not paid");
    }
  
    if (!productDispatched) {
      console.log("Product is on the way");
    }
  
    if (!customerHasSigned) {
      console.log("Please sign the delievery");
    }
  } else {
    console.log("Order Complete");
  }