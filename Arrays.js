const musketeers = ["Athos", "Porthos", "Aramis"];

for ( i=0; i< musketeers.length; i++){
    console.log(musketeers[i]);}

musketeers.push("D'Artagnan")
console.log(musketeers[musketeers.length -1]);

musketeers.forEach(myElement => {
    console.log(`For Loop ${myElement}`)});

    musketeers.splice(2,1);
   // console.log (musketeers);
   
   let ofMusketeers;
   for (ofMusketeers of musketeers);{
    console.log(ofMusketeers);
}

const values = [3, 11, 7, 2, 9, 10];
var sum = 0;
for (var i = 0; i < values.length; i++) {
  sum += values[i]
}
console.log (sum);

const sums = [3, 11, 7, 2, 9, 10];
var  max = 0;
for(var i = 0; i<sums.length; i++){
    if ( sums [i] > max){
        max = sums[i];
    }
}
console.log (max);
