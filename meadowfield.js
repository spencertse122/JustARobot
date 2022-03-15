// Village of Meadowfield isn't very big
// It consists of 11 places with 14 roas between them

// each road contains two locations, conencted with a -
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
    ];

console.log(`Roads Array stores ${roads.length} items.`)


// an array of strings is not very useful
// in a map we want to look at what is linked to what

function buildGraph(edges) {
    let graph = Object.create(null)
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to]
        } else {
            graph[from].push(to)
        }
    }

    // the edges.map is using the Array.prototype.map()
    // and apply the r.split
    // instead of iterating more, so the code is sleek
    for (let [from, to] of edges.map(r => r.split('-'))) {
        addEdge(from, to)
        addEdge(to, from)
    }
    return graph
}


// example of how to use the edges
const roadGraph = buildGraph(roads)

// The fact that something sounds like an object does not
// automatically mean that it should be an object in your program

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

// setting up the first village state object
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

// setting up the next village state object
let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);

console.log('-'.repeat(10));

// Create a new object
let object = Object.freeze({value: 5}); // freezing the value in dictionary
object.value = 10;
console.log(object.value);

// Persistent data structure
// When the objects in my system are fixed, stable things,
// I can consider operations on them in isolation—moving to Alice’s house from
// a given start state always produces the same new state. When objects change
// over time, that adds a whole new dimension of complexity to this kind of
// reasoning.


// Simulation



function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length)
    return array[choice]
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`)
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
}

runRobot(VillageState.random(), randomRobot)

// The mail truck's routes

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
    ];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    // memory is an array, we will take the first one as direction
    // and then use the slice function to trim off the position zero
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

console.log('-'.repeat(10))
// Strict mode
function canYouSpotTheProblem() {
    "use strict";
    for (counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem()

