var payloadScr = "https://raw.githubusercontent.com/lordfriky/test/master/fusee-primary.bin";

document.getElementById('payloadPath').innerHTML = payloadScr;

function logOutput(...message) {
  document.getElementById("output").value += message.join(" ");
}

logOutput("Trying to get payload...\n");
var startTime = new Date().getTime();

var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", payloadScr, true);
xmlhttp.responseType = "arraybuffer";

xmlhttp.onload = function (oEvent) {
  var loadTime = new Date().getTime() - startTime;
  logOutput("Got payload! Took " + loadTime + " ms.\nLogging payload bytes...\n");
  var arrayBuffer = xmlhttp.response;
  if (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteArray.byteLength; i++) {
      var byteHex = byteArray[i].toString(16);
      logOutput("0x" + byteHex + ", ");
    }
  }
};

xmlhttp.onerror = function () {
  logOutput("Failed to get payload data.");
};

xmlhttp.send(null);
