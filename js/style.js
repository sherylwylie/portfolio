function openNav() {
  document.getElementById("mysidenav").style.width = "150px";
  console.log($('#mysidenav'))
  $('#menu').hide();
  $('#menu2').hide();
}

function closeNav() {
  document.getElementById("mysidenav").style.width = "0px";
  $('#menu').show();
  $('#menu2').show();
}
