var person = prompt("Geben Sie bitte ihren Namen ein!");

if (person == null || person == "" || person <= 13 || person > 13) {
  alert("Der Nutzer hat keine Eingabe eingegeben") ;
} else {alert( "Hallo " + person + "! ")} ;



var argument = prompt("Wie geht es Ihnen? ");

if (argument == null || argument == "" || argument <= 13 || argument  > 13){alert( "Der Nutzer " + person +" hat keine Eingabe eingegeben! ")}
else{alert("Info: Ihr Name lautet " + person +" und Ihnen geht es "+ argument+ " !")} ;