//JavaScript for Drill motors Website



// Form Validation for Contact Page
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const idNumber = document.getElementById("number").value;
    const carName = document.getElementById("text").value;
    const password = document.getElementById("pass").value;

    if (!name || !email || !idNumber || !carName || !password) {
        alert("Please fill in all required fields.");
        return false;
    }

    //Function to clear input fields when clicked
    function clearField(field){
        field.addEventListener('focus',()=>
    {
        if (field.value===field.defaultValue){
            field.value='';
        }
      });    
    }

    // Apply the clearField function to inputs
       clearField(nameInput);
       clearField(emailInput);
       clearField(messageInput);

// Function to validate the form before submission
function validateForm(event) {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill out all required fields.');
        event.preventDefault(); // Prevent form submission
    }
}

// Attach validation to the form
document.getElementById('contact-form').addEventListener('submit', validateForm);

    // Basic email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    alert("Form submitted successfully!");
    return true;
}

// Attach form validation to the submit button
document.querySelector("button[type=submit]").addEventListener("click", function (event) {
    event.preventDefault();  // Prevent default form submission
    validateForm();
});

// Search Function for Topnav Search
function searchContent() {
    const input = document.querySelector(".topnav input[type=text]").value.toLowerCase();
    const dealsText = document.querySelectorAll(".deals-section p");

    dealsText.forEach((paragraph) => {
        if (paragraph.innerText.toLowerCase().includes(input)) {
            paragraph.style.display = "block";
        } else {
            paragraph.style.display = "none";
        }
    });
}

// Attach search function to search icon
document.querySelector(".fas.fa-search").addEventListener("click", searchContent);

// Deals Toggle for Additional Info
function toggleDealsInfo() {
    const extraInfo = document.getElementById("extraInfo");
    if (extraInfo.style.display === "none" || !extraInfo.style.display) {
        extraInfo.style.display = "block";
    } else {
        extraInfo.style.display = "none";
    }
}

// Apply toggle functionality on page load (Deals page)
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Show More Deals Info";
    toggleButton.addEventListener("click", toggleDealsInfo);
    document.querySelector("h3").appendChild(toggleButton);

    // Create the hidden deals section
    const extraInfo = document.createElement("div");
    extraInfo.id = "extraInfo";
    extraInfo.style.display = "none";
    extraInfo.innerHTML = "<p>Get ready for even bigger savings with our upcoming seasonal deals! Stay tuned for more...</p>";
    document.querySelector("body").appendChild(extraInfo);
});


// poescript.js
function displayDateStamp() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('dateStamp').textContent = dateString;
}

// Call the function to display date stamp on page load
window.onload = displayDateStamp;
