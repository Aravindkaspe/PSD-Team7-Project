document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('contactBtn');
    const span = document.getElementsByClassName('close')[0];
    const modalBody = document.getElementById('modal-body');

    btn.onclick = function() {
        fetch('contact.html')
            .then(response => response.text())
            .then(data => {
                modalBody.innerHTML = data;
                modal.style.display = 'block';
                bindFormSubmit(); // Bind the form submit after loading
            })
            .catch(error => console.log('Error loading the contact form:', error));
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function bindFormSubmit() {
        const form = document.getElementById('contactForm');
        form.onsubmit = function(event) {
            event.preventDefault();

            const formData = {
                firstName: form.firstname.value,
                lastName: form.lastname.value,
                email: form.email.value,
                phone: form.phone.value,
            };

            fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Success:', data);
                modal.style.display = 'none';
                alert('Contact form submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting the form. Please try again.');
            });
        };
    }
});
