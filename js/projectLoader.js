// Fetch project data from your JSON file
fetch('projects.json')
  .then(response => response.json())
  .then(projects => {
    // Get the container where you want to add the projects
    let row = document.querySelector('.project-container');

    // Collect all unique technologies for filter options
    let technologies = new Set();

    // For each project in your data
    projects.forEach(project => {
      // Add each technology to the Set
      project.technologies.forEach(tech => technologies.add(tech));
    });

    // Add the filter options to the modal
    let filterOptions = document.getElementById('filterOptions');
    technologies.forEach(tech => {
      let option = document.createElement('input');
      option.type = "checkbox";
      option.id = tech;
      option.value = tech;

      let label = document.createElement('label');
      label.htmlFor = tech;
      label.appendChild(document.createTextNode(tech));

      filterOptions.appendChild(option);
      filterOptions.appendChild(label);
      filterOptions.appendChild(document.createElement('br'));
    });

    // Function to display the projects
    function displayProjects(filter = null) {
      // Clear the current displayed projects
      row.innerHTML = '';

      // For each project in your data
      projects.forEach(project => {
        // If a filter is applied, skip this project if it doesn't use any of the selected technologies
        if (filter && !filter.some(tech => project.technologies.includes(tech))) return;

        // Create a new div for the project
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-long-card', 'col-12');

        // Set the HTML content of the div
        projectCard.innerHTML = `
          <img src="${project.image}" alt="">
          <div class="project-details text-center">
              <h2>${project.name}</h2>
              <h3>${project.technologies.join(' / ')}</h3>
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
    }

    // Display all projects initially
    displayProjects();

    // Add event listener to the filter button
    let filterButton = document.querySelector('.filter-button');
    filterButton.addEventListener('click', () => {
      new bootstrap.Modal(document.getElementById('filterModal')).show();
    });

    // Add event listener to the "Apply" button in the modal
    let applyFilterButton = document.getElementById('applyFilter');
    applyFilterButton.addEventListener('click', () => {
      // Get the selected technologies
      let selectedTechnologies = Array.from(filterOptions.getElementsByTagName('input'))
        .filter(input => input.checked)
        .map(input => input.value);

      // Apply the filter
      displayProjects(selectedTechnologies);

      // Hide the modal
      bootstrap.Modal.getInstance(document.getElementById('filterModal')).hide();
    });
  });

