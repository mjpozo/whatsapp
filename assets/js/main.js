
$(document).ready(function(){

	function miHora(){
		var now = Date();
		var hour = now.split(" ")[4].split(":");

		var horaActual = [];
		horaActual.push(hour[0]);
		horaActual.push(hour[1]);
		return horaActual.join(":");
	}

	function enviando(){
		var miMensaje = $("#message").val();

		var arreglo = [];
		arreglo.push(miMensaje);
		if (miMensaje != ""){
			for (i=0 ; i<arreglo.length ; i++){
				var position = localStorage.length;
				localStorage.setItem(position,miMensaje);
				var cont = localStorage.getItem(position);
				$(".send").append('<div class="message-send"><p>' + cont + '</p><p>' + miHora() + '</p></div>');
				document.getElementById("message").value = "";
			}
		}
	}

	$(".btn-microphone").click(function(){
		enviando();
	})

	$("body").keydown(function(event) {
		if (event.keyCode == 13){
			event.preventDefault();
			enviando();
		}
	});

	$(".historial").click(function(){
		$(".send").empty();
		$(".actual-profile").attr('src', $(this).children('div').children("img").attr("src"));
		console.log($(this).children('div').children(".bold").text())
		$(".actual-nick").html($(this).children('div').children(".bold").text())
		$("span").html(miHora());
	})
})