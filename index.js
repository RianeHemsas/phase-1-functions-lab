// Code your solution in this file!
let scuberHeadquarters=42;

function distanceFromHqInBlocks(location) { 
   if (location <scuberHeadquarters){
 return scuberHeadquarters - location ;

    
}else {
    return location -scuberHeadquarters; 
}
}
console.log( distanceFromHqInBlocks(60));



function distanceFromHqInFeet(location){
     return distanceFromHqInBlocks(location)*264;
}

function distanceTravelledInFeet(start, destination){
    if(destination > start){
return ((destination - start )*264);
    } else {
        return (( start - destination )*264);
    }

}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return 0;
    }else if ( distance >400 && distance <=2000){
        return (distance-400) *0.02;

    } else if (distance>2000 && distance <=2500){
        return 25;

    } else if(distance > 2500){
        return 'cannot travel that far';
         
    }
}