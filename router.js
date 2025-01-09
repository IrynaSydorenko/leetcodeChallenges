const routes = {
  '/': './index.html',
  '/dashboard': './dashboard.html',
  '/challenge': './challenge.html',
};

const rootDiv = document.getElementById('root');

function navigateTo(route) {
  window.history.pushState({}, '', route);
  loadRoute(route);
}

const dashboardBtn = document.getElementById('dashboard-btn');

// Оновлюємо текст кнопки
function updateButton() {
  console.log('cliked');
  const currentPage = window.location.pathname;
  if (currentPage === '/dashboard') {
    dashboardBtn.textContent = 'Return to Home Page';
    dashboardBtn.onclick = () => navigateTo('/');
  } else {
    dashboardBtn.textContent = 'Go to Dashboard';
    dashboardBtn.onclick = () => navigateTo('/dashboard');
  }
}

function loadRoute(route) {
  const url = routes[route] || routes['/'];
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      rootDiv.innerHTML = html;
      if (route === '/dashboard') {
        loadDashboard();
      } else if (route === '/challenge') {
        loadChallenge();
      }
    });
  updateButton();
}

function loadDashboard() {
  fetch(`./challenges.json`)
    .then((response) => response.json())
    .then((challenges) => {
      const listContainer = document.createElement('ul');
      challenges.forEach((challenge) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" onclick="navigateTo('/challenge?id=${challenge.id}')">${challenge.title}</a>`;
        listContainer.appendChild(listItem);
      });
      rootDiv.appendChild(listContainer);
    });
}

function loadChallenge() {
  const params = new URLSearchParams(window.location.search);
  const challengeId = params.get('id');

  fetch(`./challenges/challenge${challengeId}.js`)
    .then((response) => response.text())
    .then((solution) => {
      const challengeDiv = document.createElement('div');
      challengeDiv.innerHTML = `<h2>Challenge ${challengeId}</h2><pre>${solution}</pre>`;
      rootDiv.appendChild(challengeDiv);
    });
}

// Initial load
window.onpopstate = () => loadRoute(window.location.pathname);
loadRoute(window.location.pathname);
