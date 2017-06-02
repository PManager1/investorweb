$(document).ready(function(){
    $('#chk-click').bootstrapToggle({
      on: 'Monthly',
      off: 'Yearly'
    }).change(function(){
       $("#monthly").toggle();
       $("#yearly").toggle();
    });
    
});