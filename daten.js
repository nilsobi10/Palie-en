var h = prompt("Geben Sie bitte Ihre Höhe in Zentimeter ein");

if(h>=0){
r = 506.25
v = Math.PI*(h/10)*r, 
l = v,
p = 12,       // Leistung pro Minute
t = l/p;

document.write("Ihre Befüllung von "+h+" Zentimeter dauert "+((t).toFixed(1)) + " Minuten. ")}

else{alert("Keine gültige Eingabe")} 