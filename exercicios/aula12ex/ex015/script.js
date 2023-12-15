function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-he.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'imagens/adolescente-he.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-he.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-he.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca-she.png')
            } else if (idade < 21) {
                // Adolescente
                img.setAttribute('src', 'imagens/adolescente-she.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-she.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-she.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}