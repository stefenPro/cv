var cvLogo = document.querySelector('#logoCV');
var cvDeroule = document.querySelector('.cvDeroule');
cvLogo.addEventListener('mouseover',function(){
    $('.cvDeroule').animate({width : '370px'},400)
    $('.cvDerouleText').animate({fontSize : '1em'},400);
    console.log('bjr')
})

cvLogo.addEventListener('mouseleave',function(){
    $('.cvDeroule').animate({width : '0px'},400);
    $('.cvDerouleText').animate({fontSize : '0'},400);
    
})