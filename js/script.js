var player = prompt("Veuiilez inscrire votre nom de joueur");
if(!player)
{
    player = "joueur 1";
}

var score_player = 0;
var score_ordi = 0;

document.getElementById("moi").innerHTML=player;

function playChifumi(){
    var me = document.getElementsByTagName("select")[0].value;
    var random = Math.random();
    var ordi;
    if(random <= 0.33){
        ordi = "feuille";
    }
    else if(random >= 0.67)
    {
        ordi = "pierre";
    }
    else{
        ordi = "ciseaux";
    }

    switch(me){
        case "feuille" :
            document.getElementsByTagName("span")[0].innerHTML ="";
            if(ordi == "feuille"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:black'>Nul</span>";
            }
            else if(ordi == "pierre"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:green'>La feuille enveloppe la pierre et gagne : VICTOIRE.</span>";
                score_player++;
                document.getElementById("sm").innerHTML=score_player;
            }
            else if(ordi == "ciseaux"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:red'>Les ciseaux découpent la feuille et gagnent : DEFAITE.</span>";
                score_ordi++;
                document.getElementById("so").innerHTML=score_ordi;
            }
            document.getElementById("mc").innerHTML="Mon choix : <span style='font-size:19px;color:blue'>"+me+"</span>";
            document.getElementById("oc").innerHTML="Le choix de l'ordi : <span style='font-size:19px;color:blue'>"+ordi+"</span>";
            document.getElementById("im").innerHTML="<img src='img/"+me+".png' style='border:4px solid black'/>";
            document.getElementById("io").innerHTML="<img src='img/"+ordi+".png' style='border:4px solid black'/>";
        break;

        case "pierre" :
            document.getElementsByTagName("span")[0].innerHTML ="";
            if(ordi == "pierre"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:black'>Nul</span>";
            }
            else if(ordi == "feuille"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:red'>La feuille enveloppe la pierre et gagne : DEFAITE.</span>";
                score_ordi++;
                document.getElementById("so").innerHTML=score_ordi;
            }
            else if(ordi == "ciseaux"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:green'>La pierre écrase les ciseaux et gagne : VICTOIRE.</span>";
                score_player++;
                document.getElementById("sm").innerHTML=score_player;
            }
            document.getElementById("mc").innerHTML="Mon choix : <span style='font-size:19px;color:blue'>"+me+"</span>";
            document.getElementById("oc").innerHTML="Le choix de l'ordi : <span style='font-size:19px;color:blue'>"+ordi+"</span>";
            document.getElementById("im").innerHTML="<img src='img/"+me+".png' style='border:4px solid black'/>";
            document.getElementById("io").innerHTML="<img src='img/"+ordi+".png' style='border:4px solid black'/>";
        break;

        case "ciseaux" :
            document.getElementsByTagName("span")[0].innerHTML ="";
            if(ordi == "ciseaux"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:black'>Nul</span>";
            }
            else if(ordi == "feuille"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:green'>Les ciseaux découpent la feuille et gagnent : VICTOIRE.</span>";
                score_player++;
                document.getElementById("sm").innerHTML=score_player;
            }
            else if(ordi == "pierre"){
                document.getElementsByTagName("p")[0].innerHTML = "<span style='color:red'>La pierre écrase les ciseaux et gagne : DEFAITE.</span>";
                score_ordi++;
                document.getElementById("so").innerHTML=score_ordi;
            }
            document.getElementById("mc").innerHTML="Mon choix : <span style='font-size:19px;color:blue'>"+me+"</span>";
            document.getElementById("oc").innerHTML="Le choix de l'ordi : <span style='font-size:19px;color:blue'>"+ordi+"</span>";
            document.getElementById("im").innerHTML="<img src='img/"+me+".png' style='border:4px solid black'/>";
            document.getElementById("io").innerHTML="<img src='img/"+ordi+".png' style='border:4px solid black'/>";
        break;

        default:
                document.getElementsByTagName("span")[0].innerHTML = "Veuillez choisir une valeur !";
        break;
    }
}