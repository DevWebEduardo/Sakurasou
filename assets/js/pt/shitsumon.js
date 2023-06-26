// Se o usuário pressionar F5, desmarcar as checkboxes
var checkboxesI = document.getElementsByClassName('box');
for (var i = 0; i < checkboxesI.length; i++) {
  if (checkboxesI[i].checked) {
    checkboxesI[i].checked = false;
  }
}

function shitsumonCheckN() {
  var checkboxesI = document.getElementsByClassName('shitsumon-c');
  for (var i = 0; i < checkboxesI.length; i++) {
    if (checkboxesI[i].checked) {
      checkboxesI[i].checked = false;
    }
  }
}
shitsumonCheckN();

// Coletar elementos HTML
var cofa = document.getElementById('cofa');
var furiganaDiv = document.getElementById('furiganaDiv');
var frase = document.getElementById('frase');
var translateDiv = document.getElementById('translateDiv');
var resp = document.getElementById('resp');
var submit = document.getElementById('submit');
var numberBoxes = document.querySelectorAll('p.stats');
var resetButton = document.getElementById('reset');

// Números iniciais
var correct = 0;
var wrong = 0;
var total = 0;
var percent = 0;

numberBoxes[0].innerHTML = correct;
numberBoxes[1].innerHTML = wrong;
numberBoxes[2].innerHTML = percent;

// Configuração para inicializar, executa o jogo certo na página certa

function pegaBox() {
  var x = [];
  // Verifica se alguma checkbox está marcada
  const checkboxes = document.getElementsByClassName('box');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      x.push(checkboxes[i].value);
    }
  }
  return x;
}

// Array para evitar repetição de cards
var recent = [null, null, null, null, null, null, null, null, null, null, null, null];

// Funções
function randomCharacter() {
  do {
    i = Math.floor((Math.random() * db.length));
  } while (
    i == recent[0] ||
    i == recent[1] ||
    i == recent[2] ||
    i == recent[3] ||
    i == recent[4] ||
    i == recent[5] ||
    i == recent[6] ||
    i == recent[7] ||
    i == recent[8] ||
    i == recent[9] ||
    i == recent[10] ||
    i == recent[11]
  );
  recent.shift();
  recent.push(i);
  return i;
}
var r = '';

function setQuest() {
  randomCharacter();
  var recent = [];
  // Coloca frase
  furiganaDiv.innerHTML = db[i][1];
  frase.innerHTML = db[i][0];
  translateDiv.innerHTML = db[i][2];
  r = i;
  // Embaralha as respostas
  var shuffledQuest = [];
  do {
    x = Math.floor(Math.floor(Math.random() * 5) + 3);
    // Não permite respostas repetidas
    if (
      x != recent[0] &&
      x != recent[1] &&
      x != recent[2] &&
      x != recent[3] &&
      x != recent[4]
    ) {
      var y =
        '<div class="opQuest flex justify-center items-center bg-slate-400 rounded m-1 md:m-2 p-1 md:p-2 md:mr-2 md:w-5/12 "><input type="checkbox" id="quest" class="box form-checkbox h-6 w-6 mr-2 text-indigo-600 checked:bg-indigo-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50" value="' +
        db[i][x] +
        '" unchecked>' +
        db[i][x] +
        '</div>';
      shuffledQuest = shuffledQuest.concat(y);
      recent.push(x);
    }
  } while (5 > shuffledQuest.length);
  // Coloca as respostas sem vírgulas
  resp.innerHTML = shuffledQuest.join('');
}
setQuest();

// Loop
function gameLoop() {
  // Pega a resposta
  var respBox = pegaBox();
  respBox = respBox[0];
  // Seta variável com resposta correta
  console.log(i);
  var correctResp = db[r][3];
  console.log(correctResp);
  // Seta variáveis antes de julgar certo e errado
  if (respBox == correctResp) {
    correct = correct + 1;
    total = total + 1;
    percent = Math.floor((correct / total) * 100) + '%';
    numberBoxes[0].innerHTML = correct;
    numberBoxes[2].innerHTML = percent;
    cofa.innerHTML = 'Correto!';
    cofa.style.visibility = 'visible';
    // Check Box Correto
    submit.disabled = true;
  } else {
    wrong = wrong + 1;
    total = total + 1;
    percent = Math.floor((correct / total) * 100) + '%';
    numberBoxes[1].innerHTML = wrong;
    numberBoxes[2].innerHTML = percent;
    cofa.innerHTML = 'Incorreto, resposta correta é: ' + correctResp;
    cofa.style.visibility = 'visible';
    // Check Box Incorreto
    submit.disabled = true;
  }
  // Inicia outra frase
  setTimeout(function () {
    setQuest();
    shitsumonCheckN();
    submit.disabled = false;
    cofa.style.visibility = 'hidden';
    resp.focus();
  }, 2000);
}

// Reseta estatísticas
function resetStatistics() {
  correct = 0;
  wrong = 0;
  total = 0;
  percent = 0;
  numberBoxes[0].innerHTML = correct;
  numberBoxes[1].innerHTML = wrong;
  numberBoxes[2].innerHTML = 0;
}
resetButton.addEventListener('click', function () {
  resetStatistics();
});

// Quando pressionado o botão enviar, executa o gameLoop
submit.addEventListener('click', function () {
  var x = pegaBox();
  if (x.length === 0) {
    cofa.innerHTML = 'Por favor, selecione uma opção de resposta.';
    cofa.style.visibility = 'visible';
    submit.disabled = true;
    setTimeout(function () {
      cofa.style.visibility = 'hidden';
      submit.disabled = false;
    }, 2000);
  } else if (x.length > 1) {
    cofa.innerHTML = 'Por favor, selecione apenas uma opção de resposta.';
    cofa.style.visibility = 'visible';
    submit.disabled = true;
    setTimeout(function () {
      cofa.style.visibility = 'hidden';
      submit.disabled = false;
    }, 2000);
  } else {
    gameLoop();
  }
});

// Mostrar furigana ou tradução
var translate = document.getElementById('translate');

translate.addEventListener('click', () => {
  translateDiv.classList.toggle('hidden');
});

var furigana = document.getElementById('romaji');

furigana.addEventListener('click', () => {
  furiganaDiv.classList.toggle('hidden');
});
