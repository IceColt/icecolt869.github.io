const fileInput = document.getElementById('fileInput');
const fileLabelText = document.getElementById('fileLabelText');
const uploadForm = document.getElementById('uploadForm');
const statusDiv = document.getElementById('status');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length === 0) {
    fileLabelText.textContent = "Choisir des fichiers";
  } else if (fileInput.files.length === 1) {
    fileLabelText.textContent = fileInput.files[0].name;
  } else {
    fileLabelText.textContent = fileInput.files.length + " fichiers sélectionnés";
  }
});

uploadForm.addEventListener('submit', function(e) {
  e.preventDefault();
  statusDiv.textContent = "Envoi en cours... (démo, rien n'est envoyé)";
  statusDiv.style.color = "#b490ca";
  setTimeout(() => {
    statusDiv.textContent = "Fichiers “envoyés” !";
    statusDiv.style.color = "#16a34a";
    uploadForm.reset();
    fileLabelText.textContent = "Choisir des fichiers";
  }, 1800);
});
