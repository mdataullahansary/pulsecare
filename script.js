const locationInput = document.getElementById('inputBox');
const bookNow  = document.getElementById('bookNow');
const address = document.getElementById('addressBox');



if (bookNow) {
  
bookNow.addEventListener('click', function() {
  const locationValue = locationInput.value.trim();
  if (locationValue !== "") {
  localStorage.setItem('userAddress', locationValue);
  window.location.href = 'booking.html'; 

  }else {
    alert('Please enter a valid location');
  }
}) };

const userAddress = localStorage.getItem('userAddress');
console.log(userAddress);
address.value = `${userAddress} ,`;

      

document.getElementById('home').addEventListener('click', function() {
            window.location.href = 'index.html';
          });

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Check if the elements exist to avoid errors
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}
          
   