// Village of Meadowfield isn't very big
// It consists of 11 places with 14 roas between them

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

