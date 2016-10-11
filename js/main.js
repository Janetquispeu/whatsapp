window.addEventListener("load",cargar);

function cargar(){
	var mensajes=document.getElementById("mensajes");
	mensajes.addEventListener("keydown",imprimirMensaje);
}
function imprimirMensaje(e){
	if(this.value.trim().length!=0){
		if (e.keyCode==13) {

			var chat=document.getElementById("chat");
			var container=document.createElement("div");
			var mensajeText=document.createElement("div");
			var textP=document.createElement("p");
			var time=document.createElement("div");

			chat.appendChild(container);
			container.appendChild(mensajeText);
			mensajeText.appendChild(textP);
			mensajeText.appendChild(time);
			textP.textContent=this.value;
			this.value="";

			container.classList.add("w-message","w-message-out");
			mensajeText.classList.add("w-message-text");

			var fecha = new Date();
	        var hora = fecha.getHours();
	        var minuto = fecha.getMinutes();
	        if(minuto < 10) {
	               minuto = "0" + minuto;
	        }

	        var horaImprime = hora + " : " + minuto;
	        var hora = document.createElement("div");
	        
	        hora.innerText = horaImprime;
	        mensajeText.insertBefore(hora, mensajeText.childNodes[1]);
		}
	}
}