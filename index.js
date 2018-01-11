function breakOut(array, changeValue, stopValue) {
  for(i = 0; i >= array.length; i++) {
    if(array[i] === stopValue) {
      break;
    }
    changeValue(array[i])
  }
}
