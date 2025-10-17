
let selectedHeroes = { team1: Array(5).fill(null), team2: Array(5).fill(null) };

function searchHero(input, team, index) {
  const query = input.value.toLowerCase().trim();
  const resultsDiv = document.getElementById(`${team}-results-${index}`);
  resultsDiv.innerHTML = "";
  if (!query) return;

  const filtered = heroes.filter(h => h.name.toLowerCase().includes(query));
  filtered.slice(0, 5).forEach(h => {
    const div = document.createElement("div");
    div.className = "hero-option";
    div.innerHTML = `<img src="${h.icon}" class="hero-icon-mini"> ${h.name}`;
    div.onclick = () => selectHero(h, team, index, input, resultsDiv);
    resultsDiv.appendChild(div);
  });
}

function selectHero(hero, team, index, input, resultsDiv) {
  selectedHeroes[team][index] = hero.id;
  input.value = hero.name;
  input.dataset.heroId = hero.id;
  input.style.backgroundImage = `url(${hero.icon})`;
  input.style.backgroundRepeat = "no-repeat";
  input.style.backgroundPosition = "left 5px center";
  input.style.backgroundSize = "25px";
  input.style.paddingLeft = "35px";
  resultsDiv.innerHTML = "";
}

async function predictMatch() {
  const spinner = document.getElementById("spinner");
  const result = document.getElementById("result");
  spinner.classList.remove("hidden");

  const team1 = selectedHeroes.team1.filter(x => x !== null);
  const team2 = selectedHeroes.team2.filter(x => x !== null);

  if (team1.length < 5 || team2.length < 5) {
    spinner.classList.add("hidden");
    result.innerHTML = `<p class='error'>Выбери по 5 героев в каждую команду!</p>`;
    return;
  }

  const team1_name = document.getElementById("team1-name").value || "Radiant";
  const team2_name = document.getElementById("team2-name").value || "Dire";

  const res = await fetch("/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ team1, team2, team1_name, team2_name })
  });

  spinner.classList.add("hidden");

  const data = await res.json();
  displayResult(data, team1_name, team2_name);
}

function displayResult(data, team1_name, team2_name) {
  const result = document.getElementById("result");
  const radiant = data.average.radiant;
  const dire = data.average.dire;

  const radiantBar = document.getElementById("radiant-bar");
  const direBar = document.getElementById("dire-bar");
  const barContainer = document.getElementById("probability-bar");

  barContainer.classList.remove("hidden");
  radiantBar.style.width = radiant + "%";
  direBar.style.width = dire + "%";
  radiantBar.textContent = `${team1_name}: ${radiant}%`;
  direBar.textContent = `${team2_name}: ${dire}%`;

  result.innerHTML = `
    <div class="result-card fade-in">
      <h2>Средняя вероятность победы:</h2>
      <div id="probability-bar">
        <div id="radiant-bar" class="bar" style="width:${radiant}%; background:#00ff7f;">${team1_name}: ${radiant}%</div>
        <div id="dire-bar" class="bar" style="width:${dire}%; background:#ff4040;">${team2_name}: ${dire}%</div>
      </div>
      <table class="result-table">
        <tr><th></th><th>${team1_name}</th><th>${team2_name}</th></tr>
        <tr><td>🕓 Early</td><td>${data.early_game.radiant}%</td><td>${data.early_game.dire}%</td></tr>
        <tr><td>⚔️ Mid</td><td>${data.mid_game.radiant}%</td><td>${data.mid_game.dire}%</td></tr>
        <tr><td>🔥 Late</td><td>${data.late_game.radiant}%</td><td>${data.late_game.dire}%</td></tr>
      </table>
      <p>✅ Предсказание сохранено</p>
    </div>
  `;
}