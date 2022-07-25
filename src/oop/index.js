class Customer {
  constructor(id, customerNumber) {
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "New Name";
console.log(customer.id);

Customer.something = "something";
console.log(Customer.something);

console.log(customer.customerNumber);

class IndividualCustomer extends Customer {
  constructor(firstName, id, customerNumber) {
    super(id, customerNumber);
    this.firstName = firstName;
  }
}
class IndividualCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = firstNcompanyNameame;
  }
}
