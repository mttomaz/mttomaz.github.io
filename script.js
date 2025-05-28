const cards = document.querySelector('.cards')
const repos = 'https://api.github.com/users/mttomaz/repos';

fetch(repos)
  .then(res => res.json())
  .then(data => {
    data.map((d, i) => {
      if ( d.stargazers_count === 0 ) {
      return;
      }
      cards.innerHTML += `
        <a href="${d.html_url}"><article>
          <h3>${d.name}</h3>
          <p>${d.description}</p>
          <p><span class="material-symbols-rounded">star</span> ${d.stargazers_count}</p>
        </article></a>
      `;
    })
  })

const age = document.querySelector(".age");
age.textContent = `${Math.floor((new Date()-new Date("2004-04-06"))/31557600000)}`
