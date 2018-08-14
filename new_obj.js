class User {
constructor (name, course){
this.name = name
this.course = course
}
speak (sentence) {
    console.log(this.name + " says: '" + sentence + "'");
    }
}
var Ann = new User ("Anastasiya", "Bootcamp");
Ann.speak("Something");