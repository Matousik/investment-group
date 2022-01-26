const contactForm = document.querySelector('.contact-form');

//contact form values
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let howdidyouhear = document.getElementById('howdidyouhear');
let amount = document.getElementById('amount');
let customMess = document.getElementById('customMess');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); //it will prevent default refreshing after submitting - ajax

    let formData = { //we will then send this object via ajax
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        howdidyouhear: howdidyouhear.value,
        amount: amount.value,
        customMess: customMess.value
    }

    let xhr = new XMLHttpRequest(); //we will call new xml http request through method post
    xhr.open('POST', '/'); //this will post structure as a post into the backend and into root directory (/)
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            firstname.value = '';
            lastname.value = '';
            email.value = '';
            howdidyouhear.value = '';
            amount.value = '';
            customMess.value = '';
        }
        else{
            alert('Something went wrong!');
        }
    } 

    xhr.send(JSON.stringify(formData)); //we can't simply sent object like this to the backend, it needs to be a string - stringify command

    //to utilize sending process, server.js needed to be adjusted with middleware - use express json...
    
});