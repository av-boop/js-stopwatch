window.onload = function () {
  var sec = 00;
  var ten = 00;
  var asec = document.getElementById("sec");
  var aten = document.getElementById("ten");
  var buttonStart = document.getElementById("btn-start");
  var buttonStop = document.getElementById("btn-stop");
  var buttonreset = document.getElementById("btn-reset");
  var interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonreset.onclick = function () {
    clearInterval(interval);
    sec = "00";
    ten = "00";
    document.getElementById("ten").innerHTML = ten;
    document.getElementById("sec").innerHTML = sec;
  };

  function startTimer() {
    ten++;

    if (ten < 9) {
      aten.innerHTML = "0" + ten;
    }

    if (ten > 9) {
      aten.innerHTML = ten;
    }

    if (ten > 99) {
      console.log("seconds");
      sec++;
      asec.innerHTML = "0" + sec;
      ten = 0;
      aten.innerHTML = "0" + 0;
    }

    if (sec > 9) {
      asec.innerHTML = sec;
    }
  }
};
