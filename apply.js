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

// perameter array hisabe pathaite hobe

normalPerson.chargeBill.apply(heroPerson, [2000, 300, 500]);
console.log(heroPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [2000, 300, 500]);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary); /*main value not change 15000*/