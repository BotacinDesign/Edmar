document.getElementById('upload').addEventListener('change', handleImage, false);

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
        baseImg.src = 'https://github.com/BotacinDesign/Edmar/blob/main/base_art.png?raw=true; // Substitua com o caminho da sua arte base

        baseImg.onload = function() {
            canvas.width = baseImg.width;
            canvas.height = baseImg.height;

            ctx.drawImage(baseImg, 0, 0);
            const ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
            const newWidth = img.width * ratio;
            const newHeight = img.height * ratio;

            ctx.drawImage(img, (canvas.width - newWidth) / 2, (canvas.height - newHeight) / 2, newWidth, newHeight);
        }
    }

    reader.readAsDataURL(file);

    const downloadButton = document.getElementById('download');
    downloadButton.onclick = function() {
        const dataURL = canvas.toDataURL('image/png');
        downloadButton.href = dataURL;
    }
}
