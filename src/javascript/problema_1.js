$(document).ready(function (){
    $('#form_cep').focusout(function(e){
        e.preventDefault();
        var cep = $("#form_cep").val();
        cep = cep.replace(/[^\w\s]/gi, '');
        var var_url = "http://api.postmon.com.br/v1/cep/" + cep;
        console.log(`CEP: ${cep} - URL: ${var_url}`);
        $.ajax({
            url : var_url,
            type : "GET",
            dataType :  'json',
            success : function(response){
                console.log(response);

                $('#form_logradouro').val(response.logradouro); 
                $('#form_complemento').val(response.complemento);
                $('#form_bairro').val(response.bairro);
                $('#form_cidade').val(response.cidade);
                $('#form_uf').val(response.estado);
            },
            error : function(err){
                console.log(err);
            }
        });
    });

    $("#btn_limpar").click(function() {
        $('#form_name').val(""); 
        $('#form_cpf').val(""); 
        $('#form_data_nascimento').val(""); 
        $('#form_telefone').val("");
        $('#form_email').val("");

        $('#form_cep').val("");

        $('#form_logradouro').val(""); 
        $('#form_complemento').val("");
        $('#form_bairro').val("");
        $('#form_cidade').val("");
        $('#form_uf').val("");
    });

    function validateEmail(email) {
        const res = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(res.test(email)){
            return true;
        };
        return false;
      }


    $("#btn_enviar").click(function() {

        var verificado_empty = true;
        var verificado_email;
        var verificado_bio;
          $('input[class="form-control"]').each(function(){
            if($(this).val() == ""){
                verificado_empty = false;
               return false;
             }
          });

          
          if(verificado_empty){
            verificado_email = validateEmail($('#form_email').val());
          }

        if(verificado_empty && verificado_email && ($('#form_bio').val() != "")){
            console.log('Resposta:');
            console.log(`Nome: ${$('#form_name').val()}`);
            console.log(`CPF: ${$('#form_cpf').val()}`);
            console.log(`Data de Nascimento: ${$('#form_data_nascimento').val() }`);
            console.log(`Telefone: ${$('#form_telefone').val()}`);
            console.log(`Email: ${$('#form_email').val()}`);
            console.log(`CEP ${$('#form_cep').val()}`);
            console.log(`Logradouro: ${$('#form_logradouro').val() }`);
            console.log(`Complemento: ${$('#form_complemento').val()}`);
            console.log(`Bairro: ${$('#form_bairro').val()}`);
            console.log(`Cidade: ${$('#form_cidade').val()}`);
            console.log(`UF: ${$('#form_uf').val()}`);
            console.log(`Descrição (Bio): ${$('#form_uf').val()}`);
        }
        else{
            alert('Existem Inconsistências no cadastro.');
            console.log(`Existem Inconsistências no cadastro.`);
        }
    });
});
