/**
 * Ajax script
 * - Substitui as keys -> {{key}} pelo conteúdo do arquivo delas via ajax
 * 
 * By @erikfritas (LUMAY)
 */

const keys = [
    'header',
    'apresentacao',
    'quem-somos',
    'servicos',
    'planos',
    'footer'
]

// substitui as keys uma por uma
keys.map((file_name, ind) => {
    $.ajax({
        method: 'GET',
        url: `./pages/${file_name}.html`
    }).done((data)=>{
        $('body').html(($('body').html()).replace(`{{${file_name}}}`, data))
    })
})

