
const videoElement = document.getElementById('webcam');
const canvasElement = document.getElementById('overlay');
const canvasCtx = canvasElement.getContext('2d');
let currentMode = null;

function selectMode(mode) {
  currentMode = mode;
  document.querySelectorAll('.options-group').forEach(el => el.style.display = 'none');
  if (mode) {
    document.getElementById(`${mode}-options`).style.display = 'flex';
  }
}

function insertJewelryOptions(type, containerId, count) {
  const container = document.getElementById(containerId);
  for (let i = 1; i <= count; i++) {
    const btn = document.createElement('button');
    const img = document.createElement('img');
    img.src = `${type}s/${type}${i}.png`;
    img.loading = 'lazy';
    btn.appendChild(img);
    btn.onclick = () => {
      document.querySelectorAll(`#${containerId} button`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      console.log(`Selected ${type}: ${img.src}`);
    };
    container.appendChild(btn);
  }
}

window.onload = () => {
  document.getElementById('loading-overlay').style.display = 'none';
  insertJewelryOptions('earring', 'earring-options', 5);
  insertJewelryOptions('necklace', 'necklace-options', 5);
};

// Add MediaPipe face mesh setup and canvas drawing if needed here
