function afficher_lien() {
    var module = document.getElementById("module");
    var lien = document.getElementById("lien");
    var qrcode = document.getElementById("qrcode");
    var code = module.options[module.selectedIndex].value;
    var affichages = document.getElementsByClassName("aff");

    if (code == "") { window.alert("Veuillez sélectionner un module.");
        lien.innerText = "";
        lien.setAttribute("href","");
        qrcode.setAttribute("src","");

        for(var i=0; i<affichages.length; i++) {
            affichages[i].style.visibility = "hidden";
          }
        return;};

    var date = new Date();
    var mois = date.getMonth() + 1;
    var année = parseInt(date.getFullYear().toString().substr(2,2), 10);
    if (mois <= 6) { année = année - 1; };

    var adresse = "https://educ.sphinxonline.net/surveyserver/s/CIUSNCZO/" + année.toString() + (année+1).toString() + "_" + code + "/questionnaire.htm";
    var qradr = " https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + adresse;
    
    lien.innerText = adresse;
    lien.setAttribute("href",adresse);
    qrcode.setAttribute("src",qradr);

    for(var i=0; i<affichages.length; i++) {
        affichages[i].style.visibility = "visible";
        };
}
