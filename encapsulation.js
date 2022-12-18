class kingdomanimalia {

    setcoldblooded(animal1,animal2,animal3,animal4){
        this.animal1 = animal1;
        this.animal2 = animal2;
        this.animal3= animal3;
        this.animal4 = animal4;
    }
    getanimal1(){
        return this.animal1;
    }
    getanimal2(){
        return this.animal2;
    }
    getanimal3(){
        return this.animal3;
    }
    getanimal4(){
        return this.animal4;
    }

    setwarmblooded(animal1,animal2){
        this.animal1 = animal1;
        this.animal2 = animal2;
    }
    getanimal1(){
        return this.animal1;
    }
    getanimal2(){
        return this.animal1;
    }

}

let coldblooded1 = kingdomanimalia();

coldblooded1.setcoldblooded('butterfly','fish','frog','tortoise');
console.log (coldblooded1.getanimal1());
console.log (coldblooded1.getanimal2());
console.log (coldblooded1.getanimal3());
console.log (coldblooded1.getanimal4());

let warmblooded1 = kingdomanimalia();

warmblooded1.setwarmblooded('bird','cat');
console.log (coldblooded1.getanimal1());
console.log (coldblooded1.getanimal2());