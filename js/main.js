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
            animacao: 'animated slideInDown',
            titulo: 'Desenvolvimento Web',
            ilustra: './img/img1.jpg',
            conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sit, cumque dolorum ullam eius obcaecati, porro corrupti veritatis laboriosam architecto nobis esse. Eaque. Quis dolore ducimus similique sunt sequi porro unde, placeat,`
        },

        {
            animacao: 'animated slideInLeft',
            titulo: 'Carreira Freela',
            ilustra: './img/img2.jpg',
            conteudo: `Ipsum sit, cumque dolorum ullam eius obcaecati, porro corrupti veritatis laboriosam architecto nobis esse. Eaque, ea optio itaque dolor culpa vel odit!
            At labore omnis neque facere.`
        },

        {
            animacao: 'animated slideInRight',
            titulo: 'Programação com JS',
            ilustra: './img/javascript.png',
            conteudo: `A linguagem de programação mais utilizada na Web, desde pequenas páginas, até robustas aplicações de vários portes.`
        },

        {
            animacao: 'animated slideInUp',
            titulo: 'Programação com Python',
            ilustra: './img/python.png',
            conteudo: `A linguagem de programação utilizada no desenvolvimento de IA, back-end de app Web e Games.`
        }

        
    ]

    // template de Card
    let cardTemplate = {
        html(animation, title, img, desc){
            return `<div class="bgCard ${animation}">
                <div class="bloco-img">
                    <img src='${img}' alt='' />
                </div>
                <div class="bloco-conteudo">
                    <h3>${title}</h3>
                    <hr style='width: 100px'>
                    <p style="letter-spacing: 2px;">
                        ${desc}
                    </p>
                </div>
            </div>`
        } 
    }

    // renderizando o conteúdo...
    function render(){
        app.innerHTML = conteudos.map((x)=>{
            return cardTemplate.html(x.animacao, x.titulo, x.ilustra, x.conteudo)
        }).join('')
    }

    corpo.addClasse()
    render()
})