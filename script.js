document.addEventListener("DOMContentLoaded", function () {
  var countDownElement = document.getElementById("count_down");

  setTimeout(function () {
    countDownElement.innerHTML = "10";
    setTimeout(function () {
      countDownElement.innerHTML = "9";
      setTimeout(function () {
        countDownElement.innerHTML = "8";
        setTimeout(function () {
          countDownElement.innerHTML = "7";
          setTimeout(function () {
            countDownElement.innerHTML = "6";
            setTimeout(function () {
              countDownElement.innerHTML = "5";
              setTimeout(function () {
                countDownElement.innerHTML = "4";
                setTimeout(function () {
                  countDownElement.innerHTML = "3";
                  setTimeout(function () {
                    countDownElement.innerHTML = "2";
                    setTimeout(function () {
                      countDownElement.innerHTML = "1";
                      setTimeout(function () {
                        countDownElement.innerHTML = "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
