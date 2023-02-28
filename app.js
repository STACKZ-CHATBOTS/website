
 
var contact = document.getElementById("contact-info")

contact.addEventListener("submit",async function(e) {
    e.preventDefault();
    var phone = document.getElementById("phone-input").value;

    if (phone == "") {
      document.getElementById("phone-input").value = "N/A";
    }
    emailjs.sendForm('stackz_contacts', 'contact_form', this)
    .then(function() {
        console.log('SUCCESS!');
        Myalert("Thank You, We'll contact you shortly")
        contact.reset();
        document.getElementById("head").scrollIntoView({behavior:"auto",block:"end"})
    }, function(error) {
        console.log('FAILED...', error);
    });
});
    

function Myalert(msg) {
  $.bootstrapGrowl(msg, {
      type: "success",
      align: "center",
      position: "stickt-top",
      delay: 3000,
      allow_dismiss: false,
      stackup_spacing: 10
  });
}


