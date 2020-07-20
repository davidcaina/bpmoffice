$(document).ready(function(){

for(var i = 0; i < 12; i++){
    
    var ownerName = "Owner"+1;
    var ownerPhoto = "";
    var contribuidores = "contribuidor"+i;
    var issues = "issues"+i;

var newElement = `<div class="col-lg-2 col-md-6 p-4"> <div class="card text-center"> <div class="card-body p-4" data-contribuidores="${contribuidores}" data-issues="${issues}"> <img class="img-fluid d-block rounded-circle" src="../images/default_image.png"> <p class="my-3 lead">${name}</p> <a class="btn btn-link infoAncor" href="#">Info</a>  </div> </div> </div>`
$('#darkRow').append(newElement);
}


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
 $(".infoAncor").on("click", function(){

    $("#nav_index").addClass("custom-blur-active");
    $("#main_div_repo").addClass("custom-blur-active");

    var currentRepoId = $(this).parent()
                                        .parent()
                                        .parent().attr('id');

    $("#nav_popupheader").show();
    $("#nav_popuptabs").show();
    $("#div_contribuidores").show(); 
 });


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


 // Gera mais repositorios.
 $("#generate_mor_repos").click(function() {
    for(var i = 0; i < 6; i++){
        
        var ownerName = "Owner"+1;
        var ownerPhoto = "";
        var contribuidores = "contribuidor"+i;
        var issues = "issues"+i;

    var newElement = `<div class="col-lg-2 col-md-6 p-4"> <div class="card text-center"> <div class="card-body p-4" data-contribuidores="${contribuidores}" data-issues="${issues}"> <img class="img-fluid d-block rounded-circle" src="../images/default_image.png"> <p class="my-3 lead">${name}</p> <a class="btn btn-link infoAncor" href="#">Info</a>  </div> </div> </div>`
    $('#darkRow').append(newElement);
    }
});

});
/*
function getRepositorios(){
    return axios.get("https://api.github.com/repositories?since=364");
}
    
    dados = getRepositorios();
    dados.then(function(resposta){
        var dados = resposta.data;
        
        console.log("Id: " + dados[0].id);
        console.log("Avatar: " + dados[0].avatar_url);
        console.log("Contributors " + dados[0].contributors_url);
        console.log("Issue_comment_url: " + dados[0].issue_comment_url);
        console.log("issues_url: " + dados[0].issues_url);

    });
*/

    // Popular a tabela com os Contribuidores

    // 

