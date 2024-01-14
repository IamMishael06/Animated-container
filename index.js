setTimeout(() => {
    var container = document.querySelectorAll('.falling-cards');
    for (let i = 0; i < container.length; i++) {
        const containers = container[i];
        containers.style.transition = 'transform 1s ease-in-out';
        containers.style.animation = 'fall-all 4s ease 0s 1 forwards';
    }

}, 12000);