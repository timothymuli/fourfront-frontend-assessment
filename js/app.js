var lastOpened = "";

var form = document.getElementById("infoForm");
var emailInput = document.getElementById("emailInput");
var msg = document.getElementById("formMsg");
var detailsBox = document.getElementById("detailsBox");

var foundation = document.getElementById("foundationDesc");
var economy = document.getElementById("economyDesc");
var plus1 = document.getElementById("plus1");
var plus2 = document.getElementById("plus2");

var foundationBtn = document.getElementById("foundationBtn");
var economyBtn = document.getElementById("economyBtn");

if (foundationBtn) {
  foundationBtn.addEventListener("click", function () {
    lastOpened = "foundation";
  });
}

if (economyBtn) {
  economyBtn.addEventListener("click", function () {
    lastOpened = "economy";
  });
}

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

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var email = emailInput.value;

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
      msg.textContent = "Please enter a valid email.";
      msg.className = "small mt-2 err";
      detailsBox.style.display = "none";
      detailsBox.innerHTML = "";
      return;
    }

    if (lastOpened === "") {
      msg.textContent = "Open a membership first, then click Send.";
      msg.className = "small mt-2 err";
      detailsBox.style.display = "none";
      detailsBox.innerHTML = "";
      return;
    }

    msg.textContent = "Thanks Timothy Muli! Details for " + email + " are shown below.";
    msg.className = "small mt-2 ok";

    detailsBox.style.display = "block";

    if (lastOpened === "foundation") {
      detailsBox.innerHTML =
        "<b>Foundation Membership</b><br>" +
        "Email: " + email + "<br><br>" +
        "- Shares + Mansa-X global fund<br>" +
        "- Online service is free<br>" +
        "- Office visit may have extra charges<br><br>" +
        "Support: timothymuthini@proton.me";
    }

    if (lastOpened === "economy") {
      detailsBox.innerHTML =
        "<b>Economy Membership</b><br>" +
        "Email: " + email + "<br><br>" +
        "- Guaranteed rate via Mansa-X global fund<br>" +
        "- Online service is free<br>" +
        "- Office visit may have extra charges<br><br>" +
        "Support: timothymuthini@proton.me";
    }
  });
}