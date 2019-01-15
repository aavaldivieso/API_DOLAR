//var rates {};
$(document).ready(function(){

	$.ajax({
		url: 'https://mindicador.cl/api',
		method: 'GET'

	}).then(function(data){
		console.log(data);
		$('#dolar').text(data.dolar.valor);
		$('#euro').text(data.euro.valor);
		$('#utm').text(data.utm.valor);
		$('#uf').text(data.uf.valor);
	});

	$('#button').on('click', function(e){
		evento.preventDefault();

	})