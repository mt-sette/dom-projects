const getCamera = async () => {
    const video = document.getElementById('video');
    try {
        video.srcObject = await navigator.mediaDevices.getUserMedia({
            video: true,
        });
    } catch (error) {
        console.error(error);
    }
};

document.getElementById('snap').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');
    const context = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
});

document.getElementById('download').addEventListener('click', () => {
    const canvas = document.getElementById('canvas');
    const link = document.createElement('a');
    link.download = 'photo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});

window.addEventListener('load', getCamera);
