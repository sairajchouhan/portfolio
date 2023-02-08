const handleSubmit = (e) => {
  e.preventDefault();
  console.log("from handleSubmti");

  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');
  const button = document.querySelector('button[type="submit"]');

  // disable the button
  button.disabled = true;
  button.innerText = "Submiting...";
  button.style.opacity = 0.5;

  fetch(`${window.location.origin}/contact`, {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      message: message.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(() => {
      name.value = "";
      email.value = "";
      message.value = "";

      show_message({
        message: "Thank you for contacting",
        type: "success",
      });
    })
    .catch(() => {
      show_message({
        message: "Something went wrong",
        type: "error",
      });
    })
    .finally(() => {
      button.disabled = false;
      button.innerText = "Submit";
      button.style.opacity = 1;
    });
};

/**
 *
 * @param {String} message
 * @param {'success' | 'error'} type
 */
const show_message = ({ message, type }) => {
  const toast_container = document.querySelector(".toast");

  const p = document.createElement("p");
  p.innerText = message;
  p.classList.add(`toast_${type}`);

  toast_container.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 5000);
};

const form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);
