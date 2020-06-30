var textobj = document.querySelector('.home-text-obj');

var makertext = {

    text: "MakerLab é a sala de reunião e a oficina dos Makers, uma equipe focada em tecnologia,  nela encontra-se: equipamentos, projetos, ferramentas, e os notebooks utilizados para atividades de softwareNa sala Maker usamos a forma de aprendizagem DIY (Do it yourself) aonde é incentivado os alunos a fazerem suas próprias ideias e dar vida a elas"
};

textobj.innerText = makertext.text;

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