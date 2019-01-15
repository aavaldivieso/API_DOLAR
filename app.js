$(document).ready(function(){

	$.ajax({
		url: 'https://mindicador.cl/api',
		method: 'GET'

	}).then(function(data){
		console.log(data);
		$('#dolar').text(data.dolar.valor + ' pesos chilenos');
		$('#euro').text(data.euro.valor + ' pesos chilenos');
		$('#utm').text(data.utm.valor + ' pesos chilenos');
		$('#uf').text(data.uf.valor + ' pesos chilenos');
	});

	$('#b_pesos_ch').on('click', function(){
		var pesos_ch = $("#pesos_ch").val();	
	});
	$("#b_dolar").on('click', function() {
        var usd = $('#USD').val();
        if (valorDolar == null) {
            alert("Todavia no llego información")
        } else {
            $("#Pesos").text(usd * valorDolar + ' CHP');
        };
        $('#USD').val('');
    });
	})