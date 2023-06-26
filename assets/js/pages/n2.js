let script = document.getElementById('script');

jlpt();

function jlpt() {
  var t1 = document.getElementById('translate-1');
  var t2 = document.getElementById('translate-2');
  var t3 = document.getElementById('translate-3');
  var t4 = document.getElementById('translate-4');
  var t5 = document.getElementById('submit');
  var t6 = document.getElementById('reset');

  var lang = localStorage.getItem('lang');
  if (lang === 'EN') {
    t1.innerHTML = "Wrong:";
    t2.innerHTML = "Translation";
    t3.innerHTML = "Correct:";
    t4.innerHTML = "Percentage:";
    t5.innerHTML = "Send";
    t6.innerHTML = "Reset Statistics";
    loadDbScript('assets/js/en/db2.js');
  } else {
    t1.innerHTML = "Erros:";
    t2.innerHTML = "Tradução";
    t3.innerHTML = "Acertos:";
    t4.innerHTML = "Percentual:";
    t5.innerHTML = "Enviar";
    t6.innerHTML = "Resetar Estatísticas";
    loadDbScript('assets/js/pt/db2.js');
  }
}

function loadDbScript(src) {
  var dbScriptElement = document.createElement('script');
  dbScriptElement.src = src;
  dbScriptElement.onload = function() {
    loadShitsumonScript();
  };
  script.appendChild(dbScriptElement);
}

function loadShitsumonScript() {
  var shitsumonScriptElement = document.createElement('script');
  var lang = localStorage.getItem('lang');
  if (lang === 'EN') {
    shitsumonScriptElement.src = 'assets/js/en/shitsumon.js';
  } else {
    shitsumonScriptElement.src = 'assets/js/pt/shitsumon.js';
  }
  script.appendChild(shitsumonScriptElement);
}
