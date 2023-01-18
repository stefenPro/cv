/*Variables*/
const boutonToggle = document.querySelector('.boutonToggle') ;
const navbarOptions = document.querySelector('ul') ;
const burger = document.querySelector('.burgerMenu') ;
const bluring = document.querySelector('.bluring') ;
const ulNavbarResp = document.querySelector('#ulNavbarResp') ;
const ulResp = $('.burgerMenu').children()[0] ;

/*Image Hover*/
$('#imgPhoto').click(function(){
    $('#imgPhoto').toggle('slow');
    });

/*Toggle Navbar Responsive*/
boutonToggle.addEventListener('click',function(){
    boutonToggle.classList.toggle('active') ;
    navbarOptions.classList.toggle('responsive') ;
})

window.addEventListener('scroll',function(){
    console.log('scroll')
})

boutonToggle.addEventListener('click',function(){
    
    if ($('.burgerMenu').hasClass('responsiveHidden') == false){
        ulResp.animate({width: '1px'},400) ;
        $(".burgerMenu").animate({width: '1%'},500,function(){
            $(".burgerMenu").removeAttr('style') ;
            burger.classList.toggle('responsiveHidden') ;
            
        }) ;
        
    }else {
        burger.classList.toggle('responsiveHidden') ;
        $(".burgerMenu").animate({width: '30%'},500,function(){
            boutonToggle.addEventListener('click',function(){
                $(".burgerMenu").removeAttr('style') ;
            })
            
        }) ;
        
        
    }   
    bluring.classList.toggle('blur') ;
})

/*---------------------------------*/

  /*Progress Bar*/
/*fonctions*/
function numberPourcent(pourcent,number){
    var res= (pourcent*number)/100;
    return res;
}
function elementPosition (a) {
    var b = a.getBoundingClientRect();
    return {
      clientX: a.offsetLeft,
      clientY: a.offsetTop,
      viewportX: (b.x || b.left),
      viewportY: (b.y || b.top)
    }
  }
/*Variables*/
var bar = document.querySelectorAll('.skillPourcentage');
var logos = document.querySelectorAll('.logoSkills');
var skillsPourcent = [95 , 98 , 70, 60 , 40, 75];
var blocs = document.querySelectorAll('.imgBloc');
var width = 153;
console.log(width);
// logos[0].style.width = skillsPourcent[0]+'%';
var skillsPourcentKeys = ('html','css','javascript','php','sql','py')


for (var i=0 ; i<logos.length ; i++){
    var widthProgress = numberPourcent(skillsPourcent[i],width).toFixed(2);
    var widthProgressReste = width-widthProgress;
    var posWidth = elementPosition(blocs[i])['clientX'];
    var posHeight = elementPosition(blocs[i])['clientY'];
    
    console.log('Progression :'+widthProgress);
    console.log('Progression reste :'+widthProgressReste);
    bar[i].style.width = + widthProgress+'px';
    bar[i].style.left = posWidth+'px';
    bar[i].style.top = posHeight+'px';
    
}


/*--------*/

