class Vehicle{
    constructor (x, y, speed) {
      this.x = x || (Vehicle.defaultX = 1);
      this.y = y || (Vehicle.defaultY = 1)
      this.speed = speed || (Vehicle.defaultSpeed = 5);
      Vehicle.carsSold++; //local variable
   }


   honk () {
      console.log("Beep! Beep!");
   }

   static getInfo(){
      console.log("Cars are great!! " + Vehicle.carsSold + " cars was sold");
   }
}

Vehicle.carsSold = 0;
// Vehicle.defaultSpeed = 5;
var MyCar = new Vehicle(5,6,70);
var MyCar1 = new Vehicle(0,0,0);
Vehicle.getInfo();
console.log(MyCar);
console.log(MyCar1);
