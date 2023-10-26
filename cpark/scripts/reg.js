const submitForm = () => {
  event.preventDefault();

  window.location.href = "./success.html";
};

const submitOrgForm = () => {
  event.preventDefault();
  alert("Our team will get back to you at the mentioned email address!");

  window.location.href = "../index.html";
};
