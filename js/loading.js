/**
 * Loading animation
 * - Implemente uma animação para a sua página
 * 
 * By @erikfritas (LUMAY)
 */

// fecha a tela de carregamento, e mostra a página atrás
// porém só quando estiver tudo carregado (on already)
$(document).ready(()=>{
    setTimeout(()=>{
        $('.loading').stop().animate({
            "width": '-=100%'
        }, 1000, ()=>{
            $('.loading').stop().remove()
        })
    }, 2000)
})

