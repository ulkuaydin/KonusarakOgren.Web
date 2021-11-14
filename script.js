
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    navText:["<img src='assets/images/arrow_back_ios_black_24dp.svg' alt='previous' />","<img src='assets/images/arrow_forward_ios_black_18dp.svg' alt='next' />"],
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
          
        }
    }
})
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});


var nav = document.getElementById('header');
var li = document.querySelectorAll(".li");
window.onscroll = function(){
    if(window.scrollY >= 200){
        nav.classList.add("navbar-color");
        for(i = 0; i < li.length; i++){
            li[i].classList.add("list-color");
        }
    }
    else{
        nav.classList.remove("navbar-color");
        for(i = 0; i < li.length; i++){
            li[i].classList.remove("list-color");
        }
    }
}

function sendHtml(){
    var comment = document.getElementById("comment").value;
    var value = document.getElementById("value");
    var div = document.createElement("div");
    div.setAttribute("id","div");
    div.classList.add("all-comments");
    var h3 = document.createElement("h3");
    h3.innerHTML = "Anonim";
    div.appendChild(h3);
    var text = document.createElement("div");
    text.classList.add("all-comments__text");
    div.appendChild(text);
    var p = document.createElement("p");
    text.appendChild(p);
    p.classList.add("all-comments__text__p");
    p.innerText = comment;
    var button = document.createElement("button");
    button.innerHTML = "Sil";
    button.classList.add("all-comments__text__button");
    button.type = "submit";
    button.onclick = function(){
        this.parentElement.parentElement.remove();
      };
      text.appendChild(button);
   value.appendChild(div);
    
   
   
   
    
   
    

}




function openMenu(){
    document.getElementById("menu").classList.toggle("show");

}
window.onclick = function(event) {
    if (!event.target.matches('.hamburger')) {
      var menu = document.getElementsByClassName("menu");
      var i;
      for (i = 0; i < menu.length; i++) {
        var openMenu = menu[i];
        if (openMenu.classList.contains('show')) {
          openMenu.classList.remove('show');
        }
      }
    }
  }