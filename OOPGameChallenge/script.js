//object literals
//drawback of object literal is that we have to create 100 intances differently if we need them, that's why we use constructor or classes like a blueprint to create so many instances of a single entity.
const rectangle = {
  name: "Rectangle",
  height: 30,
  width: 20,
  area: function () {
    return this.height * this.width;
  },
};
let output;
output = rectangle.name;
output = rectangle.width;
output = rectangle.area();
console.log(output);

//constructor function(should begin with capital letter)
//this function becomes constructor when we add new keyword with it.
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("Rectangle 1", 30, 40);
output = rect1;
output = rect1.name;
output = rect1.width;
output = rect1.area();

const rect2 = new Rectangle("Rectangle 2", 10, 10);
output = rect2;
output = rect2.name;
output = rect2.width;
output = rect2.area();
//console.log(output);

//1) a new empty object is created
//2) the constructor function is called with the arguments that we passed in
//3) the "this" keyword is set to the new empty object
//4) the new object is returned from the constructor function

function Player (name){
   this.name = name;
   this.lvl = 1;
   this.points = 0;
};

const player1 = new Player("Player1");

Player.prototype.gainXp = function(xp) {
   this.points += xp;
   if(this.points > 10){
    this.lvl += 1;
    this.points = (this.points - 10);
   }
   return this.points;
};

Player.prototype.describe = function() {
  console.log(`${this.name} is at level ${this.lvl} with ${this.points} experience points`);
};

// output = player1.name;
// output  = player1.lvl;
// output  = player1.points;
// output  = player1.isSquare();

player1.gainXp(4);
player1.gainXp(7);
player1.gainXp(5); 
player1.gainXp(6);
player1.describe();

const player2 = new Player("Player2");
player2.gainXp(5);
player2.gainXp(3);
player2.gainXp(5);
player2.describe();
//output = player1.points;
//console.log(output);