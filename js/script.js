/* step 2, 
focusing the name field on page load*/
const nameField = document.querySelector("#name");
nameField.focus();

// step 3: hiding other job role input
const otherJobRole = document.querySelector("#other-job-role");
otherJobRole.style.display = "none";

//added event listener to show or hide other job roles input, when other title is selected
const jobRole = document.querySelector("#title");
jobRole.addEventListener('change', (event) => {
    const selected = event.target.value;
    if (selected === "other") {
        otherJobRole.style.display = "block";

    } else {
        otherJobRole.style.display = "none";
    }

})

// step 4: hiding the color field
const color = document.querySelector("#color");
color.disabled = true;

//helper function to hide or show
const showHideColors = (options, command) => {
    options.forEach((op) => {
        op.hidden = command;
    })
}

// show or hide colors based on selected theme
const design = document.querySelector("#design");
design.addEventListener('change', (event) => {
    const selected = event.target.value;
    color.disabled = false;

    let hearts = document.querySelectorAll('#color option[data-theme="heart js"]');
    let puns = document.querySelectorAll('#color option[data-theme="js puns"]');

    if (selected === "js puns") {
        showHideColors(hearts, true);
        showHideColors(puns, false);
        puns[0].selected = true;

    } else if (selected === "heart js") {
        showHideColors(puns, true);
        showHideColors(hearts, false);
        hearts[0].selected = true;
    }

})

// step 5: activties variable to select an element by using activties id
const activities = document.querySelector("#activities");
let totalCost = 0;
activities.addEventListener('change', (event) => {
    if (event.target.type === "checkbox") {

        // added + to convert string into a number for the cost
        let cost = +event.target.dataset.cost;


        //if target checked cost will increase
        if (event.target.checked) {
            totalCost = totalCost + cost;
        } else {
            totalCost = totalCost - cost;
        }
        const activitiesCost = document.querySelector("#activities-cost");
        activitiesCost.innerText = `Total: $${totalCost}`;
    }

})

//step 6
//undefined variable
let selectedPayment;

//disbale when page load
document.querySelector('#paypal').style.display = "none";
document.querySelector('#bitcoin').style.display = "none";

const paymentMethod = document.querySelector('#payment');
paymentMethod.value = 'credit-card';
paymentMethod.addEventListener('change', (event) => {

    //disbaling all payment options 
    document.querySelector('#credit-card').style.display = "none";
    document.querySelector('#paypal').style.display = "none";
    document.querySelector('#bitcoin').style.display = "none";

    //enable payment options slecetd based on id
    document.querySelector(`#${event.target.value}`).style.display = "block";

    //updating slecetedPayment with selcted value from payments
    selectedPayment = event.target.value;
})

//step 7

const validateName = () => {
    //checking to see if there is extra spaces
    if (!nameField.value || (nameField.value.trim() !== nameField.value)) {
        return false;
    } else {
        return true;
    }
}


const validateEmail = () => {
    //Valid format to see if email contains @ and .
    const format = /^[^@]+@[^@.]+\.[a-z]+$/
    const email = document.querySelector('#email').value;
    if (email.match(format)) {
        return true;
    } else {
        return false;
    }
}

const validateRegister = () => {
    //select all inputs belonging to activties box
    const checkboxes = document.querySelectorAll('#activities-box input');
    for (let i = 0; i < checkboxes.length; i++) {

        const input = checkboxes[i];

        if (input.checked || totalCost > 0) {
            return true;
        } else {
            return false;
        }

    }
}

const validateCcNum = () => {
    const ccNumber = document.querySelector('#cc-num').value;
    return /^(\d{13,16})$/.test(ccNumber);
  };

const validateZip = () => {
    const zip = document.querySelector('#zip').value;
    return /^(\d{5})$/.test(zip);
  };
    
const validateCvv = () => {
    const cvv = document.querySelector('#cvv').value; {
        return /^(\d{3})$/.test(cvv);
  };
}


//step 9 visual validation errors

const validate = () => {
    let isValid = true;

    if (!validateName()) {
        nameField.parentElement.classList.add('not-valid');
        nameField.parentElement.classList.remove('valid');
        nameField.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        nameField.parentElement.classList.remove('not-valid');
        nameField.parentElement.classList.add('valid');
        nameField.nextElementSibling.style.display = "none";
    }
    if (!validateEmail()) {
        const email = document.querySelector('#email');
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        const email = document.querySelector('#email');
        email.parentElement.classList.remove('not-valid');
        email.parentElement.classList.add('valid');
        email.nextElementSibling.style.display = "none";

    }
    if (!validateRegister()) {
        activities.classList.add('not-valid');
        activities.classList.remove('valid');
        document.querySelector('#activities .hint').style.display = "block";
        isValid = false;
    } else {
        activities.classList.remove('not-valid');
        activities.classList.add('valid');
        document.querySelector('#activities .hint').style.display = "none";

    }
    if (document.querySelector('#payment').value === 'credit-card') {
        if (!validateCcNum()) {
            const ccNumber = document.querySelector('#cc-num');
            ccNumber.parentElement.classList.add('not-valid');
            ccNumber.parentElement.classList.remove('valid');
            ccNumber.nextElementSibling.style.display = "block";
            isValid = false;
        } else {
            const ccNumber = document.querySelector('#cc-num');
            ccNumber.parentElement.classList.remove('not-valid');
            ccNumber.parentElement.classList.add('valid');
            ccNumber.nextElementSibling.style.display = "none";

        }
        if (!validateZip()) {
            const zip = document.querySelector('#zip');
            zip.parentElement.classList.add('not-valid');
            zip.parentElement.classList.remove('valid');
            zip.nextElementSibling.style.display = "block";
            isValid = false;
        } else {
            const zip = document.querySelector('#zip');
            zip.parentElement.classList.remove('not-valid');
            zip.parentElement.classList.add('valid');
            zip.nextElementSibling.style.display = "none";

        }
        if (!validateCvv()) {
            const cvv = document.querySelector('#cvv');
            cvv.parentElement.classList.add('not-valid');
            cvv.parentElement.classList.remove('valid');
            cvv.nextElementSibling.style.display = "block";
            isValid = false;
        } else {
            const cvv = document.querySelector('#cvv');
            cvv.parentElement.classList.remove('not-valid');
            cvv.parentElement.classList.add('valid');
            cvv.nextElementSibling.style.display = "none";
        }
    }
    return isValid;
}




//step 8
//submit event listener/handler
const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', (event) => {
    if (!validate()) {
        event.preventDefault();
    }
   // event.preventDefault();
});

const checkboxes = document.querySelectorAll('#activities-box input');
for (let i = 0; i < checkboxes.length; i++) {
    const input = checkboxes[i];
    input.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focus');
    });
}
