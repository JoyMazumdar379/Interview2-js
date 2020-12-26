const normalPerson = {
    firstName: 'Joy',
    lastName: 'Mazumdar',
    salary: 150000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);
console.log(normalPerson);
console.log(normalPerson.firstName);