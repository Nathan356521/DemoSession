
let images = [
  'https://images.unsplash.com/photo-1506765515384-028b60a970df',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
];

let index = 0;
const headerImage = document.getElementById('headerImage');

function rotateImage() {
  headerImage.style.opacity = 0;
  setTimeout(() => {
    headerImage.style.backgroundImage = `url('${images[index]}')`;
    headerImage.style.opacity = 0.4;
    index = (index + 1) % images.length;
  }, 500);
}
setInterval(rotateImage, 5000);
rotateImage();

function viewClient(clientName) {
  alert('Details for ' + clientName + ' coming soon!');
}

function filterClients() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".client-card");

  cards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}
