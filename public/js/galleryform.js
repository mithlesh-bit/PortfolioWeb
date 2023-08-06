// // Get the button and form elements
const addButton = document.getElementById("addYoursButton");
const addForm = document.getElementById("addForm");
const dataForm = document.getElementById("dataForm");

// Show the form on button click
addButton.addEventListener("click", () => {
  addForm.classList.remove("hidden");
});



// current date for tag
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// // Hide the form when the submit button is clicked
// const submitButton = document.querySelector("#dataForm button[type='submit']");
// submitButton.addEventListener("click", () => {
//   addForm.classList.add("hidden");
// });

// // Handle form submission
// dataForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   // Get the form values
//   const name = document.getElementById("name").value;
//   const color = document.querySelector("#dataForm input[name='color']:checked").value;
//   const message = document.getElementById("message").value;

//   // Handle the form data (you can use AJAX or submit it to the server as needed)
//   console.log("Name:", name);
//   console.log("Color:", color);
//   console.log("Message:", message);

//   // Clear the form after submission
//   dataForm.reset();

//   // Send the form data to the server using fetch
//   try {
//     const response = await fetch(dataForm.action, {
//       method: 'POST',
//       body: new FormData(dataForm),
//     });

//     if (response.ok) {
//       console.log('Form submitted successfully.');
//       // Optionally, you can display a success message or update the UI here.
//     } else {
//       console.error('Form submission failed:', response.status);
//       // Optionally, handle the failure and display an error message.
//     }
//   } catch (error) {
//     console.error('Form submission error:', error);
//     // Optionally, handle the error and display an error message.
//   }
// });
