/**
 * Alguns efeitos via js e jquery
 * 
 * By @erikfritas (LUMAY)
 */

$('.item-plano').on('mouseenter', ()=>{
    $('.item-plano:not(:hover)').css('filter', 'blur(8px)')
}).on('mouseleave', ()=>{
    $('.item-plano').css('filter', 'blur(0px)')
})

