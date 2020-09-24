class Airport {
    constructor({airportname}) {
        this.airportname = airportname
        this.planes = []
    }

    constructor({destination}) {
        this.destination = destination
    }

    addPlane(planes) {
        this.planes.push(planes)
    }


}
module.exports = Airport