export function scrollToMain() {
    const target = document.querySelector('.main__info-aboutUs');
    const btn = document.querySelector('[data-about_us]')
    
    btn.addEventListener('click', function() {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

export function scrollToBedside() {
    const target = document.querySelector('.bedside__table');
    const btn = document.querySelector('[data-bedside-btn]')
    
    btn.addEventListener('click', function() {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

export function scrollToShells() {
    const target = document.querySelector('.shells');
    const btn = document.querySelector('[data-shells-btn]')
    
    btn.addEventListener('click', function() {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

export function scrollToContacts() {
    const target = document.querySelector('.footer');
    const btn = document.querySelector('[data-contacts-btn]')
    
    btn.addEventListener('click', function() {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    })
}