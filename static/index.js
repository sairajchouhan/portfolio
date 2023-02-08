const handleSubmit = (e) => {
  e.preventDefault();
  console.log("from handleSubmti");
  fetch(`${window.location.origin}/contact`, {
    method: "POST",
    body: JSON.stringify({
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      message: document.querySelector('textarea[name="message"]').value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);
