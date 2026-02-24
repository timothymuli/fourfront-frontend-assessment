// simple email validation
var form = document.getElementById("infoForm");
var emailInput = document.getElementById("emailInput");
var msg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = emailInput.value;

    // very basic checks
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      msg.textContent = "Please enter a valid email.";
      msg.className = "small mt-2 err";
      return;
    }

    msg.textContent = "Email received. Membership details will be sent.";
    msg.className = "small mt-2 ok";
  });
}

// plus/minus toggle for collapse
var foundation = document.getElementById("foundationDesc");
var economy = document.getElementById("economyDesc");
var plus1 = document.getElementById("plus1");
var plus2 = document.getElementById("plus2");

if (foundation) {
  foundation.addEventListener("shown.bs.collapse", function () {
    plus1.textContent = "−";
  });

  foundation.addEventListener("hidden.bs.collapse", function () {
    plus1.textContent = "+";
  });
}

if (economy) {
  economy.addEventListener("shown.bs.collapse", function () {
    plus2.textContent = "−";
  });

  economy.addEventListener("hidden.bs.collapse", function () {
    plus2.textContent = "+";
  });
}