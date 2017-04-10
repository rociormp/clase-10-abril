var causas = [
  "Tumores Malignos",
  "Enfermedades Endocrinas, Nutricionales y Metabólicas",
  "Enfermedades del Sistema Circulatorio",
  "Enfermedades del Sistema Respiratorio",
  "Enfermedades del Sistema Digestivo",
  "Ciertas Enfermedades Infecciosas y Parasitarias",
  "Malformaciones Congénitas, Deformidades y Anomalías Cromosómicas",
  "Síntomas, Signos y Hallazgos Anormales Clínicos y de Laboratorio, No Clasificados en Otra Parte",
  "Causas Externas",
]

var muertes = [6967,1386,8092,3092,2255,768,396,850,2583]

//causas.push("Matrix");
//muertes.push(4);

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight/2);
  canvas.parent('rocio');
  noLoop();
}

function windowResized() {
  //este ajuste es cuma: no estoy ajustando el ancho en relación al canvas, sino a la ventana
  //fíjense que también estoy utilizando el CSS para ajustar un ancho máximo de 100%
  resizeCanvas(windowWidth, windowHeight/2);
}

function draw() {
  background(255);
  for(var x = 0; x <= causas.length; x++){
    noStroke();
    //defino el blanco con 100/255 de transparencia
    fill(76,0,153);
    // el tamaño del texto es igual a la cantidad de muertes ganados * 3

    rect(((width/(causas.length+1))*(x+1)),(height/3), 45, -(muertes[x]/150));
    textSize(20);
    // aquí dame el nro. de oscar ganado y ubícalo en una parte del ancho del canvas
    text(muertes[x], ((width/(causas.length+1))*(x+1)), (height/2));
    //re-defino el blanco
    fill(0);
    // ahora cambia el tamaño de texto a 12 px, como valor fijo para todo lo que sigue
    textSize(12);
    // dame el nombre de la película correspondiente y ubícala en una parte del ancho
    text(causas[x], ((width/(causas.length+1))*(x+1)), ((height/2)+12),((windowWidth/(causas.length+1))-50),100);
  }
}
