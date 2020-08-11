$(document).ready(()=>{
    // Corpo do HTML
    let corpo = {
        seletor: "#app",
        classe: "bgDark",
        addClasse(){
            const elemento = document.querySelector(this.seletor)
            elemento.classList.add(this.classe)
        }
    }

    // ID do body
    let app = document.getElementById("app")

    // Estrutura de dados
    let conteudos = [
        {
            animacao: 'animated pulse',
            titulo: 'Passo 01',
            ilustra: './img/img1.gif',
            conteudo: `Pro corrupti veritatis laboriosam architecto nobis esse. Eaque. Quis dolore ducimus similique sunt sequi porro unde, placeat,`
        },

        {
            animacao: 'animated slideInLeft',
            titulo: 'Passo 02',
            ilustra: './img/img2.gif',
            conteudo: `Ipsum sit, cumque dolorum ullam eius obcaecati, porro corrupti veritatis laboriosam architecto nobis esse. Eaque, ea optio itaque dolor culpa vel odit!
            At labore omnis neque facere.`
        },

        {
            animacao: 'animated slideInRight',
            titulo: 'Passo 03',
            ilustra: './img/img3.gif',
            conteudo: `Curabitur ac molestie lorem. Integer purus nulla, aliquet ut sapien sed, consectetur hendrerit massa. Sed sed ligula nec risus tempus euismod.`
        },

        {
            animacao: 'animated slideInUp',
            titulo: 'Passo 04',
            ilustra: './img/img4.gif',
            conteudo: `Morbi eu ipsum neque. Donec scelerisque nunc eu nunc iaculis, at malesuada ex imperdiet. Pellentesque auctor pretium augue vitae sodales.`
        },

        {
            animacao: 'animated slideInUp',
            titulo: 'Passo 05',
            ilustra: './img/img5.gif',
            conteudo: `Nam pellentesque neque a commodo pharetra. Vivamus interdum, nisl ac dignissim sodales, eros est elementum felis, eu malesuada sapien eros eget nunc. `
        }        
    ]

    // template de Card
    let cardTemplate = {
        html(animation, title, img, desc){
            return `
            <div class="bgCard ${animation}">
                <div class="bloco-img" style="background-image: url('${img}');">
                    
                </div>
                <div class="bloco-conteudo">
                    <div>
                        <h1>${title}</h1>
                        <hr>
                        <p style="letter-spacing: 2px;">
                            ${desc}
                        </p>
                    </div>
                </div>
            </div>`
        } 
    }

    // renderizando o Passo...
    function render(){
        app.innerHTML = conteudos.map((x)=>{
            return cardTemplate.html(x.animacao, x.titulo, x.ilustra, x.conteudo)
        }).join('')
    }

    corpo.addClasse()
    render()
})