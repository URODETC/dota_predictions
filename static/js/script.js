// TODO: Сделать allert'ы(!), смерджить ластпики, доделать ластпики
// TODO: поставить перед названиями героев их команду
// TODO: сделать селектор (про)команд(??)
// FIXME: css для history(?)
// TODO: Добавить в нейронку не только early, mid, late, а больше значений (промежутками по 5 минут) или как-то заставлять выводить ее время матча
// TODO: докинуть новые данные в датасет
// TODO: построить график преимущества команды от вермени
// TODO: Наполнить инфу о сайте снизу
let selectedHeroes = { team1: Array(5).fill(null), team2: Array(5).fill(null) };
let lastPrediction = null;

function predictButtonState() {
  const button = document.getElementById("predict-btn");
  const team1 = selectedHeroes.team1.filter((x) => x !== null);
  const team2 = selectedHeroes.team2.filter((x) => x !== null);
  if (team1.length == 5 && team2.length == 5) {
    button.classList.add("enabled");
    button.disabled = false;
  } else {
    button.classList.remove("enabled");
    button.disabled = true;
  }
}

function clearButtonState() {
  const button = document.getElementById("clear-all-btn");
  if (!button) return;

  const team1 = (selectedHeroes.team1 || []).filter((x) => x !== null);
  const team2 = (selectedHeroes.team2 || []).filter((x) => x !== null);

  const hasHeroes = team1.length > 0 || team2.length > 0;

  if (hasHeroes) {
    button.classList.add("enabled");
    button.disabled = false;
  } else {
    button.classList.remove("enabled");
    button.disabled = true;
  }
}

function clearButton() {
  document.querySelectorAll(".team-name").forEach((input) => (input.value = ""));
  document.querySelectorAll(".hero-slot").forEach((slot) => {
    const selected = slot.querySelector(".selected-hero");
    const input = slot.querySelector(".hero-search");
    if (selected) selected.remove();
    if (input) input.classList.remove("hidden");
    input.value = ""; 
  });
  selectedHeroes = {
    team1: [null, null, null, null, null],
    team2: [null, null, null, null, null],
  };
  const resultCard = document.getElementById("result");
  if (resultCard) resultCard.classList.add("hidden");
  predictButtonState();
  clearButtonState();
}

function searchHero(input, team, index) {
  const query = input.value.toLowerCase().trim();
  const resultsDiv = document.getElementById(`${team}-results-${index}`);
  resultsDiv.innerHTML = "";
  resultsDiv.parentElement.classList.add("active");
  resultsDiv.classList.remove("hidden");
  if (!query) {
    resultsDiv.parentElement.classList.remove("active");
    resultsDiv.classList.add("hidden");
    return;
  }

  const filtered = heroes.filter((h) => h.name.toLowerCase().includes(query));
  filtered.slice(0, 5).forEach((h) => {
    const div = document.createElement("div");
    div.className = "hero-option";
    div.innerHTML = `<img src="${h.icon}" class="hero-icon-mini"> ${h.name}`;
    div.onclick = () => selectHero(h, team, index, input, resultsDiv);
    resultsDiv.appendChild(div);
  });
}

function selectHero(hero, team, index, input, resultsDiv) {
  const allSelected = [...selectedHeroes.team1, ...selectedHeroes.team2];
  if (allSelected.includes(hero.id)) {
    input.classList.add("error");
    input.placeholder = "Этот герой уже выбран!";
    setTimeout(() => {
      input.classList.remove("error");
      input.placeholder = "Поиск героя...";
    }, 1500);
    input.value = "";
    resultsDiv.innerHTML = "";
    resultsDiv.classList.add("hidden");
    resultsDiv.parentElement.classList.remove("active");
    return;
  }
  selectedHeroes[team][index] = hero.id;
  input.classList.add("hidden");
  const div = document.createElement("div");
  div.className = "selected-hero";
  div.innerHTML = `
    <div class="hero-name">
      <img src="${hero.icon}" class="hero-icon-medium"> 
      <a>${hero.name}</a>
    </div>
    <button id="clear-hero-btn" onclick="clearHero(this)">X</button>
  `;
  input.parentElement.appendChild(div);
  input.value = "";
  resultsDiv.innerHTML = "";
  resultsDiv.classList.add("hidden");
  resultsDiv.parentElement.classList.remove("active");
  predictButtonState();
  clearButtonState();
}
function clearHero(element) {
  heroSlot = element.parentElement.parentElement;
  heroSlot.getElementsByClassName("selected-hero")[0].remove();
  heroSlot.getElementsByClassName("hero-search")[0].classList.remove("hidden");
  team = heroSlot.getElementsByClassName("hero-search")[0].id.slice(0, 5);
  index = heroSlot.getElementsByClassName("hero-search")[0].id[6];
  selectedHeroes[team][index] = null;
  predictButtonState();
  clearButtonState();
  result = document.getElementById("result");
  if (result.classList.contains("hidden") == false) {
    clearResult();
  }
}

async function predictMatch() {
  const spinner = document.getElementById("spinner");
  const result = document.getElementById("result");
  spinner.classList.remove("hidden");

  const team1 = selectedHeroes.team1.filter((x) => x !== null);
  const team2 = selectedHeroes.team2.filter((x) => x !== null);

  const team1_name = document.getElementById("team1-name").value || "Radiant";
  const team2_name = document.getElementById("team2-name").value || "Dire";

  const currentPrediction = JSON.stringify({
    team1,
    team2,
    team1_name,
    team2_name,
  });

  if (currentPrediction === lastPrediction) {
    spinner.classList.add("hidden");
    return;
  }

  lastPrediction = currentPrediction;

  const res = await fetch("/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ team1, team2, team1_name, team2_name }),
  });

  spinner.classList.add("hidden");

  const data = await res.json();
  predictButtonState();
  clearButtonState();
  displayResult(data, team1_name, team2_name);
}

function displayResult(data, team1_name, team2_name) {
  const result = document.getElementById("result");
  const radiant = data.average.radiant;
  const dire = data.average.dire;
  const radiantBar = document.getElementById("radiant-bar");
  const direBar = document.getElementById("dire-bar");

  result.classList.remove("hidden");

  radiantBar.style.width = radiant + "%";
  direBar.style.width = dire + "%";
  radiantBar.textContent = `${team1_name}: ${radiant}%`;
  direBar.textContent = `${team2_name}: ${dire}%`;

  result.innerHTML = `
    <div class="result-card fade-in">
      <h2>Вероятность победы:</h2>
      <div id="probability-bar">
        <div id="radiant-bar" class="bar" style="width:${radiant}%; background:#00ff7f;">${team1_name}: ${radiant}%</div>
        <div id="dire-bar" class="bar" style="width:${dire}%; background:#ff4040;">${team2_name}: ${dire}%</div>
      </div>
      <table class="result-table">
        <tr><th></th><th>${team1_name}</th><th>${team2_name}</th></tr>
        <tr><td><30 Мин</td><td>${data.early_game.radiant}%</td><td>${data.early_game.dire}%</td></tr>
        <tr><td>30-50 Мин</td><td>${data.mid_game.radiant}%</td><td>${data.mid_game.dire}%</td></tr>
        <tr><td>50< Мин</td><td>${data.late_game.radiant}%</td><td>${data.late_game.dire}%</td></tr>
      </table>
    </div>
  `;
}

function clearResult() {
  const result = document.getElementById("result");
  result.classList.add("hidden");
}
