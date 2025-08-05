const from = document.getElementById('email');
const subject = document.getElementById('subject');
const body = document.getElementById('message');
const submit = document.getElementById('submit');

submit.addEventListener("click", getRessourcesFromMail);

function getRessourcesFromMail(){
    mail(from.value, subject.value, body.value)
        .then((response) => {
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "loris.bord23@gmail.com",
                Password : "CDB6F4B82AC1BA87CB059EC9872C508AD9E5",
                To : response.from,
                From : "loris.bord23@gmail.com",
                Subject : response.subject,
                Body : response.body
            })
            document.getElementById("messageSend").style.display = "block";
        });
}


async function mail(email, subject, message){
    let URL = `../Portfolio/forms/contact.php`;
    return (await fetch(URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${email}&subject=${subject}&message=${message}`
    })).json();
}
