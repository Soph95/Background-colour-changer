document.querySelector("button").addEventListener("click", function() {

  var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  var hexNo = [];

  for (var i = 0; i < 6; i++) {
    var randomHex = Math.floor(Math.random() * 16);
    hexNo.push(hexValues[randomHex]);
    var hex = hexNo.join("");
    hex = "#" + hex;
    document.querySelector("body").style.backgroundColor = hex;
    document.querySelector("h1").innerHTML = hex;
  }
});
