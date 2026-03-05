const slides = [
  {
    image: "./img/carrossel/ph50.jpg",
    title: "Inspire-se",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Architecto cumque delectus ab assumenda eveniet aliquid sequi, suscipit, error sint dolorem optio. Quos facere suscipit repellendus tempore soluta numquam nihil totam?",
    title_description: "Sala de Estar"
  },
  {
    image: "./img/carrossel/rolo.jpg",
    title: "Inspire-se",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Architecto cumque delectus ab assumenda eveniet aliquid sequi, suscipit, error sint dolorem optio. Quos facere suscipit repellendus tempore soluta numquam nihil totam?",
    title_description: "Cozinha"
  },
  {
    image: "./img/carrossel/vertical.jpg",
    title: "Inspire-se",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Architecto cumque delectus ab assumenda eveniet aliquid sequi, suscipit, error sint dolorem optio. Quos facere suscipit repellendus tempore soluta numquam nihil totam?",
    title_description: "Banheiro"
  }
];

let current = 0;

const image = document.getElementById("carousel-image");
const title = document.getElementById("carousel-title");
const text = document.getElementById("carousel-text");
const title_description = document.getElementById("title_description");

document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

// FUNÇÕES DE NAVEGAÇÃO
function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
}

const slide = document.querySelector(".slide");

function updateSlide() {
  // começa a saída
  slide.classList.add("slide-out");

  setTimeout(() => {
    // troca conteúdo no meio da animação
    image.src = slides[current].image;
    title.textContent = slides[current].title;
    text.textContent = slides[current].text;
    title_description.textContent = slides[current].title_description;

    // entra novamente
    slide.classList.remove("slide-out");
    slide.classList.add("slide-in");

    // limpa a classe
    setTimeout(() => {
      slide.classList.remove("slide-in");
    }, 500);

  }, 500);
}

// AUTOPLAY
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 2000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

// INICIALIZA
updateSlide();
startAutoSlide();