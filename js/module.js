/// Make day and night buttons
let func = {
    maDay:function (){
        document.body.classList.remove('night');
        document.querySelector('.aboutuser').classList.remove('night__aboutuser');
        document.querySelector('.header__tab').classList.remove('night__header');
        document.querySelector('.infouser').classList.remove('night__infouser');
        document.querySelector('.link').classList.remove('night__link');
        document.querySelector('.daynig').classList.remove('night__daynight');
        document.querySelector('.daynight').classList.remove('night__daynight');
        document.querySelector('.textsearch').classList.remove('night__textsearch');
        document.querySelector('.infoab').classList.remove('night__infoab');
        imgs.classList.remove('night__imgs')
    },
    maNight: function (){
        document.body.classList.add('night');
        document.querySelector('.aboutuser').classList.add('night__aboutuser');
        document.querySelector('.header__tab').classList.add('night__header');
        document.querySelector('.infouser').classList.add('night__infouser');
        document.querySelector('.link').classList.add('night__link');
        document.querySelector('.daynig').classList.add('night__daynight');
        document.querySelector('.daynight').classList.add('night__daynight');
        document.querySelector('.textsearch').classList.add('night__textsearch');
        document.querySelector('.infoab').classList.add('night__infoab')
       imgs.classList.add('night__imgs')
    }
}
export const makenight = func.maNight;
export const makeday = func.maDay 

