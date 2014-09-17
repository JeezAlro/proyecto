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
		$omobil = $('.omobil'),
		//Prueba de incio
		$iniciar = $('.iniciar'),
		$menu = $('.menu')
function mostrarMenuUser(e){
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarCateg.toggleClass('active');
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
	$mostrarCateg.toggleClass('active');
	$mostrarMensajes.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
	$categorias.slideToggle();
	$menuUser.slideUp();
	$('.omobil').children("ul").slideUp();
	$('.omobil').children('a').removeClass('icono-menos active').addClass('icono-mas');
	return false
}

function mostrarMjs(e){
	$notimjs.addClass('none');
	$menuUser.slideUp();
	$categorias.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$popmsm.slideToggle();
	$mostrarCateg.toggleClass('active');
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
	$mostrarCateg.toggleClass('active');
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
	$mostrarCateg.toggleClass('active');
	$mostrarMensajes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'rgba(0,0,0,0.5)')

	return false

}
function ocultarMenus(e){
	$menuUser.slideUp();
	$popmsm.slideUp();
	$popnot.slideUp();
	$popord.slideUp();
	$mostrarMensajes.css('background', 'transparent')
	$mostrarOrdenes.css('background', 'transparent')
	$mostrarNotificaciones.css('background', 'transparent')
}
function mostraSubCategorias(e){
	 $(this).children('a').toggleClass('icono-mas icono-menos active');
	 $(this).siblings('.omobil').children('a').removeClass('icono-menos active').addClass('icono-mas');
	 $(this).siblings(".omobil").children("ul").slideUp();
	 $(this).children("ul").slideToggle();

	 

}
$(document).click(ocultarMenus)
$mostrarMensajes.click(mostrarMjs)
$mostrarMenu.click(mostrarMenuUser)
$mostrarNotificaciones.click(mostrarNot)
$mostrarOrdenes.click(mostrarOrd)
$mostrarCateg.click(mostrarCategorias)
$omobil.click(mostraSubCategorias)
function sesion(e){
	$menu.removeClass('none')
	$iniciar.css('display','none')
	
}
//Prueba
$iniciar.click(sesion)
