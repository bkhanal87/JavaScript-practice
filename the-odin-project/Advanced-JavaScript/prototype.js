// the recommended way of setting the prototype of an object is Object.create. 
//Object.create very simply returns a new object with the specified prototype 
// and any additional properties you want to add

function Student() {

}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

function NinthGrader(name) {
    this.name = name
    this.grade = 9
}

EighthGrader.prototype = Object.create(Student.prototype)
NinthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl");
carl.sayName();
carl.grade;

const Kevin = new NinthGrader("Kevin");
Kevin.sayName();

NinthGrader.prototype.sayName = function() {
    console.log("Changing the prototype sayName() here");
}
Kevin.sayName();