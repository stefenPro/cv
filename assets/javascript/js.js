/*RESPONSIVE*/
const
    screen = {
        small: 0,
        medium: 400,
        large: 800
    };
function resizeHandler() {

    // get window width
    const iw = window.innerWidth;

    // determine named size
    let size = null;
    for (let s in screen) {
        if (iw >= screen[s]) size = s;
    }
    return size;
}





/*Variables*/
const boutonToggle = document.querySelector('.boutonToggle');
const navbarOptions = document.querySelector('ul');
const burger = document.querySelector('.burgerMenu');
const bluring = document.querySelector('.bluring');
const ulNavbarResp = document.querySelector('#ulNavbarResp');
const ulResp = $('.burgerMenu').children()[0];

/*Image Hover*/
$('#imgPhoto').click(function () {
    $('#imgPhoto').toggle('slow');
});

/*Toggle Navbar Responsive*/
boutonToggle.addEventListener('click', function () {
    boutonToggle.classList.toggle('active');
    navbarOptions.classList.toggle('responsive');
})


/*Responsive*/
var skillResp = document.querySelector('.skillResp')
var etudeResp = document.querySelector('.etudeResp')
var moreResp = document.querySelector('.moreResp')
skillResp.addEventListener('click', function () {
    $(".burgerMenu").animate({ width: '1%' }, 500, function () {
        $(".burgerMenu").removeAttr('style');
        burger.classList.toggle('responsiveHidden');
        bluring.classList.toggle('blur');
        boutonToggle.classList.toggle('active');
    });
})
etudeResp.addEventListener('click', function () {
    $(".burgerMenu").animate({ width: '1%' }, 500, function () {
        $(".burgerMenu").removeAttr('style');
        burger.classList.toggle('responsiveHidden');
        bluring.classList.toggle('blur');
        boutonToggle.classList.toggle('active');
    });
})
moreResp.addEventListener('click', function () {
    $(".burgerMenu").animate({ width: '1%' }, 500, function () {
        $(".burgerMenu").removeAttr('style');
        burger.classList.toggle('responsiveHidden');
        bluring.classList.toggle('blur');
        boutonToggle.classList.toggle('active');

    });
})

/**/

boutonToggle.addEventListener('click', function () {
    if ($('.burgerMenu').hasClass('responsiveHidden') == false) {
        $(".burgerMenu").animate({ width: '1%' }, 500, function () {
            $(".burgerMenu").removeAttr('style');
            burger.classList.toggle('responsiveHidden');

        });

    } else {
        burger.classList.toggle('responsiveHidden');
        if (resizeHandler() == 'medium' || resizeHandler() == 'small') {
            $(".burgerMenu").animate({ width: '60%' }, 500, function () {
                boutonToggle.addEventListener('click', function () {
                    $(".burgerMenu").removeAttr('style');
                })

            });

        } else {
            $(".burgerMenu").animate({ width: '30%' }, 500, function () {
                boutonToggle.addEventListener('click', function () {
                    $(".burgerMenu").removeAttr('style');
                })

            });
        }



    }
    bluring.classList.toggle('blur');
})

/*---------------------------------*/

/*Progress Bar*/
var skills = document.querySelectorAll('.logoSkill');
for (var skilled=0 ; skilled<skills.length ; skilled++){
    
    skills[skilled].addEventListener('click',function(){
        console.log(skilled);
        
        
})

}


/*-----------*/
/*Header dissipear when scroll down*/

/*variables*/
var skill = document.querySelector('.skill');
var etude = document.querySelector('.etude');
var lastScroll = 0;
var verify = false;
var body = document.body;



/*code*/
skill.addEventListener('click', function () {
    verify = true;
    if (!body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    


})
etude.addEventListener('click', function () {
    if (!body.classList.contains('scroll-down')) {
        body.classList.add('scroll-down');
    }

    // boutonToggle.classList.toggle('active') ;
    // navbarOptions.classList.toggle('responsive') ;
})
window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;
    verify = false;
    if (currentScroll <= 0) {

        body.classList.remove('scroll-up')
    }
    if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {

        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    if (currentScroll < lastScroll && body.classList.contains('scroll-down') && !verify) {
        body.classList.remove('scroll-down');
        body.classList.add('scroll-up');
       
    }

    lastScroll = currentScroll;
})

//resp  
var burgerMenu = document.querySelector('.burgerMenu')

if (burgerMenu.classList.contains('responsiveHidden') == true) {
    
} else {

    burgerMenu.addEventListener('click', function (e) {
        var update = 1;
       
    })
    document.addEventListener('click', function () {
        if (typeof (update) != 'undefined' && update == 1) {


        } 
    })
}

/*form*/
var form = document.querySelector('.formul');
var contactButton = document.querySelector('.contact');
var arrow = document.querySelectorAll('.logoArrow');
var signalProblem = document.querySelector('.signalAlert')
contactButton.addEventListener('click',function(){
        contactButton.classList.toggle('magentaToggle');
        arrow[0].classList.toggle('rotate');
        arrow[1].classList.toggle('rotateRight');
        arrow[1].classList.toggle('arrowRight');
    if (form.classList.contains('menuDesactive')==true){
        form.classList.toggle('menuDesactive');
        $('.formul').animate({ height: '1000px' }, 500)
    }else if(form.classList.contains('menuDesactive')==false) {
        $('.formul').animate({ height: '1px' }, 500,function(){
            $(".formul").removeAttr('style');
            form.classList.toggle('menuDesactive');
            
            
            
        })   
    }
   
})

signalProblem.addEventListener('click',function(){
    if (form.classList.contains('menuDesactive')){
        form.classList.toggle('menuDesactive');
        $('.formul').animate({ height: '1000px' }, 500);
        contactButton.classList.toggle('magentaToggle');
        arrow[0].classList.toggle('rotate');
        arrow[1].classList.toggle('rotateRight');
        arrow[1].classList.toggle('arrowRight');
    }
})
var mainInput = document.querySelector('.mainInput');
var submitContactButton = document.querySelector('.submitContact');
var objectMail = document.querySelector('objectMail');
submitContactButton.addEventListener('click',function(e){
    e.preventDefault();
})