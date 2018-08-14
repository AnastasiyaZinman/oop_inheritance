class User {
    //define the constructor function that will initialize new objects
    constructor (name, department, courseDate ) {
      this.name = name;
      this.department = department;
      this.c_D = courseDate;
    } 
    speak (sentence) {
    console.log(this.name + " says: '" + sentence + "'");
    }
    
    moveDepartment (newDepartment){
    this.department = newDepartment;
    }
   
  }
  var Dan = new User("Dan", "Coding Bootcamp", new Date(2018,6,3));
  var Shani = new User("Shani", "Coding Evening Course");
console.log(Dan.c_D);
var Shani = new User("Shani" , "A regular course");
Shani.moveDepartment("Coding Bootcamp");
Shani.speak ("Hi man");
Dan.department = ("Coding Bootcamp");
console.log(Dan.department);
