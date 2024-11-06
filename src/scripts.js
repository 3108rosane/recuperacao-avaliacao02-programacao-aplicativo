alert("JAVASCRIPT CONECTADO COM HTML")

const developerForm = document.getElementById('developerForm');
const developerList = document.getElementById('developerList');


function createDeveloperItem(name, technologies, bio, github, image) {
    const li = document.createElement('li');
    li.classList.add('developer-item');

    
    const imgSrc = image || 'https://th.bing.com/th/id/OIP.-4Ln6HfBRimiz3NWQ7KzAgHaEv?rs=1&pid=ImgDetMain';
    
    li.innerHTML = `
        <div class="dev-info">
            <img src="${imgSrc}" alt="Foto de ${name}">
            <div>
                <strong>${name}</strong><br>
                <em>Tecnologias: ${technologies}</em><br>
                <p>${bio}</p>
                <a href="https://github.com/${github}" target="_blank">GitHub: ${github}</a>
            </div>
        </div>
        <button class="remove-btn" onclick="removeDeveloper(this)">Remover</button>
    `;
    
    developerList.appendChild(li);
}

function removeDeveloper(button) {
    const li = button.closest('li');
    developerList.removeChild(li);
}

developerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const technologies = document.getElementById('technologies').value;
    const bio = document.getElementById('bio').value;
    const github = document.getElementById('github').value;
    const image = document.getElementById('image').value;

    createDeveloperItem(name, technologies, bio, github, image);

   
});
