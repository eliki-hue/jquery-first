jQuery(document).ready(function(){
    jQuery('h1').click(function(){
        alert("This is a heading tag")
      });
    
      jQuery('p').click(function(){
          
        alert("This is a paragraph")
      });
    
      jQuery('img').click(function(){
        alert("This is an image")
      });
      $('#clicable').click(function (){
        $('#hidden').slideToggle();
      })

      $("button#green").click(function() {
        $('body').removeClass()
        $("body").addClass("green-background");
      });

      $("button#yellow").click(function() {
        $('body').removeClass()
        $("body").addClass("yellow-background");
      });

      $("button#red").click(function() {
        $('body').removeClass()
        $("body").addClass("red-background");
      });

      $("button#blue").click(function() {
        $('body').removeClass()
        $("body").addClass("blue-background");
      })

      $("button#light").click(function() {
        $('body').removeClass()
        $("body").addClass("light-background");
      });

})
