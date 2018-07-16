function human(name){
    this.name=name;
    this.legs =2
}

function robot(name){
    this.name=name;
    this.legs = 4;
    this.color="white"
}

human.prototype = new robot();


var buddy = new human("abc")
buddy.voice = function(){
    console.log("hiiiiii")
}

var snoppy = new human("xyz")
