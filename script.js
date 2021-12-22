function getCita(){
  $.getJSON("https://raw.githubusercontent.com/bitgary/hola-mundo/master/citas.json", 
     function(json){
       var htmlCita = "", htmlAutor = "";
       var citaAleatoria = Math.floor(Math.random() * json.length);
       var tweet = document.getElementById("tweet");  
        
       htmlCita += json[citaAleatoria].cita;
       htmlAutor += json[citaAleatoria].autor;  
      $("#cita").html(htmlCita);
       $("#autor").html(htmlAutor);
       tweet.onclick = function() {
         var url = "https://www.twitter.com/intent/tweet?hashtags=Frase&via=garybit&text="+htmlCita+". "+htmlAutor;
         window.open(url, "_blank", 'width=550,height=420');
         return false;
       };
       $("#wikipedia").attr("href","https://es.wikipedia.org/wiki/"+htmlAutor);
  });
}

getCita();

$(document).ready(function () {
 $('#get-cita').click(function () {
    getCita();
 });
});