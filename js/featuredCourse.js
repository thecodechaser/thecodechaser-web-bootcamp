const courses = [
  {
    image: "images/front-end.png",
    title: "Front-End Development",
    techs: ["html", "css", "javascript"],
    details:
      "Learn Front-End development from scratch and boost your knowledge in html, css , and javascript.",
    knowMore: "Know More",
  },

  {
    image: "images/back-end.png",
    title: "Back-End Development",
    techs: ["ruby", "node", "java"],
    details:
      "Learn Back-End development from scratch and boost your knowledge in ruby, node , and java.",
    knowMore: "Know More",
  },

  {
    image: "images/full-stack.png",
    title: "Full-Stack Development",
    techs: ["html", "ruby", "node"],
    details: "Learn Full-Stack development from scratch and boost your knowledge in html, css , javascript, ruby, and node.",
    knowMore: "Know More",
  },
];

function display() {
  const container = document.querySelector(".featured-courses");
  container.innerHTML = `
  <h2 class="feature-heading">Featured Courses</h2>
  <div class="feature-content">
  <hr>
  <div class="feature-item">
  <img class="course-image" src="${courses[0].image}">
  <div class="feature-details">
  <h2 class="course-title">${courses[0].title}<h2>
  <ul>
  <li>${courses[0].techs[0]}</li>
  <li>${courses[0].techs[1]}</li>
  <li>${courses[0].techs[2]}</li>
  </ul>
  <p class="course-details">${courses[0].details}</p>
  <button class="course-button">${courses[0].knowMore}</button>
  </div>
  </div>

  <div class="feature-item">
  <img class="course-image" src="${courses[1].image}">
  <div class="feature-details">
  <h2 class="course-title">${courses[1].title}<h2>
  <ul>
  <li>${courses[1].techs[0]}</li>
  <li>${courses[1].techs[1]}</li>
  <li>${courses[1].techs[2]}</li>
  </ul>
  <p class="course-details">${courses[1].details}</p>
  <button class="course-button">${courses[1].knowMore}</button>
  </div>
  </div>

  <div class="feature-item">
  <img class="course-image" src="${courses[2].image}">
  <div class="feature-details">
  <h2 class="course-title">${courses[2].title}<h2>
  <ul>
  <li>${courses[2].techs[0]}</li>
  <li>${courses[2].techs[1]}</li>
  <li>${courses[2].techs[2]}</li>
  </ul>
  <p class="course-details">${courses[2].details}</p>
  <button class="course-button">${courses[2].knowMore}</button>
  </div>
  </div>
  </div>
  `;
}

display();