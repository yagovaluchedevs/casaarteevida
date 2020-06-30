const textTitle = document.querySelector('.home-title');
const textParagraph = document.querySelector('.home-paragraph');

var myObj = {
    title: "Atividades Socioeducativas",
    text: "Usamos compreensão das inteligências múltiplas e o STEAM para ajudar a criar uma mente mais criativa e entender os valores da sociedade  e suas resposabilidades, utilizando arte, leitura, aulas socio ambientais e atividades estimulantes para a autonomia"
};

textTitle.innerText = myObj.title;
textParagraph.innerText = myObj.text;

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

function showSlides(n) 
{
    var slides = document.getElementsByClassName("carrousel");

    if(n > slides.length) 
    {
        slideIndex = 1;  
    }
    if(n < 1)
    {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    
    return slides[slideIndex-1].style.display = "block";
}