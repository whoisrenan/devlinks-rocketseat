function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  // ou de forma mais completa usando o if:
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light');
  // }else {
  //   html.classList.add('light');
  // }

  // pegar a tag img.
  const img = document.querySelector("#profile img");
  //  substituir a imagem.
  if (html.classList.contains("light")) {
    // Se tiver no light mode, adicionar a imagem light.
    img.setAttribute("src", "images/avatar-light.png");
    img.setAttribute(
      "alt",
      "foto de renan em uma praça usando óculos de grau e barba"
    );
  } else {
    //  Se tiver no dark mode, manter a imagem original.
    img.setAttribute("src", "images/avatar.png");
  }
}
