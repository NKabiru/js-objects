// Creation of Character object through function
function Character(name, atk, def) {
    this.name = name;
    this.atk = atk;
    this.def = def;

    function ratio(atk,def){
        function percentage() {
            return atk/def * 100;
        }
        percentage();
    };
}

// Prototype adds a method to Character object
Character.prototype.advice = function (){
    if(this.atk > this.def){
        return "Offense is your greatest defense";
    } else if (this.atk < this.def) {
        return "You are an unbreakable wall.";
    } else {
        return "I cannot see your power...";
    }
};

// Constructor creating new Character objects
var warrior = new Character();
warrior.name = "warrior";
warrior.atk =  10;
warrior.def = 8;

var knight = new Character();
knight.name = "knight";
knight.atk = 5;
knight.def = 20;

var mage = {
    name: "mage",
    atk: 0,
    def: 0
};

var outputStats = document.getElementById("output-stats");
var outputAdvice = document.getElementById("output-advice");
var btnSubmit = document.getElementById("btn-submit");
var selectClass = document.getElementById("input-class");

console.log(warrior);
console.log(knight);
console.log(mage.advice());

btnSubmit.addEventListener("onclick",function (){
    console.log(selectClass[selectClass.selectedIndex].value);
    switch (selectClass.options[selectClass.selectedIndex].value) {
        case warrior.name:
            console.log(warrior);
            outputStats.innerHTML = "Atk: "+ warrior.atk + " Def: "+ warrior.def;
            outputAdvice.innerHTML = warrior.advice();
            break;
        case knight.name:
            console.log(knight);
            outputStats.innerHTML = "Atk: "+ knight.atk + " Def: "+ knight.def;
            outputAdvice.innerHTML = knight.advice();
            break;
        case mage.name:
            console.log(mage);
            outputStats.innerHTML = "Atk: "+ mage.atk + " Def: "+ mage.def;
            outputAdvice.innerHTML = mage.advice();
        default:
            console.log("error");
            break;
    }
});
