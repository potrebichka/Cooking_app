function convertToLitter(gallon){
  return (gallon / 0.26417).toFixed(3);
}

var gallon= prompt ("How much litre");

alert (convertToLitter(gallon));

function convertToGallon(liter){
  return (liter *  0.26417)

}
var liter= prompt ("How much litre");

alert (convertToGallon(liter));
