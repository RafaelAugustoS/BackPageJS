$(function(){
   var url;
   $(document).on('click', '.butao', function(){
       url = $(this).attr('data-url');
       $(document).on('click', '.btn-voltar', function(){
           activate_subpage('#'+url);
           console.log(url);
       });
   });
});