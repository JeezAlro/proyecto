	var $menuUser = $('.menuUser'),
		$mostrarMenu = $('.miavatar'),
		$categorias = $('.categoriasMobil'),
		$mostrarCateg = $('.menuMobil'),
		$mostrarMensajes = $('.icon-mail2'),
		$mostrarNotificaciones = $('.icon-bell'),
		$mostrarOrdenes = $('.icon-orden'),
		$notimjs = $('.notimjs'),
		$notinot = $('.notinot'),
		$notiord = $('.notiord'),
		$popmsm = $('.mjs'),
		$popnot = $('.not'),
		$popord = $('.ord'),
		//Prueba de incio
		$iniciar = $('.iniciar'),
		$menu = $('.menu')
function mostrarMenuUser(e){
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarMensajes.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
	$menuUser.slideToggle();
	$categorias.slideUp();
	return false
}
function mostrarCategorias(e){
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarMensajes.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
	$categorias.slideToggle();
	$menuUser.slideUp();
	return false
}

function mostrarMjs(e){
	$notimjs.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$popmsm.slideToggle();
	$mostrarNotificaciones.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarMensajes.css('background', 'rgba(0,0,0,0.5)')
	return false

}
function mostrarNot(e){
	$notinot.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popmsm.slideUp();
	$popord.slideUp();
	$popnot.slideToggle();
	$mostrarMensajes.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'rgba(0,0,0,0.5)')

	return false

}
function mostrarOrd(e){
	$notiord.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideToggle();
	$mostrarMensajes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'rgba(0,0,0,0.5)')

	return false

}
function ocultarMenus(e){
	$menuUser.slideUp();
	$categorias.slideUp();
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarMensajes.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
}
$(window).click(ocultarMenus)
$mostrarMensajes.click(mostrarMjs)
$mostrarMenu.click(mostrarMenuUser)
$mostrarNotificaciones.click(mostrarNot)
$mostrarOrdenes.click(mostrarOrd)
$mostrarCateg.click(mostrarCategorias)

function sesion(e){
	$menu.removeClass('none')
	$iniciar.css('display','none')
	
}
//Prueba
$iniciar.click(sesion)
