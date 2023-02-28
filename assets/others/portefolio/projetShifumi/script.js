var btn = document.getElementById('btn');
var pfc = { 'c': 'excalibur', 'p': 'bombe', 'f': 'eventail' }
var res = document.querySelector('.res');
var meText = document.querySelector('.me');
var advText = document.querySelector('.adv');
var liste = document.getElementsByTagName('ul')[0];
var li = liste.getElementsByTagName('li');
var resultat ;
var replay = document.querySelector('#replay') ;
var res = document.querySelector('.res') ;
var res2 = document.querySelector('.res2') ;
var link = document.getElementById('link') ;
var linkLoose = document.getElementById('linkLoose') ;
var linkWin = document.getElementById('linkWin') ;
var linkEgal = document.getElementById('linkEgal') ;
var bombeSound = new Audio() ; bombeSound.src = 'explosion.mp3' ;
var ventSound = new Audio() ; ventSound.src = 'vent.mp3' ;
var swordSound = new Audio() ; swordSound.src = 'sword.mp3' ;
var backgroundSound = new Audio() ; backgroundSound.src = 'zeldaLuballys.mp3' ;
var korogusImage = document.querySelector('#korogus');
res2.style.display = 'none';
res.style.display = 'none';
backgroundSound.loop = true;
backgroundSound.play() ;
linkLoose.style.display = 'none' ;
linkWin.style.display = 'none' ;
linkEgal.style.display = 'none' ;
replay.style.display = 'none' ;

replay.addEventListener('click',function(){
    document.querySelector('.boutons').style.display = 'block';
    korogusImage.style.display = 'block';
    res.style.display = 'none';
    res2.style.display = 'none';
    replay.style.display = 'none' ;
    res.innerHTML = '' ;
    res2.innerHTML = '' ;
    linkLoose.style.display = 'none' ;
linkWin.style.display = 'none' ;
linkEgal.style.display = 'none' ;
ventSound.pause() ;
bombeSound.pause();
swordSound.pause();

   })
function addBouton(name, where, text) {
    const bouton = document.createElement('button');
    bouton.setAttribute ('id',name);
    bouton.innerHTML = text;
    where.appendChild(bouton)
}

function compare(resultat,alea) {
 
    if (resultat == li[alea-1].textContent){
        res.innerHTML = 'Egalité' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent
      
    }else if (resultat=='bombe' && li[alea-1].textContent == 'eventail'){
        res.innerHTML = 'Perdu !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
        
       
    }else if(resultat=='eventail' && li[alea-1].textContent == 'bombe'){
        res.innerHTML = 'Gagné !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
    
    }else if (resultat=='bombe' && li[alea-1].textContent == 'excalibur'){
        res.innerHTML = 'Gagné !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
      
    }else if(resultat=='excalibur' && li[alea-1].textContent == 'bombe'){
        res.innerHTML = 'Perdu !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
     
    }else if (resultat=='excalibur' && li[alea-1].textContent == 'eventail'){
        res.innerHTML = 'Gagné !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
  
    }else if (resultat=='eventail' && li[alea-1].textContent == 'excalibur'){
        res.innerHTML = 'Perdu !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
   
    }else if (resultat=='excalibur' && li[alea-1].textContent == 'bombe'){
        res.innerHTML = 'Perdu !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+ '<span>'+li[alea-1].textContent+'</span>'
        
    }else if (resultat=='bombe' && li[alea-1].textContent == 'excalibur'){
        res.innerHTML = 'Gagné !' ;
        res2.innerHTML = 'Vous avez choisi'+' '+'<span>'+resultat+'</span>'+'<br>'
        +'Votre adversaire a choisi'+' '+'<span>'+ li[alea-1].textContent+'</span>'
      
    }

    if (res.textContent == 'Egalité'){
        linkEgal.style.display = 'block' ;
    }else if (res.textContent == 'Gagné !'){
        linkWin.style.display = 'block' ;
    }else if (res.textContent == 'Perdu !'){
        linkLoose.style.display = 'block' ;
    }
    bombeSound.currentTime = 0 ;
    ventSound.currentTime = 0 ;
    swordSound.currentTime = 0 ;

    if (res.textContent == 'Gagné !'){
        res.style.color = '#20c56d' ;
        if (resultat == 'bombe'){
            bombeSound.play() ;
        }else if (resultat == 'eventail'){
            ventSound.play() ;
        }else if (resultat == 'excalibur'){
            swordSound.play() ;
        }
    }else if (res.textContent == 'Perdu !'){
        res.style.color = 'red' ;
        if (li[alea-1].textContent == 'bombe'){
            bombeSound.play() ;
        }else if (li[alea-1].textContent == 'eventail'){
            ventSound.play() ;
        }else if (li[alea-1].textContent == 'excalibur'){
            swordSound.play() ;
        }

    }else if (res.textContent == 'Egalité'){
        res.style.color = '#ad9062' ;
    }
}



btn.addEventListener('click', function () {
    
    var bombeBTN = document.querySelector('.bombe')
    var eventailBTN = document.querySelector('.eventail')
    var excaliburBTN = document.querySelector('.excalibur')
    // resultat = prompt('Choisissez p , c ou f', 'Entrez la réponse ici') ;
    // console.log('Vous :'+' '+pfc[resultat]) ;
    // console.log('adversaire :'+' '+li[alea-1].textContent) ;
    // meText.innerHTML = "Vous :"+' '+pfc[resultat] ;
    // advText.innerHTML = "Votre adversaire :"+' '+li[alea-1].textContent ;
    addBouton('bombe', document.querySelector('.boutons'),'BOMBE');
    addBouton('eventail', document.querySelector('.boutons'),'EVENTAIL');
    addBouton('excalibur', document.querySelector('.boutons'),'EXCALIBUR');
    btn.style.display = 'none' ;
    link.style.display = 'none' ;
    document.querySelector('.boutons').style.display = 'block';
        bombe.addEventListener('click', function () {
            res2.style.display = 'block';
            res.style.display = 'block';
            korogusImage.style.display = 'none';
            const alea = Math.floor(Math.random() * (3 - 1 + 1) + 1);
           var resultat = pfc["p"];
           console.log(resultat) ;
           document.querySelector('.boutons').style.display = 'none';
           replay.style.display = 'block' ;
           compare(resultat,alea); 
        })
        eventail.addEventListener('click', function () {
            korogusImage.style.display = 'none';
            res2.style.display = 'block';
            res.style.display = 'block';
            const alea = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            var resultat = pfc["f"];
            console.log(resultat) ;
            document.querySelector('.boutons').style.display = 'none';
           replay.style.display = 'block' ;
           console.log(alea) ;
           compare(resultat,alea)
        })
        excalibur.addEventListener('click', function () {
            korogusImage.style.display = 'none';
            res2.style.display = 'block';
            res.style.display = 'block';
            const alea = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            var resultat = pfc["c"] ;
            console.log(resultat)   ;
            document.querySelector('.boutons').style.display = 'none';
           replay.style.display = 'block' ;
           console.log(alea) ;
           compare(resultat,alea);
        })
},{once : true})



