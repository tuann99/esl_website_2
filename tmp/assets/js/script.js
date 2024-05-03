
/**
 * Section Blocks
 **/
$(function() {
    $('.listing').matchHeight();
    $('.listing')
        .addClass('blur')
        .css('cursor', 'pointer')
        .hover(function () {$(this).toggleClass('blur');})
        .click(function () {window.location.href = $(this).find('a').attr('href');});
});

$(function() {
    $('.ft-box').matchHeight();
});

/**
 * Residency Networks
 */
$(function(){
  $('[data-toggle="residency"]').each(function () {
      $(this).on('click', function (e) {e.preventDefault();} )
      .popover({
          trigger:'focus',
          html:true,
          title: $(this).data('title')
      })
      .tooltip({
          trigger:'hover',
          placement:'right'
      });
  });
})


$(function () {
    $('.res-list a').hover(
        function () {
            res = $(this).data('res');
            dot = $('.res-map [data-res=' + res + '] a');
            dot.tooltip('show');
        },

        function () {
            res = $(this).data('res');
            dot = $('.res-map [data-res=' + res + '] a');
            dot.tooltip('hide');
        }
    );
})
