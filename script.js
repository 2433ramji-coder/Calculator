document.getElementById('darkModeToggle').onclick = function() {
      document.body.classList.toggle('dark');
      this.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
    };

    let display = document.getElementById('display');
    let mood = document.getElementById('mood');
    let input = '';

    function addToDisplay(val) {
      if (display.textContent === "0" && !isNaN(val)) {
        display.textContent = val;
        input = val;
      } else {
        display.textContent += val;
        input += val;
      }
      mood.textContent = '🙂';
      mood.className = 'mood';
    }

    function clearDisplay() {
      display.textContent = "0";
      input = '';
      mood.textContent = '🙂';
      mood.className = 'mood';
    }

    function clearEntry() {
      let match = input.match(/(.*?)(\d+\.?\d*|π|[+\-*/^√])$/);
      if (match && match[1] !== undefined) {
        input = match[1];
        display.textContent = input.length > 0 ? input : '0';
      } else {
        input = '';
        display.textContent = '0';
      }
      mood.textContent = '🙂';
      mood.className = 'mood';
    }

    function backspace() {
      if (input.length > 0) {
        input = input.slice(0, -1);
        display.textContent = input.length > 0 ? input : '0';
      }
      mood.textContent = '🙂';
      mood.className = 'mood';
    }

    function calculate() {
      let result = 0;
      try {
        let evalInput = input.replace(/π/g, Math.PI);
        result = eval(evalInput);
        display.textContent = result;
        input = result.toString();
      } catch {
        display.textContent = "Err";
        mood.textContent = '😱';
        mood.className = 'mood negative';
        input = '';
        return;
      }
      if (result > 0) {
        mood.textContent = '😃';
        mood.className = 'mood positive';
      } else if (result < 0) {
        mood.textContent = '😢';
        mood.className = 'mood negative';
      } else if (result === 0) {
        mood.textContent = '😐';
        mood.className = 'mood zero';
      }
    }

    function percentage() {
      if (input.length > 0) {
        try {
          let value = eval(input) / 100;
          display.textContent = value;
          input = value.toString();
        } catch {
          display.textContent = "Err";
          mood.textContent = '😱';
          mood.className = 'mood negative';
          input = '';
        }
      }
    }

    function squareRoot() {
      if (input.length > 0) {
        try {
          let value = Math.sqrt(eval(input));
          display.textContent = value;
          input = value.toString();
          mood.textContent = '🤔';
          mood.className = 'mood';
        } catch {
          display.textContent = "Err";
          mood.textContent = '😱';
          mood.className = 'mood negative';
          input = '';
        }
      }
    }

    function square() {
      if (input.length > 0) {
        try {
          let value = Math.pow(eval(input), 2);
          display.textContent = value;
          input = value.toString();
          mood.textContent = '🤩';
          mood.className = 'mood';
        } catch {
          display.textContent = "Err";
          mood.textContent = '😱';
          mood.className = 'mood negative';
          input = '';
        }
      }
    }

    function pi() {
      if (input.length === 0 || display.textContent === "0") {
        input = "π";
        display.textContent = "π";
      } else {
        input += "*π";
        display.textContent += "π";
      }
      mood.textContent = '🙂';
      mood.className = 'mood';
    }
