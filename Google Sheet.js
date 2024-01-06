
const scriptURL = 'https://script.google.com/macros/s/AKfycbwOTo58TxI966Qmjt7ix19OGLF5mOlUA_Xs9aJ2H0fI5GcA3lkn3Kh-Np45O5lj5Xvk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
