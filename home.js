var name_of_user = document.getElementById('name');
var surname = document.getElementById('surname')
var form = document.getElementById('form');
var errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    //make the form to not submit empty folder
    let messeges = []
    if (name_of_user.value === '' || name_of_user.value == null){
        messeges.push("Name is required")
    }

    if (surname === '' || surname == null){
        messeges.push("surname")
    }
    
    if (messeges.length >0){
        e.preventDefault()
        errorElement.innerText = messeges.join(', ')
    }

})
