const tutors = [
  {
    image1: 'images/tiles.svg',
    image2: 'images/tutor.jpg',
    name: 'Ranjeet Singh',
    work: 'Bachlor from Teerthanker Mahaveer university',
    details:
      'Experienced in front end and backend development, teach students remotly using many tools.',
  },

  {
    image1: 'images/tiles.svg',
    image2: 'images/tutor.jpg',
    name: 'Ranjeet Singh',
    work: 'Bachlor from Teerthanker Mahaveer university',
    details:
      'Experienced in front end and backend development, teach students remotly using many tools.',
  },

  {
    image1: 'images/tiles.svg',
    image2: 'images/tutor.jpg',
    name: 'Ranjeet Singh',
    work: 'Bachlor from Teerthanker Mahaveer university',
    details:
      'Experienced in front end and backend development, teach students remotly using many tools.',
  },

  {
    image1: 'images/tiles.svg',
    image2: 'images/tutor.jpg',
    name: 'Ranjeet Singh',
    work: 'Bachlor from Teerthanker Mahaveer university',
    details:
      'Experienced in front end and backend development, teach students remotly using many tools.',
  },

  {
    image1: 'images/tiles.svg',
    image2: 'images/tutor.jpg',
    name: 'Ranjeet Singh',
    work: 'Bachlor from Teerthanker Mahaveer university',
    details:
      'Experienced in front end and backend development, teach students remotly using many tools.',
  },

  {
    image1: 'images/tiles.svg',
    image2: 'images/tutor.jpg',
    name: 'Ranjeet Singh',
    work: 'Bachlor from Teerthanker Mahaveer university',
    details:
      'Experienced in front end and backend development, teach students remotly using many tools.',
  },
];

function display() {
  const container = document.querySelector('.featured-tutors');
  container.innerHTML = `
  <h2 class="feature-heading">Featured Tutors</h2>
  <hr>
  <div class="tutors">

  <div class="dekstop-div">
  <div class="tutor">
  <div class="tutor-img-cont">
  <img class="tutor-img1" alt="tutor image" src="${tutors[0].image1}">
  <img class="tutor-img2" alt="tutor image" src="${tutors[0].image2}">
  </div>
  <div class="tutor-info">
  <h2 class="tutor-name">${tutors[0].name}</h2>
  <p class="tutor-work">${tutors[0].work}</p>
  <p class="tutor-details">${tutors[0].details}</p>
  </div>
  </div>

  <div class="tutor">
  <div class="tutor-img-cont">
  <img class="tutor-img1" alt="tutor image" src="${tutors[1].image1}">
  <img class="tutor-img2" alt="tutor image" src="${tutors[1].image2}">
  </div>
  <div class="tutor-info">
  <h2 class="tutor-name">${tutors[1].name}</h2>
  <p class="tutor-work">${tutors[1].work}</p>
  <p class="tutor-details">${tutors[1].details}</p>
  </div>
  </div>
  </div>

  <button type="button" class="btn-more">More<i class="fas fa-chevron-down"></i></button>
  <div class="more">
  <div class="dekstop-div">
  <div class="tutor">
  <div class="tutor-img-cont">
  <img class="tutor-img1" alt="tutor image" src="${tutors[2].image1}">
  <img class="tutor-img2" alt="tutor image" src="${tutors[2].image2}">
  </div>
  <div class="tutor-info">
  <h2 class="tutor-name">${tutors[2].name}</h2>
  <p class="tutor-work">${tutors[2].work}</p>
  <p class="tutor-details">${tutors[2].details}</p>
  </div>
  </div>

  <div class="tutor">
  <div class="tutor-img-cont">
  <img class="tutor-img1" alt="tutor image" src="${tutors[3].image1}">
  <img class="tutor-img2" alt="tutor image" src="${tutors[3].image2}">
  </div>
  <div class="tutor-info">
  <h2 class="tutor-name">${tutors[3].name}</h2>
  <p class="tutor-work">${tutors[3].work}</p>
  <p class="tutor-details">${tutors[3].details}</p>
  </div>
  </div>
  </div>

  <div class="dekstop-div">
  <div class="tutor">
  <div class="tutor-img-cont">
  <img class="tutor-img1" alt="tutor image" src="${tutors[4].image1}">
  <img class="tutor-img2" alt="tutor image" src="${tutors[4].image2}">
  </div>
  <div class="tutor-info">
  <h2 class="tutor-name">${tutors[4].name}</h2>
  <p class="tutor-work">${tutors[4].work}</p>
  <p class="tutor-details">${tutors[4].details}</p>
  </div>
  </div>

  <div class="tutor">
  <div class="tutor-img-cont">
  <img class="tutor-img1" alt="tutor image" src="${tutors[5].image1}">
  <img class="tutor-img2" alt="tutor image" src="${tutors[5].image2}">
  </div>
  <div class="tutor-info">
  <h2 class="tutor-name">${tutors[5].name}</h2>
  <p class="tutor-work">${tutors[5].work}</p>
  <p class="tutor-details">${tutors[5].details}</p>
  </div>
  </div>
  </div>
  </div>

  </div>
  `;

  const btnMore = document.querySelector('.btn-more');
  const more = document.querySelector('.more');
  function show(){
    more.style.display='block';
    btnMore.style.display='none';
  }
  
  btnMore.addEventListener('click', show);
}

display();