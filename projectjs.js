function myfunction(){
    document.getElementById("demo").innerHTML = bio.full_bio();
}
console.log("Hello World");

class Body {
    constructor(skin,ethnic,age,height,weight){
        this.skin_colour = skin;
        this.ethnic = ethnic;
        this.age = age;
        this.height = height;
        this.mass = weight;
    }

    full_bio(){
        let new_mass = this.mass * 2;
        return(new_mass);
    }
}

let bio = new Body("black","malay",26,1.83,82);
  console.log(bio.full_bio() + " " + bio.skin_colour + " " + bio.ethnic);