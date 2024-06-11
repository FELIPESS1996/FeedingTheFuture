function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imgagem

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/ods.svg")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/ods.svg")
  }
}
