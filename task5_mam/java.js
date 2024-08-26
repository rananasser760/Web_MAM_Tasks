function saveData() {
    const form = document.getElementById('myForm');
    
    const name = form.elements['name'].value;
    const birthdate = form.elements['birthdate'].value;
    
    const languages = Array.from(form.elements['programming_languages'])
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    const newEntry = {
        name: name,
        birthdate: birthdate,
        programming_languages: languages
    };

    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    entries.push(newEntry);

    localStorage.setItem('entries', JSON.stringify(entries));
    
    form.reset();
}



function displayData() {
    
    const entries = JSON.parse(localStorage.getItem('entries')) || [];
    const resultDiv = document.getElementById('result');
    document.getElementById("entered_data").innerHTML = "<strong>Entered Data: </strong>"
    resultDiv.innerHTML = entries.map((entry, index) => `
        <div>
            <p><strong>Data Number ${index + 1}:</strong></p>
            <p>Name: ${entry.name || ' '}</p>
            <p>Birthdate: ${entry.birthdate || ' '}</p>
            <p>Programming Languages: ${entry.programming_languages.length ? entry.programming_languages.join(', ') : ' '}</p>
            <br>
        </div>
    `).join('');
}
