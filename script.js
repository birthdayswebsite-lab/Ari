const sendWishBtn = document.getElementById('sendWishBtn');
const showWishesBtn = document.getElementById('showWishesBtn');
const wishForm = document.getElementById('wishForm');
const closeModal = document.getElementById('closeModal');
const submitWish = document.getElementById('submitWish');
const wishContainer = document.getElementById('wishContainer');

// Open modal
if (sendWishBtn) sendWishBtn.onclick = () => wishForm.classList.remove('hidden');
// Close modal
if (closeModal) closeModal.onclick = () => wishForm.classList.add('hidden');

// Submit wish
if (submitWish) {
  submitWish.onclick = () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
      const wishes = JSON.parse(localStorage.getItem('wishes')) || [];
      wishes.push({ name, message });
      localStorage.setItem('wishes', JSON.stringify(wishes));
      alert('Wish submitted!');
      document.getElementById('name').value = '';
      document.getElementById('message').value = '';
      wishForm.classList.add('hidden');
    }
  };
}

// Show wishes
if (showWishesBtn) {
  showWishesBtn.onclick = () => {
    wishContainer.innerHTML = '';
    const wishes = JSON.parse(localStorage.getItem('wishes')) || [];

    wishes.forEach((w, i) => {
      const wish = document.createElement('div');
      wish.className = 'wish';
      wish.style.left = Math.random() * 80 + '%';
      wish.style.top = Math.random() * 300 + 'px';
      wish.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 85%)`;
      wish.innerText = `${w.name}: ${w.message}`;
      wishContainer.appendChild(wish);
    });
  };
}
