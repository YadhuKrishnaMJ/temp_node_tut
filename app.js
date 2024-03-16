// npm - global comman, comes with node
// npm --version

//local dependency - use it only in this project
//npm i <pakageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <pakageName> (mac)

//package.json - manifest file (stores important info about project)
//manual approach (creat package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y(everything to default)


const _ = require('lodash');

const items =[1,[2,[3,[4]]]]
const newItems =_.flattenDeep(items);
console.log(newItems)