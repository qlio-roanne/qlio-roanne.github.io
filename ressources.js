window.onload = function(){
	var titre = document.getElementById("titre");
	var infos = JSON.parse(data);
	var html = document.getElementById("activite").innerHTML;
    titre.innerText = titre.innerText + " " + infos.Année_formatée + " - Vague n°" + infos.Vague;
	for(var key in infos.Evals) {
		html += "<option value=" + key  + ">" + key + " - " + infos.Evals[key] + "</option>"
	};
	document.getElementById("activite").innerHTML = html;
	window.qrcode = new QRCode(document.getElementById("qrcode"), "");
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

        for(var i=0; i<affichages.length; i++) {
            affichages[i].style.visibility = "hidden";
          }
        return;};

    var adresse = "https://educ.sphinxonline.net/surveyserver/s/CIUSNCZO/" + infos.Année + "_" + code + "/questionnaire.htm";
    
    lien.innerText = adresse;
    lien.setAttribute("href",adresse);
	window.qrcode.makeCode(adresse);

    for(var i=0; i<affichages.length; i++) {
        affichages[i].style.visibility = "visible";
        };
};
