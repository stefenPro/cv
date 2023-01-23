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
skillResp.addEventListener('click',function(){
    $(".burgerMenu").animate({ width: '1%' }, 500, function () {
        $(".burgerMenu").removeAttr('style');
        burger.classList.toggle('responsiveHidden');
        bluring.classList.toggle('blur');
        boutonToggle.classList.toggle('active');
    });
})
etudeResp.addEventListener('click',function(){
    $(".burgerMenu").animate({ width: '1%' }, 500, function () {
        $(".burgerMenu").removeAttr('style');
        burger.classList.toggle('responsiveHidden');
        bluring.classList.toggle('blur');
        boutonToggle.classList.toggle('active');
    });
})
moreResp.addEventListener('click',function(){
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
/*fonctions*/
function numberPourcent(pourcent, number) {
    var res = (pourcent * number) / 100;
    return res;
}
function elementPosition(a) {
    var b = a.getBoundingClientRect();
    return {
        clientX: a.offsetLeft,
        clientY: a.offsetTop,
        viewportX: (b.x || b.left),
        viewportY: (b.y || b.top)
    }
}
/*Variables*/
var enfants = document.querySelectorAll('#enfant');
var parents = document.querySelectorAll('#parent');
var skillsPourcent = [95, 98, 70, 60, 40, 75];
var skillsPourcentKeys = ('html', 'css', 'javascript', 'php', 'sql', 'py')
var blocs = document.querySelectorAll('.imgBloc');
var width = 153;
console.log(width);
// logos[0].style.width = skillsPourcent[0]+'%';



for (var i = 0; i < parents.length; i++) {
    var pourcent = parseInt(skillsPourcent[i]);
    if (i == 0) {
        parents[i].style.backgroundImage = "url('html-5.png')";
        enfants[i].style.width = (pourcent) + '%';
    } else if (i == 1) {
        parents[i].style.backgroundImage = "url('css-3.png')";
        enfants[i].style.width = (pourcent) + '%';
    } else if (i == 2) {
        parents[i].style.backgroundImage = "url('script-java.png')";
        enfants[i].style.width = (pourcent) + '%';
    } else if (i == 3) {
        parents[i].style.backgroundImage = "url('php.png')";
        enfants[i].style.width = (pourcent) + '%';
    } else if (i == 4) {
        parents[i].style.backgroundImage = "url('base-de-donnees.png')";
        enfants[i].style.width = (pourcent) + '%';
    } else if (i == 5) {
        parents[i].style.backgroundImage = "url('python.png')";
        enfants[i].style.width = (pourcent) + '%';
    }
}

/*--------*/

/*Skills Hover*/
console.log(enfants[1])
for (var i = 0; i < parents.length; i++) {
    var pourcent = parseInt(skillsPourcent[i]);
    if (i == 0) {
        enfants[0].addEventListener('mouseover', function () {
            enfants[0].innerHTML = skillsPourcent[0] + '%'
        })
        enfants[0].addEventListener('mouseleave', function () {
            enfants[0].innerHTML = ''
        })

    } else if (i == 1) {
        enfants[1].addEventListener('mouseover', function () {
            enfants[1].innerHTML = skillsPourcent[1] + '%'
        })
        enfants[1].addEventListener('mouseleave', function () {
            enfants[1].innerHTML = ''
        })
    } else if (i == 2) {
        enfants[2].addEventListener('mouseover', function () {
            enfants[2].innerHTML = skillsPourcent[2] + '%'
        })
        enfants[2].addEventListener('mouseleave', function () {
            enfants[2].innerHTML = ''
        })

    } else if (i == 3) {
        enfants[3].addEventListener('mouseover', function () {
            enfants[3].innerHTML = skillsPourcent[3] + '%'
        })
        enfants[3].addEventListener('mouseleave', function () {
            enfants[3].innerHTML = ''
        })

    } else if (i == 4) {
        enfants[4].addEventListener('mouseover', function () {
            enfants[4].innerHTML = skillsPourcent[4] + '%'
        })
        enfants[4].addEventListener('mouseleave', function () {
            enfants[4].innerHTML = ''
        })

    } else if (i == 5) {
        enfants[5].addEventListener('mouseover', function () {
            enfants[5].innerHTML = skillsPourcent[5] + '%'
        })
        enfants[5].addEventListener('mouseleave', function () {
            enfants[5].innerHTML = ''
        })

    }
}

/*----------*/
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
    }else{
        console.log('oui')
        burgerMenu.addEventListener('click', function (e) {
            var update = 1;
            console.log('click')
        })
        document.addEventListener('click', function (){
            if (typeof (update) != 'undefined' && update == 1) {
    
    
            } else {
                console.log('cliqué');
                // $(".burgerMenu").animate({width: '1%'},500,function(){
                //     $(".burgerMenu").removeAttr('style') ;
                //     burger.classList.toggle('responsiveHidden') ;
    
            }
        })
    }

