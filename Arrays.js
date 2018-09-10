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

