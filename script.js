var dbutton = document.getElementById("dbutton");
var ebutton = document.getElementById("buttonenc");
var mensaje = document.getElementById("mensaje");
var encriptado = document.getElementById('encriptado');
var desencriptado = document.getElementById('encriptado');
var t_enc = document.getElementById("t_enc");
var aclaracion = document.getElementById("aclaracion");
var sin_mensaje = document.getElementById("sin_mensaje");
var imagen = document.getElementById('muneco');
var copyButton = document.getElementById('copyButton')
var cuadro_enc = document.getElementById("cuadro_enco");


	if (mensaje.value == "") { copyButton.style.display = 'none'; }

function encriptar() {
	
	if (mensaje.value != "") {
		encriptado.style.display= 'block';
		cuadro_enc.style.display = 'none';
		encriptado.style.background = '#daffd1';
		t_enc.innerHTML= "Su mensaje encriptado es:";
		encriptado.innerHTML= mensaje.value.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
		copyButton.style.display = 'initial';
	};

	if (mensaje.value == "") {
		t_enc.innerHTML= "";
		encriptado.style.display= 'none';
		cuadro_enc.style.display = 'block';
		encriptado.style.background = 'none';
		copyButton.style.display = 'none';
	};				
}
  
function desencriptar() {
	
	if (mensaje.value != "") {
		encriptado.style.display= 'block';
		cuadro_enc.style.display = 'none';
		encriptado.style.background = '#daffd1';
		t_enc.innerHTML= "Su mensaje desencriptado es:";
		desencriptado.innerHTML= mensaje.value.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
		copyButton.style.display = 'initial';
	};

	if (mensaje.value == "") {
		t_enc.innerHTML= "";
		encriptado.style.display = 'none';
		cuadro_enc.style.display = 'block';
		encriptado.style.background = 'none';
		copyButton.style.display = 'none';
	};	
}

function copy() {
  var aux = document.createElement("input");
  aux.setAttribute("value", encriptado.innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

dbutton.onclick = desencriptar;
ebutton.onclick = encriptar;
