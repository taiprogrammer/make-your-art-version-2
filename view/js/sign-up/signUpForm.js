var personalInformation = document.getElementById('personal-information');
var addressInformation = document.getElementById('address');

function openAddressSection() {
    personalInformation.style.display = 'none';
    addressInformation.style.display = 'block';
}

function backToPersonalInformation() {
    addressInformation.style.display = 'none';
    personalInformation.style.display = 'block';
}