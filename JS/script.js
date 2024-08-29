// Get the user name from the URL
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('name');

// Display the user name on the homepage
if (userName) {
    const userElement = document.getElementById('userName');
    userElement.textContent = userName;
}

// Validate the contact form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const jenisKelamin = document.getElementById('jenisKelamin').value;
    const message = document.getElementById('message').value;

    // Validate form data (add your own validation logic)
    if (name === '' || date === '' || jenisKelamin === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Display the submitted values
    const output = `Name: ${name}<br>Tanggal Lahir: ${date}<br>Jenis Kelamin: ${jenisKelamin}<br>Pesan: ${message}`;
    alert(output);

    // Clear the form (optional)
    contactForm.reset();
});