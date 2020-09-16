import '../scss/main.scss';

console.log('Hello, I am Daniel welcome to my portfolio page! 🚀');

fetch(
  'https://api.github.com/users/konneki/repos?sort=updated&type=public&direction=dsc'
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const {name, description, homepage, html_url} = repo;
      const grid = document.querySelector('.projects__grid--js');
      const template = `<article class="console">
              <div class="console__bar">
                <span class="console__dot"></span>
                <span class="console__dot"></span>
                <span class="console__dot"></span>
            </div>
            <div class="console__content">
            <img class="console__logo" src="img/github.svg" alt="">
              <h3 class="console__grid console__title">
           <span class="console__label">project:</span>
           <span>${name}</span>
         </h3>
         <p class="console__grid console__grid--description">
           <span class="console__label">description:</span
           ><span>${description}</span>
         </p>
         <p class="console__grid">
           <span class="console__label">demo:</span
           ><span
             >&lt;<a
               target="_blank"
               rel="noopener noreferrer"
               class="console__link"
               href="${homepage}"
               title="${name} - demo"
               >see_here</a
             >&gt;</span
           >
         </p>
         <p class="console__grid">
           <span class="console__label">github:</span>
           <span>
             &lt;<a
               class="console__link"
               href="${html_url}"
               target="_blank"
               rel="noopener noreferrer"
               title="${name} - code"
               >source_code</a
             >&gt;
           </span>
         </p>
            </div>
          </article>`;
      grid.innerHTML += template;
    }
  })
  .catch((error) => {
    console.log(
      'There is an error somwhere, look at the line below mate, maybe you can figure it out 🤯'
    );
    console.log(error);
  });
