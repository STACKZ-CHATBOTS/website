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
        Username : "oficial@stackzpr.com",
        Password : "Millonarios2023",
        To : 'juquique11@gmail.com',
        From : "juquique11@gmail.com",
        Subject : "Bussiness Iinterest from " + name,
        Body : "<h1>Hello</h1> <h2>Name is: " + name + "</h2>"
    }).then(
      message => alert(message)
    );
})