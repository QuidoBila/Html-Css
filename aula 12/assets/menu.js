
function mostrar(){
    if(itens.style.display =='block'){
        itens.style.display ='none'
        document.querySelector('.icon').src = "assets/menu_white.svg"

    }else{
        itens.style.display = 'block'
        document.querySelector('.icon').src = "assets/close_white.svg"
    }
}