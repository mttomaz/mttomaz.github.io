const cards = document.querySelector(".cards");
const repos = "https://api.github.com/users/mttomaz/repos";

fetch(repos)
  .then((res) => res.json())
  .then((data) =>
    data
      .filter((repo) => repo.stargazers_count > 0)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .map((repo) => {
        cards.innerHTML += `
        <a href="${repo.html_url}"><article>
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p>
            <span>⭐</span>
            <span class="count">${repo.stargazers_count}</span>
          </p>
        </article></a>
      `;
      }),
  );

const age = document.querySelector(".age");
age.textContent = `${Math.floor((new Date() - new Date("2004-04-06")) / 31557600000)}`;

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  let currentLang = 'pt';

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'pt' : 'en';

    document.querySelectorAll('.lang.en').forEach(el =>
      el.classList.toggle('show', currentLang === 'en')
    );
    document.querySelectorAll('.lang.pt').forEach(el =>
      el.classList.toggle('show', currentLang === 'pt')
    );

    btn.textContent = currentLang === 'en' ? 'english' : 'português';
  }

  toggleLanguage();
  btn.addEventListener('click', toggleLanguage);
});
