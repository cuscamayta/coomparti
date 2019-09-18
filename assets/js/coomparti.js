$('#clock-countdown').countdown('2019/09/29 12:00:00').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Dia%!d</span></div>'
        + '<div class="counter-box"><div class="number">%H</div><span>Horas</span></div>'
        + '<div class="counter-box"><div class="number">%M</div><span>Minutos</span></div>'
        + '<div class="counter-box last"><div class="number">%S</div><span>Segundos</span></div></div>'
    ));
});
