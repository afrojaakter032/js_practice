document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("add-card-btn").addEventListener("click", () => {
        document.querySelector(".card-wrap").insertAdjacentHTML("beforeend", document.querySelector(".card").outerHTML);
        attachRemoveButtonListeners();
        attachSalaryInputListeners();
    });

    function attachRemoveButtonListeners() {
        document.querySelectorAll(".remove-card-btn").forEach((el) => {
            el.addEventListener("click", () => {
                let card = el.parentNode.parentNode.parentNode;
                card.remove();
            });
        });
    }
    attachRemoveButtonListeners();

    function attachSalaryInputListeners() {
        document.querySelectorAll(".salary-input").forEach((el) => {
            el.addEventListener("input", () => {
                // let salaryInput = el.value;
                // document.querySelector(".total-salary").innerHTML = 'Total Salary:' + salaryInput;
                updateTotalSalary();
                
            });
        });
    }
    attachSalaryInputListeners();

    function updateTotalSalary() {
        let totalSalary = 0;
        document.querySelectorAll(".salary-input").forEach((el) => {
            let salaryInput = parseFloat(el.value) || 0; 
            totalSalary += salaryInput;
        });
        document.querySelector(".total-salary").innerHTML = 'Total Salary: ' + totalSalary.toFixed(2); 
    }
});