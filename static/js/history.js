async function loadHistory() {
  const res = await fetch("/api/history");
  const data = await res.json();
  const table = document.querySelector("#history-table tbody");
  let correct = 0, wrong = 0;
  table.innerHTML = "";

  data.reverse().forEach(match => {
    const tr = document.createElement("tr");
    const isCorrect = match.outcome === "correct";
    const isWrong = match.outcome === "wrong";

    tr.className = isCorrect ? "correct" : isWrong ? "wrong" : "";

    const icons = (arr) => arr.map(id => {
      const h = heroes.find(x => x.id === id);
      return h ? `<img src="${h.icon}" title="${h.name}" class="hero-icon-mini">` : "";
    }).join("");

    tr.innerHTML = `
      <td>${match.timestamp}</td>
      <td>${match.team1} vs ${match.team2}</td>
      <td>${icons(match.team1_heroes)} — ${icons(match.team2_heroes)}</td>
      <td>${match.result.average.radiant}% / ${match.result.average.dire}%</td>
      <td>${match.result.early_game.radiant}% / ${match.result.early_game.dire}%</td>
      <td>${match.result.mid_game.radiant}% / ${match.result.mid_game.dire}%</td>
      <td>${match.result.late_game.radiant}% / ${match.result.late_game.dire}%</td>
      <td><input id="time-${match.id}" type="number" value="${match.game_time || ''}" placeholder="мин"></td>
      <td>
        <select id="outcome-${match.id}">
          <option value="">?</option>
          <option value="correct" ${isCorrect ? "selected" : ""}>✅</option>
          <option value="wrong" ${isWrong ? "selected" : ""}>❌</option>
        </select>
        <button onclick="updateOutcome('${match.id}')">💾</button>
      </td>
      <td><button onclick="deleteMatch('${match.id}')" class="delete-btn">🗑️</button></td>
    `;

    if (isCorrect) correct++;
    if (isWrong) wrong++;
    table.appendChild(tr);
  });

  const total = correct + wrong;
  const accuracy = total ? ((correct / total) * 100).toFixed(1) : 0;
  document.getElementById("stats").innerHTML =
    `<p>Всего: ${total} | ✅ ${correct} | ❌ ${wrong} | Точность: ${accuracy}%</p>`;
}

async function updateOutcome(id) {
  const outcome = document.getElementById(`outcome-${id}`).value;
  const game_time = document.getElementById(`time-${id}`).value;
  await fetch("/api/history/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, outcome, game_time })
  });
  loadHistory();
}

async function deleteMatch(id) {
  await fetch("/api/history/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  });
  loadHistory();
}

loadHistory();
