
function showAll(){
    let userName = document.getElementById("name").value;
    let fatherName = document.getElementById("fatherName").value;
    let age = document.getElementById("age").value;
    let mobileNumber = document.getElementById("phone").value;
    let popupOpen = document.getElementById("popup");

    popupOpen.classList.add('open')

    let getHtml = document.getElementById('nameAdd');
    getHtml.innerHTML=userName;

    let getFather = document.getElementById('father');
    getFather.innerHTML=fatherName;

    let getAge = document.getElementById('Age');
    getAge.innerHTML=`${age} Year`;

    let getPhone = document.getElementById('mobile');
    getPhone.innerHTML=mobileNumber;


}

function closePopup(){
    let popupClose = document.getElementById("popup");
    popupClose.classList.remove('open')
}