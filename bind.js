const normalPerson = {
    firstName: 'Joy',
    lastName: 'Mazumdar',
    salary: 150000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        console.log(this); /* full object er propraty soho asbe output*/
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alam',
    salary: 250000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 35000
}

// onek gula object theke jekono object anar jonno bind use korte hobe

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary); /*main value not change 15000*/

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(5000);
friendlyChargeBill(2000);
console.log(friendlyPerson.salary);