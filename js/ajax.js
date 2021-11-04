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

for (let key in keys)
    setTimeout(() => {
        $.ajax({
            type: 'GET',
            url: `./pages/${keys[key]}.html`,
            success: (data) => {
                new_body = ($('body').html()).replace(`{{${keys[key]}}}`, data)
                $('body').html(new_body)
            }
        })
    }, 500)

$('body').html(($('body').html()).replace('<script src="./js/ajax.js"></script>', ''))
