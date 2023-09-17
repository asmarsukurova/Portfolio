const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const ulList = document.querySelector(".ul-list");

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function getUsers() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            listData(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

function listData(users) {
    ulList.innerHTML = ""; 
    for (const user of users) {
        const liData = document.createElement("li");
        liData.textContent = `Name: ${user.name}, Email: ${user.email}`;
        ulList.appendChild(liData);
    }
}

searchButton.addEventListener("click", () => {
    const valueData = searchInput.value.toLowerCase();
    getUsers();
});


searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        getUsers();
    }
});
