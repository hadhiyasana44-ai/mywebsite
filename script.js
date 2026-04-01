function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobInput) {
        result.innerHTML = "Please select a date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust days and months if negative
    if (ageDays < 0) {
        ageMonths--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += prevMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.innerHTML = `Your Age is ${ageYears} Years, ${ageMonths} Months, and ${ageDays} Days.`;
}