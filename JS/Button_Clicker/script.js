var button = document.querySelector('#def');

function remove(element){
    button.parentNode.removeChild(element);
    return false;
}

function change(element){
    element.innerText = "Logout";
}

function alertNinja(){
    alert('Ninja was liked');
}