$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true 
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true 
            },
            mensagem: {
                required :true,
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        mensages: {
            nome: 'Por favor, insira o seu nome'
        },
        submithandler: function(form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador){
            let camposIncorretos = validador.numberOfInvalids ();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $('form').submit(function(event){

        event.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    
      });
  
    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();
        
        $('#veiculo-interesse').val(nomeVeiculo)
    
        $('html').animate ({
            scrollTop: destino.offset().top
        }, 1000)
    })
})

