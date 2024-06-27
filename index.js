var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        fetch('https://ticket-booking-site-production.up.railway.app/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, message })
        })
        .then(response => response.json())
        .then(data => {
            alert(`Thanks ${name}, we will contact you soon!`);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again later.');
        });
    } else {
        alert('Please fill out all fields.');
    }
});

document.querySelector("#home button").addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
