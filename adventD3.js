/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  
//is the number pos between 1 and 100 and actually an int
if (height < 1 || height > 100 && !Number.isInteger(height)) 
{
  const errMsg = 'Enter better value plz';
  console.log(errMsg);
}

//Define tree
let tree = "";

//Generating tree part
for(let i = 1; i <= height; i++) 
{
    const spaces = "_".repeat(height - i);
    const characters = ornament.repeat(2 * i - 1); //first row:1, second:3, etc
    tree += spaces + characters + spaces + "\n";
}

//Generating trunk
const trunkWidth = 1;
const trunkSpaces = "_".repeat(height - trunkWidth); //find how many _ is takes to make even outline of box
const trunk = trunkSpaces + "#" + trunkSpaces + "\n";
tree += trunk + trunk; //make sure there are two trunks

return tree;

}
