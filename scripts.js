// pricing page 

// for Toggle button and toggling prices from monthly to yearly
const toggle = document.getElementById('billingToggle');  //monthly/yearly toggle switch
const labelMonthly = document.getElementById('billingLabelMonthly'); //monthly label
const labelYearly = document.getElementById('billingLabelYearly'); //yearly label
const prices = document.querySelectorAll('.price'); //price
const periods = document.querySelectorAll('.billing-period'); //per month/per year <p> element

toggle.addEventListener('change', () => {
    const isYearly = toggle.checked; // if it is 'checked', then isYearly is true
    //highlight the one selected
    labelMonthly.classList.toggle('active', !isYearly);
    labelYearly.classList.toggle('active', isYearly);

    prices.forEach(price => {
        const newPrice = isYearly ? price.dataset.yearly : price.dataset.monthly;
        // 'dataset.' maps to the 'data-' in the HTML so this is accessing the data-monthly and data-yearly prices in the newPrice variable
        price.textContent = `$${parseFloat(newPrice).toFixed(2)}`;  //parseFloat turns the string price into a 
        // float integer, then 'toFixed(2) tells it to round it to 2 decimal places and then converts 
        // back to a string
    });

    periods.forEach(period => {
        period.textContent = isYearly ? 'per year' : 'per month'; //if 'isYearly' is checked, it makes the text here
        //'per year', otherwise it makes it 'per month'
    });
});

