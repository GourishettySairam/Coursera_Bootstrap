
  $(document).ready(function()
  {
    $('#mycarousel').carousel({interval:1000});
    $('#carouselButton').click(function()
    {
      if($('#carouselButton').children('span').hasClass('fa fa-pause'))
      {
        $('#mycarousel').carousel('pause');
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
      }
      else if($('#carouselButton').children('span').hasClass('fa fa-play')){
        $('#mycarousel').carousel('cycle');
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
      }

    });

  });
  $('#closeLogin').click(function()
{
  $('#loginModal').modal('hide');
})

$('#openLogin').click(function()
{
$('#loginModal').modal('show');
})

$('#closeReserve').click(function()
{
$('#reserveModal').modal('hide');
})

$('#openReserve').click(function()
{
$('#reserveModal').modal('show');
})
