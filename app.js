const korea = {
  team: "South Korea",
  label: "대한민국",
  group: "A",
  played: 3,
  points: 3,
  goalDiff: -1,
  goalsFor: 2,
};

const teamAbbreviations = {
  se: "SWE",
  ec: "ECU",
  ba: "BIH",
  py: "PAR",
  sn: "SEN",
  hr: "CRO",
  kr: "KOR",
  dz: "ALG",
  sct: "SCO",
  cv: "CPV",
  be: "BEL",
  eg: "EGY",
  ir: "IRN",
  cd: "COD",
  gh: "GHA",
  at: "AUT",
  nz: "NZL",
  uz: "UZB",
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
    goalsFor: 7,
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
    goalsFor: 2,
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
    goalsFor: 5,
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
    goalsFor: 2,
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
    goalsFor: 8,
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
    goalsFor: 3,
    matchDate: "2026.06.28 06:00 KST vs 가나",
    status: "미정",
    dynamicGroup: "L",
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
    goalsFor: 2,
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
    goalsFor: 2,
    matchDate: "2026.06.28 11:00 KST vs 오스트리아",
    status: "미정",
    dynamicGroup: "J",
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
    goalsFor: 1,
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
    goalsFor: 2,
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
    goalsFor: 1,
    matchDate: "2026.06.27 12:00 KST vs 뉴질랜드",
    status: "미정",
    dynamicGroup: "G",
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
    goalsFor: 1,
    matchDate: "2026.06.28 08:30 KST vs 우즈베키스탄",
    status: "미정",
    dynamicGroup: "K",
  },
];

const matches = [
  {
    id: "egyptIran",
    group: "G",
    team: "이집트",
    flag: "eg",
    opponent: "이란",
    opponentFlag: "ir",
    date: "2026.06.27 12:00 KST",
    startsAt: Date.parse("2026-06-27T03:00:00Z"),
    groupRank: 1,
    opponentGroupRank: 2,
    note: "이집트가 이기면 G조 3위가 2점권에 남을 수 있다. 무승부나 이란 승이면 G조 3위가 한국보다 위로 온다.",
    requiredBadges: [
      { label: "이집트 승 필요", tone: "good" },
      { label: "무/이란 승 위험", tone: "warn" },
    ],
  },
  {
    id: "croatia",
    group: "L",
    team: "크로아티아",
    flag: "hr",
    opponent: "가나",
    opponentFlag: "gh",
    date: "2026.06.28 06:00 KST",
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
    note: "한국은 L조에서 가나가 크로아티아를 이기는 결과가 필요하다. 크로아티아가 이기거나 비기면 한국은 32강 탈락.",
    requiredBadges: [{ label: "가나 승", tone: "good" }],
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
    note: "DR콩고가 이기면 한국보다 위로 올라간다. 한국은 DR콩고가 비기거나 지는 결과가 필요하다. 단, 우즈베키스탄이 6골 차 이상으로 크게 이기면 득실과 다득점 비교가 다시 문제가 될 수 있다.",
    requiredBadges: [
      { label: "DR콩고 무", tone: "good" },
      { label: "우즈베키스탄 승", tone: "good" },
    ],
    aboveWhen: (outcome) => outcome === "win",
  },
  {
    id: "algeria",
    group: "J",
    team: "알제리",
    flag: "dz",
    opponent: "오스트리아",
    opponentFlag: "at",
    date: "2026.06.28 11:00 KST",
    startsAt: Date.parse("2026-06-28T02:00:00Z"),
    fifaRank: 32,
    opponentFifaRank: 25,
    groupRank: 3,
    opponentGroupRank: 2,
    drawEnough: true,
    adaptation: 68,
    opponentAdaptation: 57,
    note: "무승부면 J조 3위가 승점 4가 된다. 한국은 이 경기에서 승패가 갈리는 결과가 필요하다.",
    requiredBadges: [
      { label: "알제리 승", tone: "good" },
      { label: "오스트리아 승", tone: "good" },
      { label: "무승부 제외", tone: "warn" },
    ],
    aboveWhen: (outcome) => outcome === "win" || outcome === "draw",
  },
];

const groupDefinitions = {
  G: {
    teams: [
      { team: "Egypt", label: "이집트", flag: "eg", rank: 1, played: 2, wins: 1, draws: 1, losses: 0, points: 4, goalDiff: 2, goalsFor: 4, goalsAgainst: 2 },
      { team: "Iran", label: "이란", flag: "ir", rank: 2, played: 2, wins: 0, draws: 2, losses: 0, points: 2, goalDiff: 0, goalsFor: 2, goalsAgainst: 2 },
      { team: "Belgium", label: "벨기에", flag: "be", rank: 3, played: 2, wins: 0, draws: 2, losses: 0, points: 2, goalDiff: 0, goalsFor: 1, goalsAgainst: 1 },
      { team: "New Zealand", label: "뉴질랜드", flag: "nz", rank: 4, played: 2, wins: 0, draws: 1, losses: 1, points: 1, goalDiff: -2, goalsFor: 3, goalsAgainst: 5 },
    ],
    matches: [
      { matchId: "egyptIran", team: "Egypt", opponent: "Iran" },
    ],
  },
  J: {
    teams: [
      { team: "Argentina", label: "아르헨티나", flag: "ar", rank: 1, played: 2, wins: 2, draws: 0, losses: 0, points: 6, goalDiff: 5, goalsFor: 5, goalsAgainst: 0 },
      { team: "Austria", label: "오스트리아", flag: "at", rank: 2, played: 2, wins: 1, draws: 0, losses: 1, points: 3, goalDiff: 0, goalsFor: 3, goalsAgainst: 3 },
      { team: "Algeria", label: "알제리", flag: "dz", rank: 3, played: 2, wins: 1, draws: 0, losses: 1, points: 3, goalDiff: -2, goalsFor: 2, goalsAgainst: 4 },
      { team: "Jordan", label: "요르단", flag: "jo", rank: 4, played: 2, wins: 0, draws: 0, losses: 2, points: 0, goalDiff: -3, goalsFor: 2, goalsAgainst: 5 },
    ],
    matches: [
      { matchId: "algeria", team: "Algeria", opponent: "Austria" },
    ],
  },
  K: {
    teams: [
      { team: "Colombia", label: "콜롬비아", flag: "co", rank: 1, played: 2, wins: 2, draws: 0, losses: 0, points: 6, goalDiff: 3, goalsFor: 4, goalsAgainst: 1 },
      { team: "Portugal", label: "포르투갈", flag: "pt", rank: 2, played: 2, wins: 1, draws: 1, losses: 0, points: 4, goalDiff: 5, goalsFor: 6, goalsAgainst: 1 },
      { team: "DR Congo", label: "DR콩고", flag: "cd", rank: 3, played: 2, wins: 0, draws: 1, losses: 1, points: 1, goalDiff: -1, goalsFor: 1, goalsAgainst: 2 },
      { team: "Uzbekistan", label: "우즈베키스탄", flag: "uz", rank: 4, played: 2, wins: 0, draws: 0, losses: 2, points: 0, goalDiff: -7, goalsFor: 1, goalsAgainst: 8 },
    ],
    matches: [
      { matchId: "drcongo", team: "DR Congo", opponent: "Uzbekistan" },
    ],
  },
  L: {
    teams: [
      { team: "England", label: "잉글랜드", flag: "en", rank: 1, played: 2, wins: 1, draws: 1, losses: 0, points: 4, goalDiff: 2, goalsFor: 4, goalsAgainst: 2 },
      { team: "Ghana", label: "가나", flag: "gh", rank: 2, played: 2, wins: 1, draws: 1, losses: 0, points: 4, goalDiff: 1, goalsFor: 1, goalsAgainst: 0 },
      { team: "Croatia", label: "크로아티아", flag: "hr", rank: 3, played: 2, wins: 1, draws: 0, losses: 1, points: 3, goalDiff: -1, goalsFor: 3, goalsAgainst: 4 },
      { team: "Panama", label: "파나마", flag: "pa", rank: 4, played: 2, wins: 0, draws: 0, losses: 2, points: 0, goalDiff: -2, goalsFor: 0, goalsAgainst: 2 },
    ],
    matches: [
      { matchId: "croatia", team: "Croatia", opponent: "Ghana" },
    ],
  },
};

const outcomes = [
  { value: "unknown", label: "미정" },
  { value: "win", label: "승" },
  { value: "draw", label: "무" },
  { value: "loss", label: "패" },
];

const selectedOutcomes = Object.fromEntries(matches.map((match) => [match.id, "unknown"]));
const orderedMatches = [...matches].sort((a, b) => a.startsAt - b.startsAt);

const tableBody = document.querySelector("#third-place-table");
const matchControls = document.querySelector("#match-controls");
const summaryTitleEl = document.querySelector("#summary-title");
const pitchKoreaRankEl = document.querySelector("#pitch-korea-rank");

function renderTable() {
  const projectedRows = getProjectedRows();
  const koreaRow = projectedRows.find((row) => row.isKorea);
  const hasSelectedOutcome = Object.values(selectedOutcomes).some((outcome) => outcome !== "unknown");

  renderCurrentRank(koreaRow);

  tableBody.innerHTML = projectedRows
    .map((row) => {
      const previousRank = row.previousRank ?? row.rank;
      const classes = [
        row.rank <= 8 ? "qualify-zone" : "",
        row.isKorea ? "korea-row" : "",
        hasSelectedOutcome && row.rank < previousRank ? "rank-up" : "",
        hasSelectedOutcome && row.rank > previousRank ? "rank-down" : "",
      ]
        .filter(Boolean)
        .join(" ");

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
        <article class="match-card">
          <header>
            <div>
              <h3>${match.group}조 · ${formatMatchTitle(match)}</h3>
              ${formatRequiredBadges(match)}
              <p>${match.note}</p>
            </div>
            <div class="match-date">
              <strong>${match.date}</strong>
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
    const selectedOutcome = row.dynamicGroup ? getGroupSelectionStatus(row.dynamicGroup) : "locked";

    if (row.dynamicGroup) {
      const projectedGroupThird = getGroupThirdPlaceProjection(row.dynamicGroup);

      if (projectedGroupThird) {
        return {
          ...row,
          ...projectedGroupThird,
          group: row.dynamicGroup,
          sortRank: row.rank,
          status: `예상 ${row.dynamicGroup}조 3위`,
          selectedOutcome,
          projected: true,
        };
      }
    }

    if (!row.dynamicGroup || selectedOutcome === "unknown") {
      return {
        ...row,
        selectedOutcome,
        projected: false,
      };
    }

    return row;
  });

  return rows
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      return (a.sortRank ?? a.rank) - (b.sortRank ?? b.rank);
    })
    .map((row, index) => {
      const rank = index + 1;
      return {
        ...row,
        previousRank: row.sortRank ?? row.rank,
        rank,
        status: getProjectedStatus(row, rank),
      };
    });
}

function getGroupSelectionStatus(groupId) {
  const group = groupDefinitions[groupId];

  if (!group || group.matches.some((match) => selectedOutcomes[match.matchId] === "unknown")) {
    return "unknown";
  }

  return "selected";
}

function getGroupThirdPlaceProjection(groupId) {
  const group = groupDefinitions[groupId];

  if (!group || getGroupSelectionStatus(groupId) === "unknown") {
    return null;
  }

  if (groupId === "G") {
    return getGroupGThirdPlaceProjection();
  }

  const groupRows = group.teams.map((team) => ({ ...team }));
  const teamsById = Object.fromEntries(groupRows.map((team) => [team.team, team]));

  group.matches.forEach((match) => {
    applyMatchOutcome(teamsById[match.team], teamsById[match.opponent], selectedOutcomes[match.matchId]);
  });

  return groupRows
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
      if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
      return a.rank - b.rank;
    })[2];
}

function getGroupGThirdPlaceProjection() {
  const egyptIranOutcome = selectedOutcomes.egyptIran;

  if (egyptIranOutcome === "win") {
    return {
      team: "Iran",
      label: "이란",
      flag: "ir",
      rank: 2,
      played: 3,
      wins: 0,
      draws: 2,
      losses: 1,
      points: 2,
      goalDiff: -1,
      goalsFor: 2,
    };
  }

  if (egyptIranOutcome === "draw") {
    return {
      team: "Iran",
      label: "이란",
      flag: "ir",
      rank: 2,
      played: 3,
      wins: 0,
      draws: 3,
      losses: 0,
      points: 3,
      goalDiff: 0,
      goalsFor: 3,
    };
  }

  return {
    team: "Egypt",
    label: "이집트",
    flag: "eg",
    rank: 1,
    played: 3,
    wins: 1,
    draws: 1,
    losses: 1,
    points: 4,
    goalDiff: 1,
    goalsFor: 4,
  };
}

function applyMatchOutcome(team, opponent, outcome) {
  team.played += 1;
  opponent.played += 1;

  if (outcome === "draw") {
    team.draws += 1;
    opponent.draws += 1;
    team.points += 1;
    opponent.points += 1;
    team.goalsFor += 1;
    opponent.goalsFor += 1;
    team.goalsAgainst += 1;
    opponent.goalsAgainst += 1;
    return;
  }

  const winner = outcome === "win" ? team : opponent;
  const loser = outcome === "win" ? opponent : team;

  winner.wins += 1;
  winner.points += 3;
  winner.goalDiff += 1;
  winner.goalsFor += 1;
  loser.goalsAgainst += 1;
  loser.losses += 1;
  loser.goalDiff -= 1;
}

function getProjectedStatus(row, rank) {
  if (row.isKorea) {
    return rank <= 8 ? `한국 ${rank}위` : `한국 ${rank}위`;
  }

  if (row.projected) {
    return rank <= 8 ? "예상 진출권" : "예상 탈락권";
  }

  if (row.dynamicGroup) {
    return "미정";
  }

  if (rank <= 8) {
    return row.status === "한국보다 아래" ? "진출권" : row.status;
  }

  return row.status === "진출권" ? "현재 밖" : row.status;
}

function formatGoalDiff(value) {
  return value > 0 ? `+${value}` : String(value);
}

function formatTeam(team, className = "", options = {}) {
  const classes = ["team-name", className].filter(Boolean).join(" ");
  const rank = options.rank ?? team.groupRank;
  const rankBadge = rank ? `<span class="rank-badge">조 ${rank}위</span>` : "";
  const label = team.label || team.team;
  const displayLabel = teamAbbreviations[team.flag] || label;

  return `<span class="${classes}"><span class="flag flag-${team.flag}" role="img" aria-label="${label} 국기"></span><span class="team-label" title="${label}">${displayLabel}</span>${rankBadge}</span>`;
}

function formatMatchTitle(match) {
  return `${formatTeam(match, "", { rank: match.groupRank })} vs ${formatOpponent(match, "", { rank: match.opponentGroupRank })}`;
}

function formatOpponent(match, className = "", options = {}) {
  const classes = ["team-name", className].filter(Boolean).join(" ");
  const rank = options.rank ?? match.opponentGroupRank;
  const rankBadge = rank ? `<span class="rank-badge">조 ${rank}위</span>` : "";
  const displayLabel = teamAbbreviations[match.opponentFlag] || match.opponent;

  return `<span class="${classes}"><span class="flag flag-${match.opponentFlag}" role="img" aria-label="${match.opponent} 국기"></span><span class="team-label" title="${match.opponent}">${displayLabel}</span>${rankBadge}</span>`;
}

renderTable();
renderControls();
