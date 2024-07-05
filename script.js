document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const data = new FormData(form);
    
    fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.style.display = 'none';
            document.getElementById('thank-you-message').style.display = 'block';
        } else {
            response.json().then(data => {
                if (data.hasOwnProperty('errors')) {
                    alert(data.errors.map(error => error.message).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
            });
        }
    }).catch(error => {
        alert("Oops! There was a problem submitting your form");
    });
});

// Update the year in the footer
document.getElementById('year').textContent = new Date().getFullYear();
