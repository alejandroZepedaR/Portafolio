const section = document.getElementById('projects-section');

async function getProjects() {
    const projects = await fetchProjects();
    
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


