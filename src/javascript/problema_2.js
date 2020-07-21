$(document).ready(function(){
    var var_url = "https://api.github.com/repositories?since="+Math.floor(Math.random() * 10000);
    console.log(var_url)
    $.ajax({
        url : var_url,
        type : "GET",
        dataType :  'json',
        success : function(response){

            var temp = [];
            for(var i = 0; i < 12; i++){
        
                var ownerName = response[i].full_name;
                var ownerPhoto = response[i].owner.avatar_url; // Ok
                var contribuidores = response[i].contributors_url;
                var issues_url = response[i].issues_url;
                var issues_comments = response[i].issue_comment_url;
            
            var newElement = `<div id="${ownerName}" class="col-lg-2 col-md-6 p-4" data-contribuidores="${contribuidores}" data-issues="${issues_url}" data-issues-comments="${issues_comments}"> <div class="card text-center"> <div class="card-body p-4"> <img class="img-fluid d-block rounded-circle" src="${ownerPhoto}"> <p class="my-3 lead"></p> <a class="btn btn-link infoAncor" href="#">Info</a></div> </div> </div>`
            $('#darkRow').append(newElement);

            temp.push(ownerName);
            }
        },
        error : function(err){
            console.log(err);
        }
    });

});

// Alterna informações exibidas dentro do popup.
$(".nav-item").on("click", function(){

    var id = $(this).attr('id');

    //console.log('Id: ' + id);

    if(id == 'tab_issues'){
        $("#div_contribuidores").hide();
        $("#div_issues").show();
    }
    else if(id == 'tab_contribuidor'){
    $("#div_issues").hide();
    $("#div_contribuidores").show();
    } 
});


// Abre o popup com as informações.
$('body').on("click",".infoAncor", function(){

    console.log("teste");
    $("#nav_index").addClass("custom-blur-active");
    $("#main_div_repo").addClass("custom-blur-active");

    var nomeRepositorio = $(this).parent()
                                        .parent()
                                        .parent().attr('id');

    $("#nome_repositorio_atual").html(nomeRepositorio);

    var issues = $(this).parent()
                                        .parent()
                                        .parent().attr('data-issues');

    var issuesComments = $(this).parent()
                                        .parent()
                                        .parent().attr('data-issues-comments');

    var contribuidoresURL = $(this).parent()
                                        .parent()
                                        .parent().attr('data-contribuidores');

    $.ajax({
        url : contribuidoresURL,
        type : "GET",
        dataType :  'json',
        success : function(response){

            for(var i=0; i < response.length; i++){

                var nome = response[i].login;
                var contribuicoes = response[i].contributions;
                if(contribuicoes >=1 && contribuicoes <= 200){
                    $('#table_100').append(`<tr><th>${nome}</th><th>${contribuicoes}</th></tr>`);
                }
                else if(contribuicoes >=201 && contribuicoes <= 500){
                    $('#table_200').append(`<tr><th>${nome}</th><th>${contribuicoes}</th></tr>`);
                }
                else if(contribuicoes >=501){
                    $('#table_500').append(`<tr><th>${nome}</th><th>${contribuicoes}</th></tr>`);
                }
            }
        },
        error : function(err){
            console.log(err);
        }
    });

    $("#nav_popupheader").show();
    $("#nav_popuptabs").show();
    $("#div_contribuidores").show(); 
});


// Fecha o popup com as informações.
$(document).mouseup(function(e){

    var container = $("#nav_popupheader");

    if (!container.is(e.target) && container.has(e.target).length === 0){

        $("#nav_index").removeClass("custom-blur-active");
        $("#main_div_repo").removeClass("custom-blur-active");

        $("#nav_popupheader").hide();
        $("#nav_popuptabs").hide();
        $("#div_contribuidores").hide(); 
    }
});







