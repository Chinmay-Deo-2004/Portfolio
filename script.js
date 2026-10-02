document.documentElement.classList.add('js');
const root=document.documentElement,button=document.querySelector('[data-theme-toggle]');
try{root.dataset.theme=localStorage.getItem('chinmay-theme')||'light'}catch(e){root.dataset.theme='light'}
button?.addEventListener('click',()=>{const next=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=next;try{localStorage.setItem('chinmay-theme',next)}catch(e){}});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const greeting=document.querySelector('[data-typing]');if(greeting){const value=greeting.dataset.typing;let index=0;const type=()=>{greeting.textContent=value.slice(0,++index);if(index<value.length)setTimeout(type,90)};type()}
document.querySelectorAll('.assemble').forEach(el=>{el.innerHTML=el.textContent.trim().split(/\s+/).map(word=>`<span>${word}</span>`).join(' ')});
const reveal=[...document.querySelectorAll('.reveal,.assemble')];if('IntersectionObserver'in window){const observer=new IntersectionObserver(items=>items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('show');observer.unobserve(item.target)}}),{threshold:.14});reveal.forEach(el=>observer.observe(el))}else{reveal.forEach(el=>el.classList.add('show'))}
document.querySelectorAll('img[data-fallback]').forEach(image=>image.addEventListener('error',()=>{image.src=image.dataset.fallback},{once:true}));
const portraitGlass=document.createElement('style');portraitGlass.textContent='.hero-photo{background:linear-gradient(90deg,rgba(16,28,45,.83),rgba(23,35,53,.58) 54%,rgba(38,48,63,.38)),url("images/chinmay-portrait.jpg") center/cover!important;filter:saturate(.78) contrast(.96)!important}.hero-photo:after{content:"";position:absolute;inset:0;background:rgba(166,178,192,.16);backdrop-filter:blur(1px)}';document.head.appendChild(portraitGlass);
/* =========================================================
   HOBBY COLLAGE INTERACTION
   ========================================================= */

document.querySelectorAll(".art-collage").forEach((collage) => {
  const pieces = collage.querySelectorAll(".art-piece");

  pieces.forEach((piece) => {
    piece.addEventListener("mousemove", (event) => {
      if (window.innerWidth <= 800) return;

      const rect = piece.getBoundingClientRect();

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      piece.style.transform = `
        translate(${x * 8}px, ${y * 8}px)
        translateY(-12px)
        rotate(0deg)
        scale(1.045)
      `;
    });

    piece.addEventListener("mouseleave", () => {
      piece.style.transform = "";
    });
  });
});

/* =========================================================
   HOBBY COLLAGE LIGHTBOX
   ========================================================= */

const collageImages = Array.from(
  document.querySelectorAll(".art-collage .art-piece")
);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

let currentImageIndex = 0;


/* ---------------------------------------------------------
   OPEN
   --------------------------------------------------------- */

function openLightbox(index) {
  if (!collageImages.length) return;

  currentImageIndex = index;

  const item = collageImages[currentImageIndex];
  const image = item.querySelector("img");
  const caption = item.querySelector("figcaption");

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;

  lightboxCaption.textContent = caption
    ? Array.from(caption.querySelectorAll("span"))
        .map((span) => span.textContent)
        .join(" / ")
    : "";

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}


/* ---------------------------------------------------------
   CLOSE
   --------------------------------------------------------- */

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  /*
   * Clear the image after the fade-out.
   */
  setTimeout(() => {
    if (!lightbox.classList.contains("is-open")) {
      lightboxImage.src = "";
    }
  }, 300);
}


/* ---------------------------------------------------------
   NAVIGATION
   --------------------------------------------------------- */

function showPrevious() {
  currentImageIndex =
    (currentImageIndex - 1 + collageImages.length) %
    collageImages.length;

  openLightbox(currentImageIndex);
}

function showNext() {
  currentImageIndex =
    (currentImageIndex + 1) %
    collageImages.length;

  openLightbox(currentImageIndex);
}


/* ---------------------------------------------------------
   CLICK IMAGE
   --------------------------------------------------------- */

collageImages.forEach((item, index) => {
  item.addEventListener("click", () => {
    openLightbox(index);
  });
});


/* ---------------------------------------------------------
   BUTTONS
   --------------------------------------------------------- */

lightboxClose.addEventListener("click", closeLightbox);

lightboxPrev.addEventListener("click", showPrevious);

lightboxNext.addEventListener("click", showNext);


/* ---------------------------------------------------------
   CLICK BACKDROP
   --------------------------------------------------------- */

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});


/* ---------------------------------------------------------
   KEYBOARD
   --------------------------------------------------------- */

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;

  switch (event.key) {
    case "Escape":
      closeLightbox();
      break;

    case "ArrowLeft":
      showPrevious();
      break;

    case "ArrowRight":
      showNext();
      break;
  }
});