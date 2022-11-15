class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + ' ' + this.lastName
    }
}

const robin = new Person('Robin', 'Welrich');

console.log(robin.getName());

const dennis = new Person('Dennis', 'Welrich');

console.log(dennis.getName());