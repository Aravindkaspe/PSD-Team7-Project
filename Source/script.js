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
});
