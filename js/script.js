var link = document.querySelector(".contacts-modal");

var modal = document.querySelector(".modal-contact-us");
var close = modal.querySelector(".modal-close");

var form = modal.querySelector("form");
var userName = modal.querySelector("[name=user-name]");
var email = modal.querySelector("[name=e-mail]");
var message = modal.querySelector("[name=message]");

var storageName = localStorage.getItem("userName");
var storageEmail = localStorage.getItem("email");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");

    if (storageName) {
      userName.value = storageName;
      email.focus();
    } else {
      userName.focus();
    }

    if (storageEmail) {
      email.value = storageEmail;
      message.focus();
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !message.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("email", email.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
