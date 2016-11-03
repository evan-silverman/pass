function pass(n) {
  var s = ""; //  storing string
  for (var i = 1; i <= n; i++){ //  loops n times
    s += String.fromCharCode(Math.floor((Math.random() * 89) + 33)); //  stores the ascii character from its decimal 
  }
  return s;
}
onEvent("pass", "click", function() {
  setText("pass_end", pass(getText("num_length")));
});
