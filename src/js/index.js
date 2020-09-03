import '../scss/main.scss';

console.log('Hello and welcome to my site! 🚀');

fetch(
  'https://api.github.com/users/konneki/repos?sort=created&type=public&direction=asc'
)
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const {name, description, homepage, html_url} = repo;
      const grid = document.querySelector('.projects__grid--js');
      const template = `<div class="console">
              <div class="console__bar">
              <class class="console__dot">
                <div class="console__dot-item"></div>
                <div class="console__dot-item"></div>
                <div class="console__dot-item"></div>
              </class>
            </div>
            <div class="console__body">
            <svg class="console__logo" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9906 1.7876C6.19453 1.78525 1.5 6.47744 1.5 12.2688C1.5 16.8485 4.43672 20.7415 8.52656 22.1712C9.07734 22.3095 8.99297 21.9181 8.99297 21.6509V19.8345C5.8125 20.2071 5.68359 18.1024 5.47031 17.7509C5.03906 17.0149 4.01953 16.8274 4.32422 16.4759C5.04844 16.1032 5.78672 16.5696 6.64219 17.8329C7.26094 18.7493 8.46797 18.5946 9.07969 18.4423C9.21328 17.8915 9.49922 17.3993 9.89297 17.0173C6.59766 16.4267 5.22422 14.4157 5.22422 12.0251C5.22422 10.8649 5.60625 9.79854 6.35625 8.93838C5.87812 7.52041 6.40078 6.30635 6.47109 6.12588C7.83281 6.004 9.24844 7.10088 9.35859 7.1876C10.132 6.97901 11.0156 6.86885 12.0047 6.86885C12.9984 6.86885 13.8844 6.98369 14.6648 7.19463C14.9297 6.99307 16.2422 6.05088 17.5078 6.16572C17.5758 6.34619 18.0867 7.53213 17.6367 8.93135C18.3961 9.79385 18.7828 10.8696 18.7828 12.0321C18.7828 14.4274 17.4 16.4407 14.0953 17.022C14.3784 17.3003 14.6031 17.6323 14.7564 17.9985C14.9098 18.3647 14.9886 18.7578 14.9883 19.1548V21.7915C15.007 22.0024 14.9883 22.211 15.3398 22.211C19.4906 20.8118 22.4789 16.8907 22.4789 12.2712C22.4789 6.47744 17.782 1.7876 11.9906 1.7876Z" fill="white"/>
            </svg>
            <div class="console__content">
              <div class="console__inner">
              <ul class="console__list console__list--left">
                <li class="console__list-item">project:</li>
                <li class="console__list-item">description:</li>
              </ul>

              <ul class="console__list console__list--right">
                <li class="console__list-item console__list-item--special">
                  ${name}
                </li>
                <li class="console__list-item">${description}</li>
              </ul>
            </div>
            <div class="console__inner">
              <ul class="console__list console__list--left">
                <li class="console__list-item">demo:</li>
                <li class="console__list-item">github:</li>
              </ul>
              <ul class="console__list console__list--right">
                <li class="console__list-item">
                  &lt;<a class="console__list-item--link" href="${homepage}" title="${name} - demo" target="_blank"  rel="noopener noreferrer">see here</a
                  >&gt;
                </li>
                <li class="console__list-item">
                  &lt;<a class="console__list-item--link" href="${html_url}" title="${name} - demo" target="_blank"  rel="noopener noreferrer""
                    >source code</a
                  >&gt;
                </li>
              </ul>
            </div>
            </div>
            </div>
          </div>`;
      grid.innerHTML += template;
    }
  })
  .catch((error) => {
    console.log('There is an error somwhere');

    console.log(error);
  });
