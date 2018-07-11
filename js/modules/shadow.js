const shadowBoxes = document.querySelectorAll('#shadow-box');
function shadowRaise() {
    this.classList.add('shadow-lg');
    // this.style.backgroundColor = 'white';
    this.classList.add('bg-light');
};
function shadowDown() {
    this.classList.remove('shadow-lg');
    // this.style.backgroundColor = '';
    this.classList.remove('bg-light');
}
shadowBoxes.forEach( box => box.addEventListener( 'mouseenter', shadowRaise ) );
shadowBoxes.forEach( box => box.addEventListener( 'mouseleave', shadowDown ) );

export { shadowRaise, shadowDown };