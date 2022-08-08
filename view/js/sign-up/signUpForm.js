var typeProfile = document.getElementById("profile-type");
var addressInformation = document.getElementById("address");
var personalInformation = document.getElementById("personal-information");

function openAddressSection() {
  personalInformation.style.display = "none";
  addressInformation.style.display = "block";
}

function backToPersonalInformation() {
  addressInformation.style.display = "none";
  personalInformation.style.display = "block";
}

function openTypeProfile() {
  addressInformation.style.display = "none";
  typeProfile.style.display = "block";
}

function backToAddressSection() {
  typeProfile.style.display = "none";
  addressInformation.style.display = "block";
}
