//recupero 
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const target = document.getElementById("target");

// dati 
const games = [
    {
      image: 'img/1.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: 'img/2.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: 'img/3.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: 'img/4.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: 'img/5.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];


  //variabile incrementale 
  let toShow = 0;
  target.innerHTML = `<img src="${games[0].image}" alt="">`;

  next.addEventListener("click", function(){
      toShow++;
      target.innerHTML = `<img src="${games[toShow].image}" alt="">`;
    console.log(toShow)
  })
  prev.addEventListener("click", function(){
    toShow--;
    target.innerHTML = `<img src="${games[toShow].image}" alt="">`;
    console.log(toShow)
  })