document.getElementById('upload').addEventListener('change', handleImage, false);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Aqui você pode redesenhar as imagens conforme necessário
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Chame a função uma vez para ajustar inicialmente o canvas

function handleImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    reader.onload = function(event) {
        img.src = event.target.result;
    }

    img.onload = function() {
        const baseImg = new Image();
        baseImg.src = 'https://raw.githubusercontent.com/BotacinDesign/Edmar/main/assets/base_art.png'; // Caminho ajustado para o arquivo raw

        baseImg.onload = function() {
            canvas.width = baseImg.width;
            canvas.height = baseImg.height;

            // Desenhe a imagem carregada pelo usuário primeiro
            const ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
            const newWidth = img.width * ratio;
            const newHeight = img.height * ratio;

            // Centralize a imagem carregada pelo usuário
            const x = (canvas.width - newWidth) / 2;
            const y = (canvas.height - newHeight) / 2;

            ctx.drawImage(img, x, y, newWidth, newHeight);

            // Desenhe a imagem base em cima
            ctx.drawImage(baseImg, 0, 0);
        }
    }

    reader.readAsDataURL(file);
const downloadButton = document.getElementById('download');
downloadButton.addEventListener('click', function() {
    const canvas = document.getElementById('canvas');
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'imagem.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
v

    const downloadButton = document.getElementById('download');
    downloadButton.onclick = function() {
        const dataURL = canvas.toDataURL('image/png');
        downloadButton.href = dataURL;
    }
}
