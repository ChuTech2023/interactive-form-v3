const nameField = document.querySelector("#name");
nameField.focus();

const otherJobRole = document.querySelector("#other-job-role");
otherJobRole.style.display = "none";

const jobRole = document.querySelector("#title");
jobRole.addEventListener('change', (event) => {
    const selected = event.target.value;
    if (selected === "other") {
        otherJobRole.style.display = "block";

    } else {
        otherJobRole.style.display = "none";
    }

})

const color = document.querySelector("#color");
color.style.display = "none";

const showHideColors = (options, command) => {
    options.forEach((op) => {
        op.hidden = command;
    })
}

const design = document.querySelector("#design");
design.addEventListener('change', (event) => {
    const selected = event.target.value;
    color.style.display = "block";

    let hearts = document.querySelectorAll('#color option[data-theme="heart js"]');
    let puns = document.querySelectorAll('#color option[data-theme="js puns"]');

    if (selected === "js puns") {
        showHideColors(hearts, false);
        showHideColors(puns, true);
        puns[0].selected = true;

    } else if (selected === "heart js") {
        showHideColors(puns, false);
        showHideColors(hearts, true);
        hearts[0].selected = true;
    }

})

//activties variable to select an element by using activties id
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
