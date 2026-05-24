/* =========================================================
   THE FLUENCY TIMES — YV ENGLISH
   COMO EDITAR AS NOTÍCIAS AUTOMÁTICAS

   1) Cada notícia fica dentro de DAILY_NEWS.
   2) A chave da notícia precisa estar no formato: "AAAA-MM-DD".
      Exemplo: "2026-05-23".
   3) À meia-noite, quando o aluno abrir/atualizar a página,
      o site mostra automaticamente a notícia da data do dia.
   4) Se não existir notícia para o dia atual, o site mostra
      a notícia mais recente anterior à data atual.
   5) Para colocar imagem, salve a imagem na pasta /news/
      e escreva o caminho em image, exemplo: "news/fed-chair.jpg".
   ========================================================= */

const DAILY_NEWS = {
  // =======================================================
  // EDITE AQUI — NOTÍCIA AUTOMÁTICA DE SÁBADO
  // Troque a data, imagem, título, textos, palavras e perguntas.
  // =======================================================
  "2026-05-23": {
    edition: "Saturday Edition",
    topic: "Economy · United States · Brazil",
    image: "news/fed-chair.jpg",
    imageCaption: "US economy and Brazil impact · The Fluency Times",
    levels: {
      1: {
        badge: "lv1",
        title: "Kevin Warsh Becomes Fed Chair",
        text: [
          "Kevin Warsh is now the chair of the US Federal Reserve. The Federal Reserve is the central bank of the United States.",
          "He will help make important decisions about interest rates and the economy.",
          "Donald Trump chose Warsh for the job. Trump wants lower interest rates, but prices are still high in the United States.",
          "This news can also affect Brazil. When the dollar becomes stronger, the Brazilian real can become weaker.",
          "A weaker real can make imported products more expensive in Brazil, like fuel, wheat, and industrial products.",
          "Brazil may also need to keep interest rates high to attract investors and protect the economy."
        ],
        words: [
          "chair = presidente / líder",
          "Federal Reserve = banco central dos EUA",
          "interest rates = juros",
          "economy = economia",
          "stronger dollar = dólar mais forte",
          "weaker real = real mais fraco",
          "imported products = produtos importados"
        ],
        questions: [
          "Who is Kevin Warsh?",
          "What is the Federal Reserve?",
          "Why does Trump want lower interest rates?",
          "How can a stronger dollar affect Brazil?",
          "In your opinion, is a weaker real good or bad for Brazil? Why?",
          "How does the cost of living affect people in your country?"
        ]
      },
      2: {
        badge: "lv2",
        title: "New Fed Chair Takes Office Amid Economic Pressure",
        text: [
          "Kevin Warsh has been sworn in as chair of the US Federal Reserve, one of the most powerful economic institutions in the world.",
          "He takes office at a difficult moment. Many Americans are worried about the cost of living, while Donald Trump is pressuring the central bank to cut interest rates.",
          "Lower interest rates can make borrowing money cheaper, but they can also make inflation harder to control when prices are already rising.",
          "Warsh's appointment may also affect other countries, including Brazil. A stronger dollar can make the Brazilian real lose value.",
          "When the real becomes weaker, imported products become more expensive. This can increase prices for fuel, wheat, and industrial components in Brazil.",
          "The Brazilian Central Bank may feel pressure to keep the Selic rate high to attract foreign investors and avoid capital leaving the country."
        ],
        words: [
          "to be sworn in = tomar posse",
          "cost of living = custo de vida",
          "to cut interest rates = cortar juros",
          "borrowing money = pegar dinheiro emprestado",
          "inflation = inflação",
          "foreign investors = investidores estrangeiros",
          "capital outflows = saída de capital"
        ],
        questions: [
          "Why is Kevin Warsh taking office at a difficult moment?",
          "Why does Trump want the Federal Reserve to cut interest rates?",
          "What can happen if interest rates are too low while prices are rising?",
          "How can a stronger dollar affect the Brazilian real?",
          "Do you think Brazil should keep interest rates high to attract investors? Why or why not?",
          "How do economic decisions in the United States affect normal people in Brazil?"
        ]
      },
      3: {
        badge: "lv3",
        title: "Kevin Warsh Takes Over the Fed as Economic Concerns Grow",
        text: [
          "Kevin Warsh has been sworn in as chair of the US Federal Reserve, taking control of the central bank at a moment of growing concern over inflation, interest rates, and the cost of living.",
          "Warsh, a former Fed governor and Wall Street banker, was chosen by Donald Trump, who has repeatedly pushed the central bank to cut interest rates despite persistent price pressures.",
          "His predecessor, Jerome Powell, often warned that Trump's economic agenda could increase inflationary risks. Powell was also criticized by Trump for refusing to cut rates more aggressively.",
          "The market reaction to Warsh's appointment has included a stronger dollar index and volatile long-term US Treasury yields.",
          "For Brazil, this matters because US monetary policy can influence the exchange rate, interest rate decisions, and foreign capital flows.",
          "If the dollar strengthens, the Brazilian real may depreciate. This can make imports more expensive and add inflationary pressure to fuel, wheat, and industrial components.",
          "If the Warsh-led Fed takes a hawkish stance, Brazil may need to keep the Selic rate high to maintain an attractive interest rate differential and prevent capital outflows."
        ],
        words: [
          "persistent = persistente",
          "predecessor = antecessor",
          "Treasury yields = rendimentos dos títulos do Tesouro dos EUA",
          "monetary policy = política monetária",
          "exchange rate = taxa de câmbio",
          "depreciate = desvalorizar",
          "hawkish stance = postura mais rígida contra inflação"
        ],
        questions: [
          "What challenges will Kevin Warsh face as Fed chair?",
          "Why did Jerome Powell disagree with cutting rates too aggressively?",
          "How did markets initially react to Warsh's appointment?",
          "Why does US monetary policy matter for Brazil?",
          "In your opinion, should central banks be independent from presidents? Explain your answer.",
          "What is more dangerous for a country: high inflation or high interest rates? Why?"
        ]
      },
      4: {
        badge: "lv4",
        title: "Warsh Assumes Fed Leadership as Political and Market Pressures Intensify",
        text: [
          "Kevin Warsh has been sworn in as chair of the US Federal Reserve at a politically sensitive moment, with the Trump administration facing mounting criticism over Americans' financial wellbeing and the rising cost of living.",
          "A former Fed governor and Wall Street banker, Warsh now leads the world's most influential central bank while Donald Trump continues to demand interest rate cuts, despite persistent inflationary pressures.",
          "The transition follows Jerome Powell's tenure, during which he repeatedly warned that Trump's economic agenda could carry inflationary risks. Powell, despite also having once been selected by Trump, became a frequent target of presidential attacks for his reluctance to lower rates.",
          "Early market signals suggest that Warsh's appointment has contributed to a stronger dollar index and more volatile long-term US Treasury yields, reflecting uncertainty over the future direction of monetary policy.",
          "For Brazil, the implications are significant. A Warsh-led Fed can affect the Brazilian economy through three main channels: the dollar-real exchange rate, the interest rate differential between the Selic and US Treasuries, and foreign capital flows.",
          "If investors expect tighter US monetary policy, capital may move toward dollar-denominated assets. This can weaken the Brazilian real, raise the cost of imported goods, and intensify inflationary pressure on items such as fuel, wheat, and industrial inputs.",
          "The Brazilian Central Bank may then be forced to maintain a wide interest rate spread to keep Brazil attractive to global investors. While this can help prevent capital flight, it also raises domestic borrowing costs and may slow business investment and consumer spending."
        ],
        words: [
          "politically sensitive = politicamente delicado",
          "financial wellbeing = bem-estar financeiro",
          "reluctance = resistência / relutância",
          "dollar-denominated assets = ativos denominados em dólar",
          "interest rate differential = diferencial de juros",
          "capital flight = fuga de capital",
          "domestic borrowing costs = custo interno do crédito"
        ],
        questions: [
          "Why is Warsh's appointment politically sensitive?",
          "What tension exists between political pressure and central bank independence?",
          "How can expectations about US interest rates influence emerging markets like Brazil?",
          "Why might a stronger dollar create inflationary pressure in Brazil?",
          "Do you think Brazil should prioritize controlling inflation or stimulating growth? Justify your answer.",
          "In your opinion, how much power should financial markets have over a country's economic decisions?"
        ]
      }
    }
  },

  // =======================================================
  // MODELO PARA COPIAR E COLAR OUTRA NOTÍCIA
  // Copie este bloco, tire os // e troque a data/conteúdo.
  // =======================================================
  // "2026-05-24": {
  //   edition: "Sunday Edition",
  //   topic: "World News",
  //   image: "news/nome-da-imagem.jpg",
  //   imageCaption: "Legenda da imagem",
  //   levels: {
  //     1: { badge:"lv1", title:"Título Level 1", text:["Parágrafo 1"], words:["word = tradução"], questions:["Pergunta 1"] },
  //     2: { badge:"lv2", title:"Título Level 2", text:["Parágrafo 1"], words:["word = tradução"], questions:["Pergunta 1"] },
  //     3: { badge:"lv3", title:"Título Level 3", text:["Parágrafo 1"], words:["word = tradução"], questions:["Pergunta 1"] },
  //     4: { badge:"lv4", title:"Título Level 4", text:["Parágrafo 1"], words:["word = tradução"], questions:["Pergunta 1"] }
  //   }
  // }
};

let currentLevel = 1;
let currentStoryKey = null;
let utterance = null;
let paused = false;

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getStoryKeyForToday() {
  const today = getLocalDateKey();
  if (DAILY_NEWS[today]) return today;

  const availableDates = Object.keys(DAILY_NEWS).sort();
  const previousDates = availableDates.filter(date => date <= today);

  if (previousDates.length) return previousDates[previousDates.length - 1];
  return availableDates[0];
}

function getCurrentStory() {
  return DAILY_NEWS[currentStoryKey];
}

function articlePlainText() {
  const level = getCurrentStory().levels[currentLevel];
  return `${level.title}. ${level.text.join(" ")}`;
}

function stopSpeech() {
  window.speechSynthesis.cancel();
  utterance = null;
  paused = false;
  document.getElementById("voiceStatus").textContent = "Browser reading · selected level";
}

function renderQuestions(questions) {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = questions.map((question, index) => `
    <div class="qblock">
      <div class="qhdr">Question ${index + 1}</div>
      <div class="qbody">
        <p class="qtxt">${question}</p>
        <textarea class="atxt" name="question_${index + 1}" placeholder="Your answer…" required></textarea>
      </div>
    </div>
  `).join("");
}

function renderLevel(level) {
  currentLevel = Number(level);
  const story = getCurrentStory();
  const levelData = story.levels[currentLevel];

  document.getElementById("ahead").textContent = levelData.title;
  document.getElementById("abody").innerHTML = levelData.text.map(p => `<p>${p}</p>`).join("");
  document.getElementById("words").innerHTML = levelData.words.map(w => `<span>${w}</span>`).join("");
  document.getElementById("newsEdition").textContent = story.edition || "Daily Edition";
  document.getElementById("newsTopic").textContent = story.topic || "World News";

  const imageBox = document.getElementById("imageBox");
  const newsImage = document.getElementById("newsImage");
  if (story.image) {
    newsImage.src = story.image;
    document.getElementById("imageCaption").textContent = story.imageCaption || "The Fluency Times";
    imageBox.classList.add("show");
  } else {
    imageBox.classList.remove("show");
  }

  const badge = document.getElementById("lvbadge");
  badge.className = "badge " + levelData.badge;
  document.getElementById("lvtxt").textContent = "Level " + currentLevel;
  document.getElementById("flevel").value = "Level " + currentLevel;
  document.getElementById("fstory").value = levelData.title;
  document.getElementById("fsubj").value = `The Fluency Times — ${story.edition || "Daily Edition"} — Level ${currentLevel} — ${levelData.title}`;

  renderQuestions(levelData.questions);

  document.querySelectorAll(".lbtn").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.level) === currentLevel);
  });

  stopSpeech();
}

function speakStory() {
  if (paused) {
    window.speechSynthesis.resume();
    paused = false;
    document.getElementById("voiceStatus").textContent = "Reading…";
    return;
  }

  stopSpeech();
  utterance = new SpeechSynthesisUtterance(articlePlainText());
  utterance.lang = "en-US";
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.onend = () => document.getElementById("voiceStatus").textContent = "Finished · click restart to listen again";
  window.speechSynthesis.speak(utterance);
  document.getElementById("voiceStatus").textContent = "Reading…";
}

function pauseStory() {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
    paused = true;
    document.getElementById("voiceStatus").textContent = "Paused";
  }
}

function restartStory() {
  stopSpeech();
  speakStory();
}

function setDateText() {
  const date = new Date();
  document.getElementById("ddate").textContent = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function init() {
  currentStoryKey = getStoryKeyForToday();
  setDateText();

  document.querySelectorAll(".lbtn").forEach(btn => {
    btn.addEventListener("click", () => renderLevel(btn.dataset.level));
  });

  document.getElementById("playBtn").addEventListener("click", speakStory);
  document.getElementById("pauseBtn").addEventListener("click", pauseStory);
  document.getElementById("restartBtn").addEventListener("click", restartStory);

  renderLevel(1);

  document.getElementById("qform").addEventListener("submit", async function(e) {
    e.preventDefault();
    stopSpeech();

    const btn = document.getElementById("sbtn");
    btn.disabled = true;
    btn.textContent = "Sending…";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(this)
      });
      const data = await response.json();

      if (data.success) {
        document.getElementById("smsg").style.display = "block";
        btn.style.display = "none";
        document.getElementById("smsg").scrollIntoView({ behavior: "smooth", block: "center" });
      } else {
        btn.disabled = false;
        btn.textContent = "Send My Answers ✉";
        alert("Something went wrong.");
      }
    } catch (error) {
      btn.disabled = false;
      btn.textContent = "Send My Answers ✉";
      alert("Connection error.");
    }
  });
}

init();
