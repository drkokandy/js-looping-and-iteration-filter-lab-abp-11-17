// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function(name) {
    return name.toUpperCase() === string.toUpperCase();
  });
}