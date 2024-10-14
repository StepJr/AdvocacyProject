//Function called on submit

const printName = (event) => {
  const name = document.getElementById('name').value;
  const hometown = document.getElementById('hometown').value;


  if (name.length < 2 || hometown.length < 5) {
    console.log("Name should contain at least 2 characters and hometown should contain at least 5 characters.");

    nameInput.style.border = '2px solid red';
    hometownInput.style.border = '2px solid red';
    return;
  }

  const petitionSig = document.querySelector('.petition-sig');
  const supportMessage = `🖊️ ${name} from ${hometown} supports this.`;

  const newSupportMessage = document.createElement('p');
  newSupportMessage.textContent = supportMessage;

  petitionSig.appendChild(newSupportMessage);

  event.preventDefault();
}

const printEmail = (event) => {

  const email = document.getElementById('email');
  alert(email.value + ' submitted this form.');
  event.preventDefault();
}

//select form element

const form = document.getElementById('myform');

// Add a submit event listener to the form
form.addEventListener('submit', printName);

//validate form
const validateForm = (event) => {
  event.preventDefault();
  let isFormValid = true;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const hometownInput = document.getElementById('hometown');

  const name = nameInput.value; // Store the name value in a separate variable
  const email = emailInput.value;
  const hometown = hometownInput.value;

  if (name.length < 2) {
    console.log("Name should contain at least 2 characters.");
    nameInput.style.border = '2px solid red';
    isFormValid = false;
  } else {
    nameInput.style.border = '2px solid transparent'; // Reset border if criteria met
  }

  if (email.length < 8 || (!email.includes('.com') && !email.includes('.org'))) {
    console.log("Email should contain at least 8 characters and include '.com' or '.org'.");
    emailInput.style.border = '2px solid red';
    isFormValid = false;
  } else {
    emailInput.style.border = '2px solid transparent'; // Reset border if criteria met
  }

  if (hometown.length < 5) {
    console.log("Hometown should contain at least 5 characters.");
    hometownInput.style.border = '2px solid red';
    isFormValid = false;
  } else {
    hometownInput.style.border = '2px solid transparent'; // Reset border if criteria met
  }

  if (!isFormValid) {
    // ...
  } else {
    console.log('Form is valid. Proceed with submission.');
    // Clear form fields after submission
    nameInput.value = '';
    emailInput.value = '';
    hometownInput.value = '';

    // Call the toggleModal function after successful form submission
    toggleModal(name); // Pass the stored name value to toggleModal
  }
}

form.addEventListener('submit', validateForm);

//modal
const toggleModal = (name) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.querySelector("#thanks-modal .modal-content");

  modal.style.display = 'flex';
  modalContent.querySelector('#modal-text-container p').textContent = `Thank you for supporting, ${name}!`;

  // Set a timeout to hide the modal after 4 seconds (4000 milliseconds)
  setTimeout(() => {
    modal.style.display = 'none';
  }, 4000);

  // Start the image scaling animation
  const scaleInterval = setInterval(scaleImage, 500);

  // Stop the animation when the modal is hidden
  setTimeout(() => {
    clearInterval(scaleInterval);
  }, 4000);
}