const orderedCount = str => [...new Set(str)].map((char, index) => [char, ([...new Set(str)].map(count => str.split(count).length - 1)[index])]);
console.clear();
console.log(orderedCount("abracadabra"));