function app(){
  nav();
  initRoot();
  homePage();
}

function nav(){
  var navEle = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.innerHTML="Display Notes";
  homeButton.addEventListener("click", function(){
    homePage();
  })
  var aboutButton = document.createElement("button");
  aboutButton.innerHTML="Add Notes";
  aboutButton.addEventListener("click", function(){
    aboutPage();
  })
  navEle.appendChild(homeButton);
  navEle.appendChild(aboutButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function homePage(){
  document.body.querySelector(".root").innerHTML=""
}

function aboutPage(){
  document.body.querySelector(".root").innerHTML="Add Notes Here"
}

app();