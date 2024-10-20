async function leerPaises() {
  const requestURL ="https://raw.githubusercontent.com/joangute/javascript-dashboard/main/files/tabla.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const tabla = await response.json();
  llenarTabla(tabla);
}

function llenarTabla(x){
  console.log(x);
}
leerPaises();