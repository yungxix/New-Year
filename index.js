// jshint esversion:6

// Arrow Functions in js


//Old fashioned way of declaring a function.
var webex =  function(place, locatuion) {
    return '${place} of { locatuion}'
}
//New way of declaring a function
var webex= (place, location) => '${place} of ${location}'
console.log(webex);

var lordify = function(firstName, pocession) {
    if (!firstName){
    throw new Error("A firstname is reuired to lordify")
}
 if(!pocession) {
     throw new Error("A lord must have a pocession")
 }
 return '${firstName} of ${pocession}'
}
console.log(lordify("Folorunsho", "shina"));


  var tahoe = {
      resorts: ["kimberlin", "Squaw", "alpine", "Northstar"],
      print: function(delay=1000){

        /*  setTimeout function(){
              console.log(this.resorts.join(","))
          }, delay)*/
      }
  }
  tahoe.print() //Cannot read property of undefined
//Most Web browsers don't support ES6 for browsers to understand your ES6 Code You nedd to convert to ES5 code 
// Transpilling is the process of converting  code to another version.

  var country = {
      name: "Germany",
      Capital: "Berlin",
      Zipcode: 22,
      Landmass: "344sq m",
      Url: "germany.co",
      people: ["Black","White","Brown", "Dael","breo"]
  }

  console.log(country.people[3]);

  var pontifer = regularPerson => {
      console.log("${regularPerson.firstname} of Cassanova")
    }

    //Spread Operator
    // Spread operators are three dots(...) that perform several different tasks.
    //It basically allows you combine the content of an array.
     var fruits = ["Mango", "Gauva", "berries"]
     var price = [20, 40 ,50]

     var total = [...fruits, ...price]
     var [last] = fruits.reverse()
     console.log(total);

   // Working with Promises
    
    const gameOver = result =>
    console.log('Game Over - ${result}')

    const stillRolling = (message, currentPoint) =>
    console.log("${mesaage} - try again for ${currentPoint}")


     const craps = (rool, point) => new Promise((gameOver, rollAgain)=> {
         //If roll is not send as a number between 2 and 12, rollAgain
         if (!roll || typeof roll !== "number" || roll < 2 || roll > 12) {
             rollAgain("to roll a number")

         // If a point is not set, then this must be the first roll, the come out roll
         } else if(!point) {
             //If you roll a 7 or 11 during the first role, gameOver, you loose
             if(roll === 7 || roll === 11){
             gameOver("You win by natural")

             //If you roll a 2 or a 3, gameOver, you win
             } else if(roll ===2 || roll ===3){
                 gameOver("You loose, crapped Out")

                 //otherwise the point is set, rollAgain
             }else{
                 rollAgain(roll)
             }

             //It's not the first roll, and you rolled the point, gameOver. You win
         } else if(roll === point){
             gameOver("You win, you hit the point")
         }
         // It's not the first roll
         else{
             //And you rolled a 7, gameOver you loose
             if (roll === 7){
                 gameOver("you loose, craps")
             
             //Otherwise you missed, try again to hit the point

         }else{
             rollAgain(point)
         }
        }
     })

      /*const stillRolling = point =>
      console.log("The point is ${point}, try again")
      */
      
     const end = result =>
     console.log('Game Over - ${result}')

 


   /*  const getFakeMembers = count => new Promise((resolves, rejects) => {
         const api = 'http//api.randomuser.me/?nat=US&results=${count}'
         const request = new XMLHttpRequest()
         request.open('GET', api)
         request.onload = () =>
         (request.status === 2000) ?
         resolves(JSON.parse(request, response).results) :
         reject(Error(request.statusText))
         request.onerror = (err) => rejects(err)
         request.send()
     })

     getFakeMembers(5).then(
         members=> console.log(members),
         err=> console.error(
             new Error("Cannot load members from randomuser.me"))
     )

    */

 class Vacation {

     constructor(destination, length) {
     this.destination = destination
     this.length = length 
    }

    print() {
        console.log('${this.destination} will take ${this.length} days.')
    }
 }

  const trip = new Vacation('Santiago, Chile', 7);

  console.log(trip.printDetails());

  class Expedition extends Vacation {
      constructor(destinations, length, gear) {
      super(destination, length)
      this.gear = gear
      }

      print() {
          super.print()
          console.log('bring your ${this.gear.join(" and your")} ')
      }
  }

  var trip = new Expedition("Mt. Whitney", 3,
   ['sunglasses', "prayer flags", "camera" ])
   trip.print()
   // Output error : trip has already been declared 

//Template strings
  
//Old ways of concatenating strings
var message =  function(logo, lens){
    return("welcome")
};
console.log("message");

let scream = log => message =>
logger(message.toUpperCase()+ "!!!") 