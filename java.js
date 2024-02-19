document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.escuelajs.co/api/v1/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error('Error fetching users:', error));
});

function displayUsers(users) {
    const userList = document.getElementById('userList');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `
            <div class="d-flex">
                <img src="${user.avatar}" alt="${user.name}" class="mr-3 rounded-circle" style="width: 50px; height: 50px;">
                <div>
                    <h5>${user.name}</h5>
                    <p>Email: ${user.email}</p>
                    <p>Password: ${user.password}</p>
                </div>
            </div>
        `;

        userList.appendChild(listItem);
    });
}
