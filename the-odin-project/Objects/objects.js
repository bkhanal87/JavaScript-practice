const person = {
    name: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    bio() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
    }
};

person.name
person.name[0]
person.age
person.bio()
person.introduceSelf

person['name']['first']
console.log(person);