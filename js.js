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

window.addEventListener('scroll', function () {
    console.log('scroll')
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
var logoSkills = document.querySelectorAll('.parent');
var menuSkills = document.querySelector('.menuSkills');
for (let p of logoSkills ) {
    p.addEventListener('mouseover', function () {
        if (menuSkills.classList.contains('menuDesactive') == true) {
            menuSkills.classList.toggle('menuDesactive');
            $('.menuSkills').animate({ height: '500px' }, 500);
            
        }
        p.addEventListener('mouseleave', function () {
            $('.menuSkills').animate({ height: '1px' }, 500, function(){
                menuSkills.classList.toggle('menuDesactive');
                $(".menuSkills").removeAttr('style');
            });
            
        })  
    })
}
/*-----------*/
/*Navbar*/

/*variables*/
var skill = document.querySelector('.skill');
var etude = document.querySelector('.etude');
var lastScroll = 0;
var verify = false;
var body = document.body;
console.log(verify)


/*code*/
skill.addEventListener('click', function () {
    verify = true;
    if (!body.classList.contains('scroll-down')) {
        body.classList.remove('scroll-up');
        body.classList.add('scroll-down');
    }
    console.log(verify)


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
        console.log(verify)
    }

    lastScroll = currentScroll;
})

//resp  
var burgerMenu = document.querySelector('.burgerMenu')

if (burgerMenu.classList.contains('responsiveHidden') == true) {
    console.log('non')
} else {
    console.log('oui')
    burgerMenu.addEventListener('click', function (e) {
        var update = 1;
        console.log('click')
    })
    document.addEventListener('click', function () {
        if (typeof (update) != 'undefined' && update == 1) {


        } else {
            console.log('cliqué');
            // $(".burgerMenu").animate({width: '1%'},500,function(){
            //     $(".burgerMenu").removeAttr('style') ;
            //     burger.classList.toggle('responsiveHidden') ;

        }
    })
}

