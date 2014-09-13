	var $usurario = $('.movilusuario'),
		$mostraru = $('.miavatar'),
		$categorias = $('.movilcategorias'),
		$mostrarcate = $('.menuMobil')

function mostrarmu(e){
	$usurario.slideToggle();
	return false
}
function mostrarmc(e){
	$categorias.slideToggle();
	return false
}

$mostraru.click(mostrarmu)
$mostrarcate.click(mostrarmc)
