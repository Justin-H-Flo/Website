
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
  const publicKey = "gkaychQnkQJvfXy8P";
  const serviceID = "service_zwon416";
  const templateID = "template_eiunwgm";

  emailjs.send(serviceID, templateID, params)
 .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("your message sent successfully");
      }
 )
 .catch((err) => console.log(err));
}

const contactForm= document.querySelector("#contact-form");
const submitbtn= document.querySelector(".submit-btn");
const nameInput= document.querySelector("#user_name");
const emailInput= document.querySelector("#user_email");
const messageInput = document.querySelector("#message");

emailjs.init(publicKey);

