
 
var contact = document.getElementById("contact-info")

contact.addEventListener("submit",async function(e) {
    e.preventDefault();
    var name = document.getElementById("name-input").value;
    var email = document.getElementById("email-input").value;
    var phone = document.getElementById("phone-input").value;
    var serv = document.getElementById("service-select").value;

    if (phone == "") phone = "N/A";

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "juquique11@gmail.com",
        Password : "F6ED31FE3B2A404578B54C86EBC4D1A6B44B",
        To : "oficial@stackzpr.com",
        From : email,
        Subject : "Interes de Negocio de " + name,
        Body : "<h1>Informacion</h1> <h2>Nombre: " + name + "</h2><h2>Email: " + email + "</h2> <h2> Phone #: " + phone + "</h2> <h2>Sevice Required: " + serv + "</h2>"
    }).then(
      message => alert(message)
    

    );
    
})



