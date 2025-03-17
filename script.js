const locationInput = document.getElementById('inputBox');
const bookNow  = document.getElementById('bookNow');
const address = document.getElementById('addressBox');
const requestEmergency = document.getElementById('requestEmergency');
const sosSignal = document.getElementById('sossignal');
const emergencyContacts = document.getElementById('emergencyContacts');
const namel = document.getElementById('name');
const number = document.getElementById('number');
const emergencyType = document.getElementById('type');
const addNotes = document.getElementById('notes');
const submitBtn = document.getElementById('submit');
const patientName = document.getElementById('patientName');
const userNumTrucking = document.getElementById('userNumTrucking');
const updateUserData = document.getElementById('userdata');
const pickupLocation = document.getElementById('pickupLocation');
const emergencyinfo = document.getElementById('emergencyinfo');
const patientNotes = document.getElementById('patientNotes');
const timeStamp = document.getElementById('timeStamp');






document.getElementById('home').addEventListener('click', function() {
  window.location.href = 'index.html';
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Check if the elements exist to avoid errors
if (menuBtn || mobileMenu) {
menuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
}



if (requestEmergency) {
  requestEmergency.addEventListener('click', function() { 
    window.location.href = 'booking.html'; } )
};

if (emergencyContacts) {
  emergencyContacts.addEventListener('click', function() { 
    window.location.href = 'contacts.html'; } )
};
if (bookNow) {
  
bookNow.addEventListener('click', function() {
  const locationValue = locationInput.value.trim();
  if (locationValue !== "") {
  localStorage.setItem('userAddress', locationValue);
  window.location.href = 'booking.html'; 
  const userAddress = localStorage.getItem('userAddress');
console.log(userAddress);

  address.value += `${userAddress}, `;

  }else {
    alert('Please enter a valid location');
  }
}) };

if (submitBtn) {
submitBtn.onclick = (event) => {
  event.preventDefault();
  localStorage.setItem('userName', namel.value);
  localStorage.setItem('userAddress', address.value);
  localStorage.setItem('userNumber', number.value);
  localStorage.setItem('emergencyType', emergencyType.value);
  localStorage.setItem('userNotes', addNotes.value);
  window.location.href = 'live_tracking.html';
}
};

const timestamp = new Date().toLocaleString();
console.log(timestamp);


if (updateUserData) {
  console.log("worked");
  const userName = localStorage.getItem('userName');
  const userNumber = localStorage.getItem('userNumber');
  const userAddress = localStorage.getItem('userAddress');
  const emergencyType = localStorage.getItem('emergencyType');
  const userNotes = localStorage.getItem('userNotes');


  patientName.innerHTML = userName ;
  userNumTrucking.innerHTML= userNumber;
  pickupLocation.innerHTML = userAddress;
  emergencyinfo.innerHTML = emergencyType;
  patientNotes.innerHTML = userNotes;
  timeStamp.innerHTML = timestamp;

}


  
   