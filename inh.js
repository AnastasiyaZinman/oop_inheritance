class User{
  //define the constructor function within the class
  constructor (name, department, courseDate) {
    this.name = name;
    this.department = department;
    this.courseDate = courseDate;
  } 

  speak (sentence) {
    console.log(this.name + " says: '" + sentence + "'");
  }

  moveDepartment (newDepartment){
    this.department = newDepartment;
  }
}

//use the `extends` keyword to inherit from other classes
class Bob extends User{
    constructor (courseDate) {
      //call super in the constructor to invoke the parent's constructor
      super("Bob", "Bob's Department", courseDate);
    }
  
    speak (sentence) {
      //use super again to invoke the parent's `speak`
      super.speak(sentence);
      //add something unique to this class's `speak`
      console.log('...and a hush falls over the crowd...');
    }
  }
   
  const b = new Bob("22 June");
  b.speak('Check it.');
  console.log(b);
