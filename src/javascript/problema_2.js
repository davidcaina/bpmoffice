
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


/*
$(document).ready(function (){
    $("#generate_mor_repos").click(function() {
        for(var i = 0; i < 6; i++){
            
            var ownerName = "Owner"+1;
            var ownerPhoto = "";
            var contribuidores = "contribuidor"+i;
            var issues = "issues"+i;

        var newElement = `<div class="col-lg-2 col-md-6 p-4"> <div class="card text-center"> <div class="card-body p-4" data-contribuidores="${contribuidores}" data-issues="${issues}"> <img class="img-fluid d-block rounded-circle" src="../images/default_image.png"> <p class="my-3 lead">${name}</p> <a class="btn btn-link" href="#">Info</a>  </div> </div> </div>`
        $('#darkRow').append(newElement);
        }
    });
});
*/
