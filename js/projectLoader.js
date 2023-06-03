// Fetch project data from your JSON file
fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    // Get the container where you want to add the projects
    let row = document.querySelector('.project-container');

    // For each project in your data
    projects.forEach(project => {
      // Create a new div for the project
      let projectCard = document.createElement('div');
      projectCard.classList.add('project-long-card', 'col-12');

      // Convert the technologies array into a string
      let technologies = project.technologies.join(' / ');

      // Set the HTML content of the div
      projectCard.innerHTML = `
        <img src="${project.image}" alt="">
        <div class="project-details text-center">
            <h2>${project.name}</h2>
            <h3>${technologies}</h3>
        </div>
        <div class="project-description">
            <p>${project.description}</p>
        </div>
      `;

      // Add click event listener to the card
      projectCard.addEventListener('click', () => {
        window.open(project['project-page'], '_blank');
      });

      // Add the new div to the container
      row.appendChild(projectCard);
    });
  });
