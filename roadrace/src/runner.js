class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];
    }

    runSomeMiles(milesRun) {
        this.milesRun += milesRun;
        this.fitness += milesRun;
    }

    stretch() {
        this.fitness += .5;
    }

    runRace(race, raceLength) {
        this.completedRaces.push(race);
        this.runSomeMiles(raceLength)
       
    }
}

module.exports = Runner;
