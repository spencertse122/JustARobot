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

