function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("visitorName").value;
    const email = document.getElementById("visitorEmail").value;
    const message = document.getElementById("visitorMessage").value;
    const responseDiv = document.getElementById("responseMessage");

    responseDiv.style.display = "block";
    responseDiv.style.color = "#1976d2";
    responseDiv.innerText = "AI \uC5D0\uC774\uC804\uD2B8\uAC00 \uC9C8\uBB38\uC744 \uBD84\uC11D \uC911\uC785\uB2C8\uB2E4... \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694.";

    const makeWebhookUrl = "https://hook.eu1.make.com/rd4amt948q6q6tcq6jvbw9ldzttxvzwp@hook.eu1.make.com";

    try {
      const response = await fetch(makeWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          visitor_name: name,
          visitor_email: email,
          visitor_message: message
        })
      });

      if (response.ok) {
        responseDiv.style.color = "#188038";
        responseDiv.innerText = "\uC9C8\uBB38\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4! \uC785\uB825\uD558\uC2E0 \uBA54\uC77C\uB85C AI\uC758 \uB2F5\uBCC0\uC774 \uACE7 \uBC1C\uC1A1\uB429\uB2C8\uB2E4.";
        contactForm.reset();
      } else {
        throw new Error("Server response failed");
      }
    } catch (error) {
      responseDiv.style.color = "#d93025";
      responseDiv.innerText = "\uC811\uC218 \uC911 \uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.";
    }
  });
}
