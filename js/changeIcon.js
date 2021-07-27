function handleClickMobile(x) {
    x.classList.toggle('change');

    const nav = document.getElementById('navButtons');
    if (nav.className === 'navigation') {
        nav.className += ' responsive';
    } else {
        nav.className = 'navigation';
    }
}
