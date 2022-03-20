const ftoc = function(TempInF) {
let TempInC= ((TempInF - 32) * 5/9);
// TempInC=TempInC.toFixed(1);       // cant use this because even when its 0 it shows 0.0
TempInC= Math.round(TempInC*10)/10;
return TempInC;
  // [°C] = ([°F] − 32) × 5⁄9
};

const ctof = function(TempInC) {
  let TempInF= (TempInC*9/5 + 32);
  // TempInF=TempInF.toFixed(1);
TempInF= Math.round(TempInF*10)/10;

  return TempInF;
  // [°F] = [°C] × 9⁄5 + 32
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
