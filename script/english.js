const textTitle = document.querySelector('.home-title');
const textParagraph = document.querySelector('.home-paragraph');

const myObj = 
{
    title: "Inglês",
    text: "Para o ensino da língua inglesa, foi criado uma metodologia aonde mostra aos alunos as diferentes culturas utilizando recursos tecnológicos como, vídeo conferencia, vídeos ao vivo, demonstrando em projetores, e até mesmo com visitas a casa arte e vida"
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