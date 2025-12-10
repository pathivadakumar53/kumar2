/* Place your JavaScript in this file */
 function sendEmail() {
      var name = document.getElementById("nameInput").value;
      document.getElementById("result").innerHTML = name;

      emailjs.send("service_kc18kss", "template_gt7q4oj", {
        from_name: name  // MUST match {{name}} in EmailJS template
      })
      .then(function() {
        alert("Name sent successfully!");
      }, function(error) {
        alert("Failed to send: " + error.text);
      });
    }
