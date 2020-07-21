var h = prompt("Geben Sie bitte Ihre Höhe in Zentimeter ein"),
r = 506.25
v = Math.PI*(h/10)*r, 
l = v,
p = 12,       // Leistung pro Minute
t = l/p;
alert("Die Befüllung dauert "+t+" Minuten. ")
