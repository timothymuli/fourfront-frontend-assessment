// membership toggle
(function () {
  var btns = document.querySelectorAll(".member-btn");

  function closeAll() {
    document.querySelectorAll(".member-desc").forEach(function (d) {
      d.classList.remove("show");
    });
    btns.forEach(function (b) {
      var c = b.querySelector(".chev");
      if (c) c.textContent = "+";
    });
  }

  btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var sel = btn.getAttribute("data-target");
      var panel = document.querySelector(sel);
      if (!panel) return;

      var open = panel.classList.contains("show");
      closeAll();

      if (!open) {
        panel.classList.add("show");
        var c = btn.querySelector(".chev");
        if (c) c.textContent = "−";
      }
    });
  });
})();

// simple email validation
(function () {
  var form = document.getElementById("infoForm");
  var emailInput = document.getElementById("emailInput");
  var msg = document.getElementById("formMsg");

  function setMsg(text, type) {
    msg.textContent = text;
    msg.className = "small mt-2 " + (type || "");
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var v = (emailInput.value || "").trim();
    if (v.length < 5 || v.indexOf("@") === -1) {
      setMsg("Please enter a valid email.", "error");
      return;
    }

    setMsg("Email received.", "ok");
    form.reset();
  });
})();