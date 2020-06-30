const twoParagraph = document.querySelector('.paragraphTwo');
const oneParagraph = document.querySelector('.paragraphOne');
const sectionTitle = document.querySelector('.titleSection');

const myObj = {
    title: 'Promoção Familiar',
    textOne: 'O programa de Promoção Familiar da Casa Arte Vida é uma série de ações voltadas para o fortalecimento de vínculos familiares. Trata-se de um modelo de atendimento integrado, com facilitação e acompanhamento da equipe técnica de psicologia, assistência social e pedagogia. Este programa possibilita a participação do público atendido nas diferentes etapas do processo, tendo como premissa a  inclusão dos sujeitos na elaboração dos seus projetos de vida individual, familiar e comunitário.',
    textTwo: "A Promoção Familiar é um programa criado pela Casa Arte Vida para manter uma conexão entre os familiares, nele contem: equipe tecnica de psicologia, assistencia social e pedagogia",
};

sectionTitle.innerText = myObj.title;
oneParagraph.innerText = myObj.textOne;
twoParagraph.innerText = myObj.textTwo;

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