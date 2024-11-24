
function filterListings() {
    const region = document.getElementById("region").value;
    const listContainer = document.getElementById("accommodationList");
    listContainer.innerHTML = ""; // Clear previous results

    const accommodations = JSON.parse(localStorage.getItem("accommodations")) || [];

    const filteredListings = accommodations.filter(
        (accommodation) => region === "all" || accommodation.region === region
    );

    if (filteredListings.length === 0) {
        listContainer.innerHTML = "<p>No accommodations found.</p>";
    } else {
        filteredListings.forEach((accommodation) => {
            const listingElement = document.createElement("div");
            listingElement.classList.add("listing");
            listingElement.innerHTML = `
                <strong>${accommodation.name}</strong>
                <p>Region: ${accommodation.region}</p>
                <p>Details: ${accommodation.details}</p>
            `;
            listContainer.appendChild(listingElement);
        });
    }
}