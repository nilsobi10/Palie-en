var person = prompt("Geben Sie bitte ihren Namen ein!");

if (person == null || person == "") {
  txt = "Der Nutzer hat keine Eingabe eingegeben";
} else {alert( "Hallo " + person + "! ")} ;



var argument = prompt("Wie geht es Ihnen? ");

if (argument == null || argument == "") {
  txt = "Der Nutzer " + person +" hat keine Eingabe eingegeben! ";
} else {alert( person + "! Einen schönen Tag noch! ")} ;