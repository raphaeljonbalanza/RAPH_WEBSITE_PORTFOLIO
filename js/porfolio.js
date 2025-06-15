// Modal for old project details (optional example)
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

function openModal(project) {
  if (project === 'zameco') {
    modalTitle.textContent = 'ZAMECO Voice: Complaint Management System';
    modalText.innerHTML = `
  <p>"ZAMECO Voice: Complaint Management System" is our capstone team project designed to streamline the reporting and resolution of customer complaints. Users can send complaints via the system, and once submitted, they will receive real-time updates on the status—whether it's Pending, In Progress, or Resolved.</p>
  <p>The system allows the admin to assign units, schedule resolutions, track ongoing cases, and generate summary reports. It also includes a feature to send announcements, similar to Meralco, and send direct messages or service updates to users through their personal dashboard.</p>
  <p>This project is both web-based and mobile-based, created to enhance transparency, improve response times, and provide a better customer experience in utility service management.</p>
  <p>You can also watch the tutorial video in the projects section below.</p>
`;

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// YouTube Video Modal Logic
const videoCard = document.getElementById('videoCard');
const videoModal = document.getElementById('videoModal');
const closeModalBtn = document.getElementById('closeModal');
const youtubeVideo = document.getElementById('youtubeVideo');

const youtubeURL = "https://www.youtube.com/embed/_b4SB31ifBs?autoplay=1&rel=0";

videoCard.addEventListener('click', openVideoModal);
videoCard.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openVideoModal();
  }
});

closeModalBtn.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) {  // close if clicking outside modal content
    closeVideoModal();
  }
});

function openVideoModal() {
  youtubeVideo.src = youtubeURL;
  videoModal.style.display = 'flex';
  videoModal.setAttribute('aria-hidden', 'false');
  closeModalBtn.focus();
}

function closeVideoModal() {
  videoModal.style.display = 'none';
  youtubeVideo.src = ''; // stop the video playback
  videoModal.setAttribute('aria-hidden', 'true');
  videoCard.focus();
}
