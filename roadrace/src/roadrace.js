const { Runner } = require("mocha");

class Roadrace {
    constructor(raceDetails) {
        this.name = raceDetails.title;
        this.location = raceDetails.city;
        this.distance = raceDetails.distance;
        this.participants = [];
        
    }

    setDistance(distance) {
        this.distance = distance;
        return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
    }

    registerParticipants(participants) {
        this.participants.push(participants);
    }

    completeRace() {
       for (var i = 0; i < this.participants.length; i++) {
           this.participants[i].completedRaces.push(this.name);
           this.participants[i].milesRun = 13.1;
       }
    }
}

module.exports = Roadrace;
