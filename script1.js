document.addEventListener('DOMContentLoaded', function () {
    const dishNameSelect = document.getElementById('dishName');
    const timeSelect = document.getElementById('time');
    const pickupOptions = ["Wednesday 5:00pm-6:00pm", "Thursday 5:00pm-6:00pm", "Friday 11:00am - 1:00pm", "Saturday 11:00am - 1:00pm"];
    const deliveryOptions = ["Wednesday 7:00pm-8:00pm", "Thursday 7:00pm-8:00pm", "Friday 1:00pm - 2:00pm", "Saturday 1:00pm - 2:00pm"];

    document.getElementsByName('deliveryType').forEach(function (radio) {
        radio.addEventListener('change', function () {
            updateOptions();
        });
    });

    function updateOptions() {
        const selectedDeliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
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
});

// function submitForm() {
//     var dishName = document.getElementById('dishName').value;
//     var time = document.getElementById('time').value;
//     var userName = document.getElementById('userName').value;

//     var formData = {
//         dishName: dishName,
//         time: time,
//         userName: userName
//     };

//     // Send data to Google Sheets using Google Apps Script web app
//     fetch('https://script.google.com/macros/s/AKfycbwOTo58TxI966Qmjt7ix19OGLF5mOlUA_Xs9aJ2H0fI5GcA3lkn3Kh-Np45O5lj5Xvk/exec', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         alert('Form submitted successfully!');
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         alert('Error submitting form. Please try again later.');
//     });
// }
