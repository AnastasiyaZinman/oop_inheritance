//use the `class` keyword to define a class 
class Vehicle{
  //define the constructor function within the class
    constructor (x, y, speed, feul = 0) {
      this._x = x;
      this._y = y;
      this.speed = speed;
      this.feul = feul;
   }
   
    get x () {
    return this._x;
    }
    get y () {
        return this._y;
        }
       
    set x(value) {
    console.log('setter for x: '+ value);
    this._x = value;
    }
   
    
        set y(value) {
        console.log('setter for y: '+ value);
        this._y = value;
        }

   static randomStep (factor) {
    return  (Math.floor(Math.random()*20)*factor)
    }

  //define any other functions/properties of the class
   honk () {
      console.log("Beep! Beep!");
   }

   static getInfo(){
      console.log("Cars are great!!");
   }
}
class Car extends Vehicle{
    constructor (x, y) {
        super(x, y, 5);
     }
    turnOnAC () {
        console.log("Cold!");}
}

class FastCar extends Car {
    constructor (x, y) {
        super(x, y);
        this.speed = Vehicle.randomStep(2);
     }
}
class RaceCar extends Car {
    constructor (x, y) {
        super(x, y);
        this.speed = Vehicle.randomStep(4);
     }
}
class Airplane extends Vehicle{
    constructor (x, y, speed) {
      super(x, y, speed);
      this.altitude = 0;
    }
    landing () {
       this.altitude="landing";
    }
    takeOff () {
       this.altitude="takeoff";
    }
 }

class Bicycle extends Vehicle{
    constructor (x, y) {
      super(x, y, 2);
    }
    honk () {
       console.log("Hey! Watch out!");
    }
 }

 var myCar = new Car(0, 0);
 myCar.turnOnAC()
 var myCarFast = new FastCar(4, 5);
 console.log(myCarFast);
 var myCarRace = new RaceCar(10, 15);
 console.log(myCarRace);
 var airplane = new Airplane(10, 15, 500);
 airplane.landing();
 console.log(airplane.altitude);
 airplane.takeOff();
 console.log(airplane.altitude);