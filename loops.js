function forLoop(array){

  for(let i =0; i<25;i++){

if(i===1){
 array.push ("I am "+ i +" strange loop.")
}

else{
  array.push ("I am "+ i +" strange loops.")
}

//    (i===1)?array[i] = `I am ${i} strange loop.`:array[i] = `I am ${i} strange loops.`
  }

return array
}

function whileLoop(num){

  while(num!=0){
    console.log(--num);
  }
 return "done"
}

function doWhileLoop(array){
  do{
      array.pop();
  }while((maybeTrue() && array.length >0))
  return array;


}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
