function gallery () {
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.gallery-preview img');

    previews.forEach(preview => {
        preview.addEventListener('click', () => {
            const smallSrc = preview.src;
            const bigSrc = smallSrc.replace('small', 'big')
            highlight.src = bigSrc;
            previews.forEach(preview => {
                preview.classList.remove('active')
            })
            preview.classList.add('active')
            
        })
    })
}

gallery();