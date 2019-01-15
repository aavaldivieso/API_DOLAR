
		//rates data;
		//('.indicador.usd').html(formatNumber(rates.dolar.valor));
		//('.indicador.euro').html(formatNumber(rates.euro.valor));
		//('.indicador.utm').html(formatNumber(rates.utm.valor));
		//('.indicador.uf').html(formatNumber(rates.uf.valor));
	//});


	//$('#exchange-form input').keyup(function(e){
	//	e.preventDefault();
	//	var amount = $('.clp_input').val();
	//	$('.exchange-result.usd').html(formatNumber( amount / rates.dolar.valor));
	//	$('.exchange-result.euro').html(formatNumber( amount / rates.dolar.valor));
	//	$('.exchange-result.utm').html(formatNumber( amount / rates.dolar.valor));
	//	$('.exchange-result.uf').html(formatNumber( amount / rates.dolar.valor));

	html
	<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <title>
            API_Dolar
        </title>
        <link crossorigin="anonymous" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" rel="stylesheet"/>
        <style>
        </style>
    </head>
    <body>
        <div class="container">
            <table class="table table-striped">
                <tr>
                    <td>
                        Dólar
                    </td>
                    <td id="dolar">
                    </td>
                </tr>
                <tr>
                    <td>
                        Euro
                    </td>
                    <td id="euro">
                    </td>
                </tr>
                <tr>
                    <td>
                        UF
                    </td>
                    <td id="uf">
                    </td>
                </tr>
                <tr>
                    <td>
                        UTM
                    </td>
                    <td id="utm">
                    </td>
                </tr>
            </table>
            <input id="pesos_ch" placeholder="pesos chilenos" type="number" value="">
            </input>
            <button id="b_pesos_ch">
                convertir
            </button>
            <table class="table table-striped">
                <tr>
                    <td>
                        dolar
                    </td>
                    <td>
                        euro
                    </td>
                    <td>
                        uf
                    </td>
                    <td>
                        utm
                    </td>
                </tr>
                <tr>
                    <td id="a_dolar">
                    </td>
                    <td id="a_euro">
                    </td>
                    <td id="a_uf">
                    </td>
                    <td id="a_utm">
                    </td>
                </tr>
            </table>
            <input id="USD" placeholder="dolares" type="number" value="">
            </input>
            <button id="b_dolar">
                convertir
            </button>
            <table class="table table-striped">
                <tr>
                    <td>
                        peso
                    </td>
                    <td id="Pesos">
                    </td>
                </tr>
            </table>
        </div>
        <script crossorigin="anonymous" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" src="https://code.jquery.com/jquery-3.3.1.min.js">
        </script>
        <script src="app.js">
        </script>
    </body>
</html>




js
$(document).ready(function() {
   
    var valorUtm = null;
    var valorUf = null;
    var valorEuro = null;
    var valorDolar = null;
    var dolar = $("#dolar");
    var euro = $("#euro");
    var uf = $("#uf");
    var utm = $("#utm");
    $.ajax({
        url: 'https://mindicador.cl/api',
        method: 'GET'
    }).then(function(data) {
        console.log(data);
        dolar.text(data.dolar.valor + ' pesos chilenos');
        euro.text(data.euro.valor + ' pesos chilenos');
        uf.text(data.uf.valor + ' pesos chilenos');
        utm.text(data.utm.valor + ' pesos chilenos');
        valorDolar = data.dolar.valor;
        valorEuro = data.euro.valor;
        valorUf = data.uf.valor;
        valorUtm = data.utm.valor;
    });
    $("#b_pesos_ch").on('click', function() {
        var pesos_ch = $("#pesos_ch").val();
        if (valorDolar == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_dolar').text((pesos_ch / valorDolar).toFixed(3) + ' USD');
        };
        if (valorEuro == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_euro').text((pesos_ch / valorEuro).toFixed(3) + ' EUR');
        };
        if (valorUf == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_uf').text((pesos_ch / valorUf).toFixed(3) + ' UF');
        };
        if (valorUtm == null) {
            alert("Todavia no llego información")
        } else {
            $('#a_utm').text((pesos_ch / valorUtm).toFixed(3) + ' UTM');
        };
        $("#pesos_ch").val('');
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
});
