function breakOut(array, changeValue, stopValue) {
  for(i = 0; i >= array.length; i++) {
    if(array === stopValue) {
      break;
    }
    changeValue(array[i])
  }
}