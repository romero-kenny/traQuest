function displayMapImage() {
    const mapUploadForm = document.getElementById('map-upload');
    const fileInput = document.getElementById('file-input');
    const mapTitleInput = document.getElementById('map-title');
    const mapFile = document.getElementById('map-file');

    mapUploadForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const mapContainer = document.createElement('div');
                const img = document.createElement('img');
                const title = document.createElement('h4');

                title.textContent = mapTitleInput.value;
                img.src = e.target.result;
                img.alt = 'Map of ' + mapTitleInput.value;
                img.style.maxWidth = '60%';

                mapContainer.appendChild(title);
                mapContainer.appendChild(img);

                mapFile.innerHTML = '';
                mapFile.appendChild(mapContainer);
            };
            reader.readAsDataURL(file);
        } else {
            mapFile.innerHTML = '';
        }
    });
    mapUploadForm.reset();
}

displayMapImage();
