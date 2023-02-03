/*cvConstruct*/
var screenOne = document.querySelector('.screenJS')
screenOne.addEventListener('click',function(){
    $('.screenJS').animate({height: '1px'},500,function(){
        $('.screenJS').animate({height: '50%'},500)
    })
})