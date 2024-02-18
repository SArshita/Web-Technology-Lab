document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    const apiUrl = '';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const tableBody = document.getElementById('table-body');

    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
        `;
        tableBody.appendChild(row);
    });
}
