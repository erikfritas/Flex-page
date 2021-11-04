/**
 * Janelas que abre durante o uso do site
 * aumentam a conversão do cliente.
 * 
 * fonte: confia
 * 
 * By @erikfritas (LUMAY)
 */

setTimeout(()=>{
    $.ajax({
        method: "get",
        url: './pages/window.html',
        success: (data) => {
            $('.window').html(data)
        }
    })
}, 100)

setTimeout(()=>{
    $('.window .exit').on('click', ()=>{
        $('.window').stop().animate({
            "height": "-=100%"
        }, 800, ()=>{
            $('.window').remove()
            let will_remove_ = '<script src="./js/window.js"></script>'
            $('body').html(($('body').html()).replace(will_remove_, ''))
        })
    })
}, 200)
