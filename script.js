// scripts.js
document.getElementById('majorSelectionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const interests = document.getElementById('interests').value;
    const abilities = document.getElementById('abilities').value;
    const marketability = document.getElementById('marketability').value;

    // Simple logic to suggest majors (you can expand this)
    let suggestedMajors = [];
    if (interests.includes("technology") && abilities.includes("math")) {
        suggestedMajors.push("Computer Science");
    }
    if (interests.includes("solving problems") && abilities.includes("communication")) {
        suggestedMajors.push("Business Administration");
    }
    if (marketability === "3") {
        suggestedMajors.push("Engineering");
    }

    // Display results
    const resultsSection = document.getElementById('resultsSection');
    const suggestedMajorsList = document.getElementById('suggestedMajors');
    suggestedMajorsList.innerHTML = ''; // Clear previous results

    if (suggestedMajors.length > 0) {
        suggestedMajors.forEach(major => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = major;
            suggestedMajorsList.appendChild(li);
        });
        resultsSection.style.display = 'block';
    } else {
        alert("No majors found based on your input. Please try different criteria.");
    }
});