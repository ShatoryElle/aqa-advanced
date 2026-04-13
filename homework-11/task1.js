function printWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printWithDelay("Смачної Паски!", 1000);