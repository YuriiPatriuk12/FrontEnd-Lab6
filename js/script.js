const peopleNumber = 4;

function fetchUsers() {
    fetch(`https://randomuser.me/api/?results=${peopleNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data.results);
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}
  
function displayUsers(users) {
    const container = document.getElementById('user-container');
    
    if(container.hasChildNodes())
        container.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user-item');
      
        userElement.innerHTML = `
            <img src="${user.picture.medium}" alt="User Picture">
            <div>
                <p><strong>Country:</strong> ${user.location.country}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Coordinates:</strong> Latitude: ${user.location.coordinates.latitude}, Longitude: ${user.location.coordinates.longitude}</p>
            </div>
            `;

        container.appendChild(userElement);
    });
}
