//--------------------------------Form Validation---------------------------------------
function checkForm() {
    let myForm = document.getElementById("myForm");
    let re = /[a-zA-Z]/;

    //Checks if the quest name is only made up of letters
    if (myForm.questName.value === "") {
        alert("Please enter a name.");
        return false;
    }
    //Checks if the quest reward is a number or empty
    if (myForm.questReward.value === "") {
        alert("Please enter a number.");
        return false;
    }
    else if (isNaN(myForm.questReward.value) === true) {
        alert("Please enter a valid number.");
        return false;
    }
    //Checks if the quest description is made up of at least 100 characters
    if (myForm.questDesc.value.length <= 100) {
        alert("Please enter a proper description.");
        return false;
    }
    return true;
}
let myForm = document.getElementById("myForm");
myForm.validate.addEventListener("submit", checkForm);