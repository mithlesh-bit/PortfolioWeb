let menu=document.querySelector('#menu-icon');
// home page ka hai

let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr=ScrollReveal({
    distance:'65px',
    duration: 2600,
    delay:450,
    reset:true
});

sr.reveal('.hero-text ',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:400, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
// sr.reveal('.navlist',{delay:200, origin:'right'});
sr.reveal('.scroll-down',{delay:200, origin:'top'});

sr.reveal('#not1',{delay:200, origin:'left'});
sr.reveal('#not2',{delay:200, origin:'bottom'});
sr.reveal('#not3',{delay:200, origin:'right'});


document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('exampleInputEmail1').value;
    const photo = document.getElementById('photo').value;

    // Check if fields are filled
    if (username.trim() === '') {
      alert('are title to dalo bhyi');
      return;
    }

    if (photo.trim() === '') {
      alert('are image to dalo bhayi');
      return;
    }

    // Submit the form
    this.submit();
  });

       // JavaScript for form submissions using AJAX
       async function submitMsgForm() {
        const form = document.getElementById("msgForm");
        const formData = new FormData(form);
  
        try {
          const response = await fetch("/", {
            method: "POST",
            body: formData,
          });
  
          if (response.ok) {
            // Success: handle the successful submission, e.g., show a success message
            alert("Message sent successfully!");
          } else {
            // Error: handle the error response, e.g., show an error message
            alert("Failed to send message. Please try again.");
          }
        } catch (error) {
          // Network error or other unexpected errors
          console.error("An error occurred:", error);
          alert("An error occurred. Please try again later.");
        }
      }
  
      async function submitDetailsForm() {
        const form = document.getElementById("myForm");
        const formData = new FormData(form);
  
        try {
          const response = await fetch("/", {
            method: "POST",
            body: formData,
          });
  
          if (response.ok) {
            // Success: handle the successful submission, e.g., show a success message
            alert("Details saved successfully! ..reload the page");
          } else {
            // Error: handle the error response, e.g., show an error message
            alert("Failed to save details. Please try again.");
          }
        } catch (error) {
          // Network error or other unexpected errors
          console.error("An error occurred:", error);
          alert("An error occurred. Please try again later.");
        }
      }