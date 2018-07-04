
$(document).ready(function(){
    
    var slideItems = $(".slider li").length;
    var slidePos = 1;

    //pagination
    for(i = 1; i <= slideItems; i++){
        $(".pagination").append('<li><span class="fas fa-circle"></span></li>');
    }
    
    $(".slider li").hide();
    $(".slider li:first").show();
    $(".pagination li:first").css({"color": "gray"});

    //ejecuto las funciones
    $(".pagination li").click(pagination);
    $('.right span').click(nextSlider);
	$('.left span').click(prevSlider);

    //Funciones ----------

    function pagination(){

        var paginationPos = $(this).index() + 1;
        console.log(paginationPos);

        $(".slider li").hide();
        $(".slider li:nth-child("+ paginationPos +")").fadeIn();//muestro el slide

        $(".pagination li").css({"color": "#3b4a4e"});
        $(this).css({"color": "gray"})

    }

    function nextSlider(){
        if(slidePos >= slideItems){
            slidePos = 1;
        }else{
            slidePos++;
        }

        $(".pagination li").css({"color": "#3b4a4e"});
        $(".pagination li:nth-child("+ slidePos +")").css({"color": "gray"})

        $(".slider li").hide();
        $(".slider li:nth-child("+ slidePos +")").fadeIn();

    }

    function prevSlider(){
        if(slidePos <= 1){
            slidePos = slideItems;
        }else{
            slidePos--;
        }

        $(".pagination li").css({"color": "#3b4a4e"});
        $(".pagination li:nth-child("+ slidePos +")").css({"color": "gray"})

        $(".slider li").hide();
        $(".slider li:nth-child("+ slidePos +")").fadeIn();
    }
})