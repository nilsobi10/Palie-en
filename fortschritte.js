var person = prompt("Geben Sie bitte ihren Namen ein!");


 if (person == null || person == "" || person <= 13 || person > 13) 
  {
     alert("Der Nutzer hat keine Eingabe eingegeben") ;
  }

else {
   alert( "Hallo " + person + "! ")
  };



var argument = prompt("Wie geht es dir, " +person+ " ?");



if (person == null || person == "" || person <= 13 || person > 13)
{
  alert("Dem Nutzer geht es "+argument+" "+"!");
}

else{if(argument== null || argument == ""){alert("Der Nutzer hat kein Eingabe eingegeben! " )} 
else{
  alert("Dem Nutzer "+person+" geht es "+argument+" "+"!")}
};


