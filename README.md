# basicJavascript
 const fruits = [
    { Name: "Apple", count: 4},
    { Name: "Banana", count: 6 },
    { Name: "Mango", count: 6},
     {Name:"Apple",count:1}]
console.log("Simple Array :", fruits)

function addfruits(FruitAdd) {
    const fruitfind = fruits.find(item => item.Name === FruitAdd.Name);
    if (fruitfind) {
        fruitfind.count += 1
    }
    else {
        fruits.push(FruitAdd)
    }
}
addfruits({ Name: "Cherry", count: 1 })
addfruits({ Name: "Watermelon", count: 1 })
addfruits({ Name: "Apple", count: 1 })
addfruits({ Name: "Banana", count: 1 })
console.log( fruits)
