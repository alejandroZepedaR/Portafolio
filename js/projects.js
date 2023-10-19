const section = document.getElementById('projects-section');

async function getProjects() {
    const projects = await fetchProjects();
    renderProjects(projects);
}

function renderProjects(projects){
    projects.forEach(project =>{
        const projectCard = document.createElement('article');
        projectCard.className = "project-card";
        projectCard.innerHTML = `
            <div class="project-card-img">
                <img src=${project.image} alt=${project.name}>
            </div>
            <div class="project-card-info">
                <h2>${project.name}</h2>
                <p>${project.description}</p>
                <div class="buttons-div">
                    <a class="btn btn-primary" href=${project.projectPage} target="_blank">Visit</a>
                    <button class="btn btn-secondary" id="button-${project.id}" >More Details</button>
                </div>
            </div>
            `
        section.appendChild(projectCard);
        let buttonID = "button-"+project.id;
        let button = document.getElementById(buttonID);

        button.addEventListener('click', ()=>{
            alert("Sorry I'm still working on this feature");
        })
    })
}




async function fetchProjects() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProjects();


