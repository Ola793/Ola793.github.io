window.addEventListener('load', function() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle) => {
        circle.style.backgroundColor = 'rgba(255, 255, 255, 0.55)';

        circle.addEventListener('mouseover', function() {
            this.style.backgroundColor = 
            (this.style.backgroundColor === 'rgba(255, 255, 255, 0.55)') ? 'rgba(255, 255, 255, 0.95)' : 'rgba(144, 169, 158, 1)';
        })

        circle.addEventListener('mouseout', function() {
            this.style.backgroundColor = 
            (this.style.backgroundColor === 'rgba(255, 255, 255, 0.95)') ? 'rgba(255, 255, 255, 0.55)' : 'rgba(50, 100, 75, 1)';
        })
        
        circle.addEventListener('click', function() {
            if (this.style.backgroundColor === 'rgba(255, 255, 255, 0.95)') {
                this.style.backgroundColor = 'rgba(50, 100, 75, 1)';
                this.style.backgroundImage = 'url(logos/white_like.svg)';
            } else {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                this.style.backgroundImage = 'url(logos/grey_like.svg)';
            } 
        })
    });
})


