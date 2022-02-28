
let elVersionBtn = document.getElementById('versionBtn');

elVersionBtn.addEventListener('click', function(){
  document.body.classList.toggle('dark');
  document.getElementById('versionBx').classList.toggle('bxs-sun')
})

// Heading

var test = document.getElementById("test");

var text = "Oygul Ibrokhimova";
var result = "";
window.addEventListener("load", (event) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(function () {
      result += text[i];
      test.innerHTML = result;
    }, 160 * i);
  }
});



ScrollReveal().reveal('.heading',{
  origin:'top',
  duration: 1000,
  distance: '50px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.about__info',{
  origin:'left',
  duration: 1000,
  distance: '250px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.about__courses',{
  origin:'right',
  duration: 1000,
  distance: '250px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.experience__list',{
  origin:'bottom',
  duration: 1000,
  distance: '150px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.education__list',{
  origin:'bottom',
  duration: 1000,
  distance: '150px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.portfolio__item',{
  origin:'bottom',
  duration: 1000,
  distance: '150px',
  scale: '0.5',
  reset: true,
  delay:100
}
);
ScrollReveal().reveal('.blog__item',{
  origin:'bottom',
  duration: 1000,
  distance: '150px',
  scale: '0.5',
  reset: true,
  delay:500
}
);
ScrollReveal().reveal('.contact__form',{
  origin:'right',
  duration: 1000,
  distance: '250px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.contact__desc',{
  origin:'left',
  duration: 1000,
  distance: '250px',
  scale: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.hero__img',{
  origin:'left',
  duration: 1000,
  scale: '0.5',
  opacity: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.hero__heading',{
  origin:'top',
  duration: 1000,
  scale: '0.5',
  opacity: '0.5',
  reset: true
}
);
ScrollReveal().reveal('.skills__item',{
  origin:'bottom',
  duration: 1000,
  distance: '150px',
  scale: '0.5',
  reset: true,
  delay:500
}
);



