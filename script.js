document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
});

document.getElementById('learn-more').addEventListener('click', function() {
    const info = document.getElementById('more-info');
    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
});
const directory = [
    { name: "John Doe", firm: "Doe Law Firm", specialty: "Criminal Law" },
    { name: "Jane Smith", firm: "Smith & Associates", specialty: "Family Law" },
    { name: "Michael Brown", firm: "Brown Legal", specialty: "Corporate Law" },
    // Add more lawyers and law firms here
];

const directoryList = document.getElementById('directory');
const searchInput = document.getElementById('search');

function renderDirectory(items) {
    directoryList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'directory-item';
        li.innerHTML = `<h2>${item.name}</h2><p>${item.firm}</p><p>${item.specialty}</p>`;
        directoryList.appendChild(li);
    });
}

function filterDirectory(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredItems = directory.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.firm.toLowerCase().includes(searchTerm) ||
        item.specialty.toLowerCase().includes(searchTerm)
    );
    renderDirectory(filteredItems);
}

searchInput.addEventListener('input', filterDirectory);

// Initial render
renderDirectory(directory);
