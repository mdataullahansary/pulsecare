// Google Maps Initialization
window.initMap = function() {
  const location = { lat: 24.096524291205807, lng: 88.2523327742667 }; 
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
};







document.getElementById('bookNowButton').addEventListener('click', function() {
          window.location.href = 'booking.html';
        });
      

document.getElementById('home').addEventListener('click', function() {
            window.location.href = 'index.html';
          });

document.getElementById('tracking').addEventListener('click', function() {
            window.location.href = 'live_tracking.html';
          });

document.getElementById('contacts').addEventListener('click', function() {
            window.location.href = 'contacts.html';
          });

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
      
menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
});          


   