// Tip Calculator Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tip Calculator Elements
    const billInput = document.getElementById('bill');
    const peopleInput = document.getElementById('people');
    const tipButtons = document.querySelectorAll('.tip-btn');
    const customTip = document.querySelector('.custom-tip');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalAmountDisplay = document.getElementById('total-amount');
    const resetBtn = document.getElementById('reset-btn');
    const billInputGroup = document.querySelector('.tip-calculator .input-group:nth-of-type(1)');
    const peopleInputGroup = document.querySelector('.tip-calculator .input-group:nth-of-type(2)');

    // Variables
    let billValue = 0;
    let peopleValue = 1;
    let tipValue = 0;

    // Event Listeners
    if (billInput) {
        billInput.addEventListener('input', validateBill);
        peopleInput.addEventListener('input', validatePeople);
        tipButtons.forEach(btn => btn.addEventListener('click', handleTipButtonClick));
        customTip.addEventListener('input', handleCustomTip);
        resetBtn.addEventListener('click', resetCalculator);
    }

    // Functions
    function validateBill() {
        billValue = parseFloat(billInput.value);
        
        if (billInput.value === '' || billValue <= 0) {
            billInputGroup.classList.add('error');
            resetBtn.disabled = true;
        } else {
            billInputGroup.classList.remove('error');
            calculateTip();
        }
    }

    function validatePeople() {
        peopleValue = parseInt(peopleInput.value);
        
        if (peopleInput.value === '' || peopleValue <= 0) {
            peopleInputGroup.classList.add('error');
            resetBtn.disabled = true;
        } else {
            peopleInputGroup.classList.remove('error');
            calculateTip();
        }
    }

    function handleTipButtonClick(e) {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        customTip.value = '';
        tipValue = parseInt(e.target.value);
        calculateTip();
    }

    function handleCustomTip() {
        tipButtons.forEach(btn => btn.classList.remove('active'));
        tipValue = parseFloat(customTip.value) || 0;
        calculateTip();
    }

    function calculateTip() {
        if (billValue > 0 && peopleValue > 0) {
            resetBtn.disabled = false;
            const tipAmount = (billValue * tipValue / 100) / peopleValue;
            const totalAmount = (billValue / peopleValue) + tipAmount;
            tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
            totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
        }
    }

    function resetCalculator() {
        billInput.value = '';
        peopleInput.value = '';
        customTip.value = '';
        billValue = 0;
        peopleValue = 1;
        tipValue = 0;
        tipAmountDisplay.textContent = '$0.00';
        totalAmountDisplay.textContent = '$0.00';
        tipButtons.forEach(btn => btn.classList.remove('active'));
        billInputGroup.classList.remove('error');
        peopleInputGroup.classList.remove('error');
        resetBtn.disabled = true;
    }
});
