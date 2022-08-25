function clickMenu() {
    let itens = document.querySelector('#itens');

    if (itens.style.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
    
}