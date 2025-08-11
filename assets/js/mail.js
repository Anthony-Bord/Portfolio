const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submit = document.getElementById('submit');
const form = document.getElementById('contactForm'); // si tu as un <form id="contactForm">

submit.addEventListener('click', async (e) => {
    e.preventDefault(); // évite le reload
    try {
        await emailjs.send("service_gn9kaq9", "template_rktdn3s", {
            from_email: emailInput.value,
            subject: subjectInput.value,
            message: messageInput.value
        });
        document.getElementById("messageSend").style.display = "block";
    } catch (err) {
        console.error(err);
        alert("Envoi impossible pour le moment.");
    }
});
