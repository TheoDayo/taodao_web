document.addEventListener('DOMContentLoaded', function () {
    const dishNameSelect = document.getElementById('dishName');
    const timeSelect = document.getElementById('time');
    const pickupOptions = ["", "Wednesday 5:00pm-6:00pm", "Thursday 5:00pm-6:00pm", "Friday 11:00am - 1:00pm", "Saturday 11:00am - 1:00pm"];
    const deliveryOptions = ["", "Wednesday 7:00pm-8:00pm", "Thursday 7:00pm-8:00pm", "Friday 1:00pm - 2:00pm", "Saturday 1:00pm - 2:00pm"];

    document.getElementsByName('data[deliveryType]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            updateOptions();
        });
    });

    function updateOptions() {
        const selectedDeliveryType = document.querySelector('input[name="data[deliveryType]"]:checked').value;
        const options = (selectedDeliveryType === 'pickup') ? pickupOptions : deliveryOptions;

        // Clear previous options
        timeSelect.innerHTML = '';

        // Add new options
        options.forEach(function (option) {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.text = option;
            timeSelect.add(optionElement);
        });
    }

    var form = document.getElementById('sheetdb-form');
    form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        alert('Thank you! Your order is submitted successfully.')
    });
    });
});

