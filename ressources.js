window.onload = function(){
    var titre = document.getElementById("titre");
	var infos = JSON.parse(data);
    titre.innerText = titre.innerText + " " + infos.Année_formatée + " - Vague n°" + infos.Vague;
    var html = document.getElementById("activite").innerHTML;
	for(var key in infos.Evals) {
		html += "<option value=" + key  + ">" + key + " - " + infos.Evals[key] + "</option>"
	};
	document.getElementById("activite").innerHTML = html;
};

function afficher_lien() {
    var activite = document.getElementById("activite");
    var lien = document.getElementById("lien");
    var qrcode = document.getElementById("qrcode");
    var code = activite.options[activite.selectedIndex].value;
    var affichages = document.getElementsByClassName("aff");
	var infos = JSON.parse(data);

    if (code == "") {
        lien.innerText = "";
        lien.setAttribute("href","");
        qrcode.setAttribute("src","");

        for(var i=0; i<affichages.length; i++) {
            affichages[i].style.visibility = "hidden";
          }
        return;};

    var adresse = "https://educ.sphinxonline.net/surveyserver/s/CIUSNCZO/" + infos.Année + "_" + code + "/questionnaire.htm";
    var qradr = " https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + adresse;
    
    lien.innerText = adresse;
    lien.setAttribute("href",adresse);
    qrcode.setAttribute("src",qradr);

    for(var i=0; i<affichages.length; i++) {
        affichages[i].style.visibility = "visible";
        };
};
