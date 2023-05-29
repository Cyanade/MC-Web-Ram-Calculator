function calculateRAM() {
  var version = parseFloat(document.getElementById("mc-version").value);
  var players = parseFloat(document.getElementById("num-players").value);
  var plugins = parseFloat(document.getElementById("num-plugins").value);
  var ram = 1 + (players * 0.10) + (plugins * 0.10) + (version) - .2;
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Recommended System RAM: " + ram + " GB";
}
