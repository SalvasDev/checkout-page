var form = document.getElementById('formulario');
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var nameid = document.getElementById('nameid')
var adress = document.getElementById('adress')
var city = document.getElementById('city')
var country = document.getElementById('country')
var postalCode = document.getElementById('postalcode')


function validate(e) {
    if (email.value == '') {
        alert('Please write your email');
        e.preventDefault();

    }

    if (phone.value == '') {
            alert('Please write your phone');
            e.preventDefault();
        }

    if (nameid.value == '') {
            alert('Please write your name')
            e.preventDefault();

        }    

    if (adress.value == '') {
            alert('Please write your adress');
            e.preventDefault();

        }    

    if (city.value == '') {
            alert('Please write your city');
            e.preventDefault();

        }
        
    if (country.select == false) {
            alert('Please select your country');
            e.preventDefault();

        }
    if (postalCode == '') {
            alert('Please write your postal code');
            e.preventDefault();
        }
    alert('Docuemento enviado correctamente');        
} 

form.addEventListener('submit', validate);
