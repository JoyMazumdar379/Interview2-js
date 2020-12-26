const normalPerson = {
    firstName: 'Joy',
    lastName: 'Mazumdar',
    salary: 150000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tex){
        console.log(this); /* full object er propraty soho asbe output*/
        this.salary = this.salary - amount - tips - tex;
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
// ekadik perameter thakle call use korte hobe.. ex amount , tips, tex

normalPerson.chargeBill.call(heroPerson, 1000, 500, 100);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 10000, 500, 100);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary); /*main value not change 15000*/