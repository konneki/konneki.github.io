import '../scss/main.scss';

console.log("Hello, I'm konneki welcome to my portfolio page! 🚀");

fetch(
  'https://api.github.com/users/konneki/repos?sort=updated&type=public&direction=dsc'
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const { name, description, homepage, html_url } = repo;
      const grid = document.querySelector('.projects__grid--js');
      const template = description
        ? `<article class="console">
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
           ><span>${
             description.length < 100
               ? description
               : description.slice(0, 100) + '…'
           }</span>
         </p>
         <p class="console__grid">
           <span class="console__label">demo:</span
           ><span
             >&lt;<a
               target="_blank"
               rel="noopener noreferrer"
               class="console__link"
               ${homepage ? 'href="' + homepage + '"' : ''}
               title="${name} - demo"
               >${homepage ? 'see_here' : 'no_demo_available'}</a
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
          </article>`
        : '';
      grid.innerHTML += template;
    }
  })
  .catch((error) => {
    console.log(
      'There is an error somewhere, look at the log below mate, maybe you can figure it out 🤯'
    );
    console.log(error);
  });
