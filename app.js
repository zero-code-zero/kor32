const korea = {
  team: "South Korea",
  label: "대한민국",
  group: "A",
  played: 3,
  points: 3,
  goalDiff: -1,
  goalsFor: 2,
};

const thirdPlaceRows = [
  {
    rank: 1,
    group: "F",
    team: "Sweden",
    label: "스웨덴",
    flag: "se",
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    points: 4,
    goalDiff: 0,
    matchDate: "2026.06.26 KST 종료",
    status: "진출권",
  },
  {
    rank: 2,
    group: "E",
    team: "Ecuador",
    label: "에콰도르",
    flag: "ec",
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    points: 4,
    goalDiff: 0,
    matchDate: "2026.06.26 KST 종료",
    status: "진출권",
  },
  {
    rank: 3,
    group: "B",
    team: "Bosnia and Herzegovina",
    label: "보스니아 헤르체고비나",
    flag: "ba",
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    points: 4,
    goalDiff: -1,
    matchDate: "2026.06.25 KST 종료",
    status: "진출권",
  },
  {
    rank: 4,
    group: "D",
    team: "Paraguay",
    label: "파라과이",
    flag: "py",
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    points: 4,
    goalDiff: -2,
    matchDate: "2026.06.26 KST 종료",
    status: "진출권",
  },
  {
    rank: 5,
    group: "I",
    team: "Senegal",
    label: "세네갈",
    flag: "sn",
    played: 3,
    wins: 1,
    draws: 0,
    losses: 2,
    points: 3,
    goalDiff: 2,
    matchDate: "2026.06.27 KST 종료",
    status: "한국보다 위",
  },
  {
    rank: 6,
    group: "L",
    team: "Croatia",
    label: "크로아티아",
    flag: "hr",
    played: 2,
    wins: 1,
    draws: 0,
    losses: 1,
    points: 3,
    goalDiff: -1,
    matchDate: "2026.06.28 06:00 KST vs 가나",
    status: "미정",
    threatId: "croatia",
  },
  {
    rank: 7,
    group: "A",
    team: "South Korea",
    label: "대한민국",
    flag: "kr",
    played: 3,
    wins: 1,
    draws: 0,
    losses: 2,
    points: 3,
    goalDiff: -1,
    matchDate: "2026.06.25 KST 종료",
    status: "현재 7위",
    isKorea: true,
  },
  {
    rank: 8,
    group: "J",
    team: "Algeria",
    label: "알제리",
    flag: "dz",
    played: 2,
    wins: 1,
    draws: 0,
    losses: 1,
    points: 3,
    goalDiff: -2,
    matchDate: "2026.06.28 11:00 KST vs 오스트리아",
    status: "미정",
    threatId: "algeria",
  },
  {
    rank: 9,
    group: "C",
    team: "Scotland",
    label: "스코틀랜드",
    flag: "sct",
    played: 3,
    wins: 1,
    draws: 0,
    losses: 2,
    points: 3,
    goalDiff: -3,
    matchDate: "2026.06.25 KST 종료",
    status: "한국보다 아래",
  },
  {
    rank: 10,
    group: "H",
    team: "Cape Verde",
    label: "카보베르데",
    flag: "cv",
    played: 3,
    wins: 0,
    draws: 3,
    losses: 0,
    points: 3,
    goalDiff: 0,
    matchDate: "2026.06.27 09:00 KST vs 사우디아라비아 종료",
    status: "한국보다 위",
  },
  {
    rank: 11,
    group: "G",
    team: "Belgium",
    label: "벨기에",
    flag: "be",
    played: 2,
    wins: 0,
    draws: 2,
    losses: 0,
    points: 2,
    goalDiff: 0,
    matchDate: "2026.06.27 12:00 KST vs 뉴질랜드",
    status: "미정",
    threatId: "belgium",
  },
  {
    rank: 12,
    group: "K",
    team: "DR Congo",
    label: "DR콩고",
    flag: "cd",
    played: 2,
    wins: 0,
    draws: 1,
    losses: 1,
    points: 1,
    goalDiff: -1,
    matchDate: "2026.06.28 08:30 KST vs 우즈베키스탄",
    status: "미정",
    threatId: "drcongo",
  },
];

const matches = [
  {
    id: "croatia",
    group: "L",
    team: "크로아티아",
    flag: "hr",
    opponent: "가나",
    opponentFlag: "gh",
    date: "2026.06.28 06:00 KST",
    dateEt: "2026.06.27 17:00 ET",
    startsAt: Date.parse("2026-06-27T21:00:00Z"),
    fifaRank: 11,
    opponentFifaRank: 68,
    groupRank: 3,
    opponentGroupRank: 2,
    opponentCanDropToThirdWhen: "win",
    opponentProjectedThird: {
      points: 4,
      wins: 1,
      draws: 1,
      losses: 1,
      goalDiff: 0,
    },
    drawEnough: true,
    adaptation: 62,
    opponentAdaptation: 58,
    note: "한국은 L조에서 가나가 크로아티아를 이기는 결과가 필요하다. 크로아티아가 이기거나 비기면 한국보다 위에 남는다.",
    requiredBadges: [{ label: "가나 승", tone: "good" }],
    aboveWhen: (outcome) => outcome === "win" || outcome === "draw",
  },
  {
    id: "algeria",
    group: "J",
    team: "알제리",
    flag: "dz",
    opponent: "오스트리아",
    opponentFlag: "at",
    date: "2026.06.28 11:00 KST",
    dateEt: "2026.06.27 22:00 ET",
    startsAt: Date.parse("2026-06-28T02:00:00Z"),
    fifaRank: 32,
    opponentFifaRank: 25,
    groupRank: 3,
    opponentGroupRank: 2,
    opponentCanDropToThirdWhen: "win",
    opponentProjectedThird: {
      points: 3,
      wins: 1,
      draws: 0,
      losses: 2,
      goalDiff: -1,
    },
    drawEnough: true,
    adaptation: 68,
    opponentAdaptation: 57,
    note: "무승부면 알제리가 승점 4로 한국보다 위에 온다. 한국은 이 경기에서 승패가 갈리는 결과가 필요하다.",
    requiredBadges: [
      { label: "알제리 승", tone: "good" },
      { label: "오스트리아 승", tone: "good" },
      { label: "무승부 제외", tone: "warn" },
    ],
    aboveWhen: (outcome) => outcome === "win" || outcome === "draw",
  },
  {
    id: "belgium",
    group: "G",
    team: "벨기에",
    flag: "be",
    opponent: "뉴질랜드",
    opponentFlag: "nz",
    opponentLabel: "뉴질랜드",
    date: "2026.06.27 12:00 KST",
    dateEt: "2026.06.26 23:00 ET",
    startsAt: Date.parse("2026-06-27T03:00:00Z"),
    fifaRank: 9,
    opponentFifaRank: 89,
    groupRank: 3,
    opponentGroupRank: 4,
    opponentCanReplaceThird: true,
    drawEnough: true,
    adaptation: 60,
    opponentAdaptation: 54,
    note: "벨기에는 비기기만 해도 한국보다 위다. 뉴질랜드가 이기면 뉴질랜드가 올라오므로, G조는 어떤 결과든 한국보다 위에 온다.",
    requiredBadges: [{ label: "G조 추월 확정", tone: "bad" }],
    aboveWhen: (outcome) => outcome === "win" || outcome === "draw",
  },
  {
    id: "drcongo",
    group: "K",
    team: "DR콩고",
    flag: "cd",
    opponent: "우즈베키스탄",
    opponentFlag: "uz",
    date: "2026.06.28 08:30 KST",
    dateEt: "2026.06.27 19:30 ET",
    startsAt: Date.parse("2026-06-27T23:30:00Z"),
    fifaRank: 60,
    opponentFifaRank: 57,
    groupRank: 3,
    opponentGroupRank: 2,
    opponentCanDropToThirdWhen: "win",
    opponentProjectedThird: {
      points: 4,
      wins: 1,
      draws: 1,
      losses: 1,
      goalDiff: 0,
    },
    drawEnough: false,
    adaptation: 67,
    opponentAdaptation: 61,
    note: "DR콩고가 이기면 한국보다 위로 올라간다. 한국은 DR콩고가 비기거나 지는 결과가 필요하다.",
    requiredBadges: [
      { label: "DR콩고 무", tone: "good" },
      { label: "우즈베키스탄 승", tone: "good" },
    ],
    aboveWhen: (outcome) => outcome === "win",
  },
];

const probabilityWeights = {
  strength: 0.3,
  context: 0.3,
  adaptation: 0.3,
  unknown: 0.1,
};

const confirmedTeamsAboveKorea = thirdPlaceRows.filter(
  (row) => !row.threatId && !row.isKorea && isRowAboveKorea(row),
).length;
const remainingThreatSlots = 8 - confirmedTeamsAboveKorea - 1;

const outcomes = [
  { value: "unknown", label: "미정" },
  { value: "win", label: "승" },
  { value: "draw", label: "무" },
  { value: "loss", label: "패" },
];

const outcomeAdjustments = {
  win: { points: 3, goalDiff: 1, wins: 1, draws: 0, losses: 0 },
  draw: { points: 1, goalDiff: 0, wins: 0, draws: 1, losses: 0 },
  loss: { points: 0, goalDiff: -1, wins: 0, draws: 0, losses: 1 },
};

const selectedOutcomes = Object.fromEntries(matches.map((match) => [match.id, "unknown"]));
const orderedMatches = [...matches].sort((a, b) => a.startsAt - b.startsAt);

const tableBody = document.querySelector("#third-place-table");
const matchControls = document.querySelector("#match-controls");
const probabilityEl = document.querySelector("#probability");
const koreaRankEl = document.querySelector("#korea-rank");
const statusLabelEl = document.querySelector("#status-label");
const summaryTitleEl = document.querySelector("#summary-title");
const pitchKoreaRankEl = document.querySelector("#pitch-korea-rank");

function renderTable() {
  const projectedRows = getProjectedRows();
  const koreaRow = projectedRows.find((row) => row.isKorea);

  renderCurrentRank(koreaRow);

  tableBody.innerHTML = projectedRows
    .map((row) => {
      const classes = [
        row.rank <= 8 ? "qualify-zone" : "",
        row.isKorea ? "korea-row" : "",
        row.threatId && row.selectedOutcome === "unknown" ? "bubble-row" : "",
        row.projected ? "projected-row" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const statusClass = getStatusClass(row);

      return `
        <tr class="${classes}">
          <td data-label="순위">${row.rank}</td>
          <td data-label="조">${row.group}</td>
          <td data-label="팀"><strong>${formatTeam(row)}</strong></td>
          <td data-label="경기">${row.played}</td>
          <td data-label="승">${row.wins}</td>
          <td data-label="무">${row.draws}</td>
          <td data-label="패">${row.losses}</td>
          <td data-label="승점">${row.points}</td>
          <td data-label="득실">${formatGoalDiff(row.goalDiff)}</td>
          <td data-label="3차전 날짜">${row.matchDate}</td>
          <td data-label="상태"><span class="badge ${statusClass}">${row.status}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderCurrentRank(koreaRow) {
  if (!koreaRow) return;

  summaryTitleEl.textContent = `한국은 3점, 득실 -1로 3위 팀 순위 ${koreaRow.rank}위`;
  pitchKoreaRankEl.textContent = `${koreaRow.rank}위`;
}

function renderControls() {
  matchControls.innerHTML = orderedMatches
    .map(
      (match) => `
        <article class="match-card ${match.id === "croatia" ? "priority-match" : ""}">
          <header>
            <div>
              ${match.id === "croatia" ? `<div class="priority-label">최중요 경기</div>` : ""}
              <h3>${match.group}조 · ${formatMatchTitle(match)}</h3>
              ${formatRequiredBadges(match)}
              <p>${match.note}</p>
              <p class="probability-line">${formatMatchProbability(match)}</p>
            </div>
            <div class="match-date">
              <strong>${match.date}</strong>
              <span>${match.dateEt}</span>
            </div>
          </header>
          <div class="segmented" role="group" aria-label="${match.team} 경기 결과 선택">
            ${outcomes
              .map(
                (outcome) => `
                  <button
                    type="button"
                    data-match="${match.id}"
                    data-outcome="${outcome.value}"
                    aria-pressed="${selectedOutcomes[match.id] === outcome.value}"
                  >
                    ${outcome.label}
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");

  matchControls.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedOutcomes[button.dataset.match] = button.dataset.outcome;
      renderControls();
      renderTable();
      renderScenario();
    });
  });
}

function formatRequiredBadges(match) {
  return `
    <div class="required-badges" aria-label="${match.group}조 필요 결과">
      ${match.requiredBadges
        .map((badge) => `<span class="required-badge ${badge.tone}">${badge.label}</span>`)
        .join("")}
    </div>
  `;
}

function getProjectedRows() {
  const rows = thirdPlaceRows.map((row) => {
    const selectedOutcome = row.threatId ? selectedOutcomes[row.threatId] : "locked";

    if (!row.threatId || selectedOutcome === "unknown") {
      return {
        ...row,
        selectedOutcome,
        projected: false,
      };
    }

    const match = getMatch(row.threatId);
    const adjustment = outcomeAdjustments[selectedOutcome];

    if (selectedOutcome === match?.opponentCanDropToThirdWhen) {
      const projected = match.opponentProjectedThird;

      return {
        ...row,
        team: match.opponent,
        label: match.opponentLabel || match.opponent,
        flag: match.opponentFlag,
        played: 3,
        wins: projected.wins,
        draws: projected.draws,
        losses: projected.losses,
        points: projected.points,
        goalDiff: projected.goalDiff,
        status: "예상 조3위 교체",
        selectedOutcome,
        projected: true,
        replacedByOpponent: true,
      };
    }

    if (selectedOutcome === "loss" && match?.opponentCanReplaceThird) {

      return {
        ...row,
        team: match.opponent,
        label: match.opponentLabel || match.opponent,
        flag: match.opponentFlag,
        played: 3,
        wins: 1,
        draws: 1,
        losses: 1,
        points: 4,
        goalDiff: 0,
        status: "예상 조3위 교체",
        selectedOutcome,
        projected: true,
        replacedByOpponent: true,
      };
    }

    return {
      ...row,
      played: 3,
      wins: row.wins + adjustment.wins,
      draws: row.draws + adjustment.draws,
      losses: row.losses + adjustment.losses,
      points: row.points + adjustment.points,
      goalDiff: row.goalDiff + adjustment.goalDiff,
      status: `예상 ${outcomeLabel(selectedOutcome)}`,
      selectedOutcome,
      projected: true,
    };
  });

  return rows
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      return a.rank - b.rank;
    })
    .map((row, index) => {
      const rank = index + 1;
      return {
        ...row,
        rank,
        status: getProjectedStatus(row, rank),
      };
    });
}

function getMatch(id) {
  return matches.find((match) => match.id === id);
}

function getProjectedStatus(row, rank) {
  if (row.isKorea) {
    return rank <= 8 ? `한국 ${rank}위` : `한국 ${rank}위`;
  }

  if (row.projected) {
    return rank <= 8 ? "예상 진출권" : "예상 탈락권";
  }

  if (row.threatId) {
    return "미정";
  }

  if (rank <= 8) {
    return row.status === "한국보다 아래" ? "진출권" : row.status;
  }

  return row.status === "진출권" ? "현재 밖" : row.status;
}

function getStatusClass(row) {
  if (row.isKorea) {
    return row.rank <= 8 ? "watch" : "outside";
  }

  if (row.projected) {
    return row.rank <= 8 ? "safe" : "outside";
  }

  if (row.threatId) {
    return "watch";
  }

  return row.rank <= 8 ? "safe" : "outside";
}

function formatGoalDiff(value) {
  return value > 0 ? `+${value}` : String(value);
}

function enumerateCases() {
  const cases = [];
  const variableMatches = matches.map((match) => {
    const selected = selectedOutcomes[match.id];
    const probabilities = getOutcomeProbabilities(match);
    return {
      match,
      possible:
        selected === "unknown"
          ? [
              ["win", probabilities.win],
              ["draw", probabilities.draw],
              ["loss", probabilities.loss],
            ]
          : [[selected, 1]],
    };
  });

  function walk(index, picked, probability) {
    if (index === variableMatches.length) {
      cases.push({
        outcomes: picked,
        probability,
      });
      return;
    }
    const current = variableMatches[index];
    current.possible.forEach(([outcome, outcomeProbability]) => {
      walk(index + 1, {
        ...picked,
        [current.match.id]: outcome,
      }, probability * outcomeProbability);
    });
  }

  walk(0, {}, 1);
  return cases;
}

function getOutcomeProbabilities(match) {
  const strength = getStrengthDistribution(match);
  const context = getContextDistribution(match);
  const adaptation = getAdaptationDistribution(match);
  const unknown = { win: 1 / 3, draw: 1 / 3, loss: 1 / 3 };

  return normalizeDistribution({
    win:
      strength.win * probabilityWeights.strength +
      context.win * probabilityWeights.context +
      adaptation.win * probabilityWeights.adaptation +
      unknown.win * probabilityWeights.unknown,
    draw:
      strength.draw * probabilityWeights.strength +
      context.draw * probabilityWeights.context +
      adaptation.draw * probabilityWeights.adaptation +
      unknown.draw * probabilityWeights.unknown,
    loss:
      strength.loss * probabilityWeights.strength +
      context.loss * probabilityWeights.context +
      adaptation.loss * probabilityWeights.adaptation +
      unknown.loss * probabilityWeights.unknown,
  });
}

function getStrengthDistribution(match) {
  const rankDiff = match.opponentFifaRank - match.fifaRank;
  const win = clamp(0.34 + rankDiff * 0.004, 0.12, 0.72);
  const draw = clamp(0.28 - Math.abs(rankDiff) * 0.001, 0.16, 0.3);
  return normalizeDistribution({
    win,
    draw,
    loss: 1 - win - draw,
  });
}

function getContextDistribution(match) {
  if (match.drawEnough) {
    return {
      win: 0.24,
      draw: 0.62,
      loss: 0.14,
    };
  }

  return {
    win: 0.44,
    draw: 0.12,
    loss: 0.44,
  };
}

function getAdaptationDistribution(match) {
  const adaptationDiff = match.adaptation - match.opponentAdaptation;
  const win = clamp(0.34 + adaptationDiff * 0.004, 0.18, 0.58);
  const draw = clamp(0.3 - Math.abs(adaptationDiff) * 0.001, 0.24, 0.32);
  return normalizeDistribution({
    win,
    draw,
    loss: 1 - win - draw,
  });
}

function normalizeDistribution(distribution) {
  const win = Math.max(0, distribution.win);
  const draw = Math.max(0, distribution.draw);
  const loss = Math.max(0, distribution.loss);
  const total = win + draw + loss;

  return {
    win: win / total,
    draw: draw / total,
    loss: loss / total,
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatMatchProbability(match) {
  const probabilities = getOutcomeProbabilities(match);

  return `보정 확률: ${match.team} 승 ${formatPercent(probabilities.win)}, 무 ${formatPercent(probabilities.draw)}, 패 ${formatPercent(probabilities.loss)}`;
}

function evaluateCase(caseOutcomes) {
  const threatsAbove = matches.filter((match) => isThreatAboveKorea(match, caseOutcomes[match.id])).length;
  const rank = confirmedTeamsAboveKorea + threatsAbove + 1;
  return {
    rank,
    qualifies: rank <= 8,
    threatsAbove,
  };
}

function isRowAboveKorea(row) {
  if (row.points !== korea.points) {
    return row.points > korea.points;
  }

  return row.goalDiff > korea.goalDiff;
}

function isThreatAboveKorea(match, outcome) {
  const projection = getThirdPlaceProjection(match, outcome);

  if (projection.points !== korea.points) {
    return projection.points > korea.points;
  }

  return projection.goalDiff > korea.goalDiff;
}

function getThirdPlaceProjection(match, outcome) {
  if (outcome === match.opponentCanDropToThirdWhen) {
    return match.opponentProjectedThird;
  }

  if (outcome === "loss" && match.opponentCanReplaceThird) {
    return {
      points: 4,
      goalDiff: 0,
    };
  }

  const row = thirdPlaceRows.find((item) => item.threatId === match.id);
  const adjustment = outcomeAdjustments[outcome];

  return {
    points: row.points + adjustment.points,
    goalDiff: row.goalDiff + adjustment.goalDiff,
  };
}

function renderScenario() {
  const cases = enumerateCases();
  const evaluated = cases.map((item) => ({
    outcomes: item.outcomes,
    probability: item.probability,
    ...evaluateCase(item.outcomes),
  }));
  const qualifyCases = evaluated.filter((item) => item.qualifies);
  const totalProbability = evaluated.reduce((sum, item) => sum + item.probability, 0);
  const probability =
    qualifyCases.reduce((sum, item) => sum + item.probability, 0) / totalProbability;
  const ranks = evaluated.map((item) => item.rank);
  const minRank = Math.min(...ranks);
  const maxRank = Math.max(...ranks);
  const allSelected = Object.values(selectedOutcomes).every((value) => value !== "unknown");
  const current = allSelected ? evaluated[0] : null;

  probabilityEl.textContent = formatPercent(probability);
  koreaRankEl.textContent =
    minRank === maxRank ? `${minRank}위` : `${minRank}~${maxRank}위`;
  statusLabelEl.textContent = allSelected
    ? current.qualifies
      ? "진출"
      : "탈락"
    : probability >= 0.5
      ? "진출 가능"
      : "위험";
  statusLabelEl.style.color =
    allSelected && !current.qualifies ? "var(--red)" : probability >= 0.5 ? "var(--green-dark)" : "var(--yellow)";
}

function formatPercent(value) {
  return `${Math.round(value * 1000) / 10}%`;
}

function formatTeam(team, className = "", options = {}) {
  const classes = ["team-name", className].filter(Boolean).join(" ");
  const rank = options.rank ?? team.groupRank;
  const rankBadge = rank ? `<span class="rank-badge">조 ${rank}위</span>` : "";
  const label = team.label || team.team;

  return `<span class="${classes}"><span class="flag flag-${team.flag}" role="img" aria-label="${label} 국기"></span><span class="team-label">${label}</span>${rankBadge}</span>`;
}

function formatMatchTitle(match) {
  return `${formatTeam(match, "", { rank: match.groupRank })} vs ${formatOpponent(match, "", { rank: match.opponentGroupRank })}`;
}

function formatOpponent(match, className = "", options = {}) {
  const classes = ["team-name", className].filter(Boolean).join(" ");
  const rank = options.rank ?? match.opponentGroupRank;
  const rankBadge = rank ? `<span class="rank-badge">조 ${rank}위</span>` : "";

  return `<span class="${classes}"><span class="flag flag-${match.opponentFlag}" role="img" aria-label="${match.opponent} 국기"></span><span class="team-label">${match.opponent}</span>${rankBadge}</span>`;
}

function outcomeLabel(outcome) {
  if (outcome === "win") return "승";
  if (outcome === "draw") return "무";
  return "패";
}

renderTable();
renderControls();
renderScenario();
