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
var objectMail = document.querySelector('#objectMail');
var mailExp = document.querySelector('#mail')
var emailVerify = document.querySelector('.emailVerify')

/*REGEXS*/
regexs = {'mail' : new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$') , 'object' : new RegExp('^[a-zA-Z0-9.-_]')}
var valid = {}



mailExp.addEventListener('change',function(){
    if (regexs['mail'].test(mailExp.value)==false){
        valid['mail']=false ;
        if (document.getElementById('erreurMail').classList.contains('menuDesactive')==true){
            document.getElementById('erreurMail').classList.toggle('menuDesactive')
        }
        
        document.getElementById('erreurMail').innerHTML = 'Ce format de mail n\'est pas valide !'
    }else {
        valid['mail']=true ;
        if (document.getElementById('erreurMail').classList.contains('menuDesactive')==false){
            document.getElementById('erreurMail').innerHTML = ''
            document.getElementById('erreurMail').classList.toggle('menuDesactive')
        }
        document.getElementById('erreurMail').innerHTML = '';
        mainInput.value = 'De : '+mailExp.value
    }
})

objectMail.addEventListener('change',function(){
    console.log(regexs['object'].test(objectMail.value))
    if (regexs['object'].test(objectMail.value)==true && objectMail.value.length>1 && objectMail.value.length<30){
        console.log('oui')
        valid['object']=true
        if (document.getElementById('erreurObject').classList.contains('menuDesactive')==false){
            document.getElementById('erreurObject').innerHTML = ''
            document.getElementById('erreurObject').classList.toggle('menuDesactive')
        }
        
    }else {
        document.getElementById('erreurObject').classList.toggle('menuDesactive')
        if (objectMail.value.length<=1){
            document.getElementById('erreurObject').innerHTML = 'Trop court !'
        }else {
            document.getElementById('erreurObject').innerHTML = 'Trop Long ! 30 Caractères Max.'
        }
        valid['object']=false
        
    }
})
/*-------------------------------*/

submitContactButton.addEventListener('click',function(e){
    e.preventDefault();
    if (valid['object']=true && valid['mail']==true){
        Email.send({
            SecureToken : "dd803a52-c718-47c0-a61f-f6260ebb02c5",
            To : 'selonstefen@gmail.com',
            From : "arkobtrd@gmail.com",
            Subject : objectMail.value,
            Body : mainInput.value
        }).then(
          message => alert(message)
        );
    }else if(valid==false) {
        document.querySelector('#erreurGlob').innerHTML = 'Veuillez corriger'
    }
    
})


/*cvConstruct*/
var screenOne = document.querySelector('#screenHTML')
screenOne.addEventListener('click',function(){
    this.animate({height: '1px'},500)
})




