(function () {

    function isPrime(num) {
        if (num <= 3) return num > 1;
        if (num % 2 == 0 || num % 3 == 0) return false;

        let i = 5;
        while (Math.pow(i,2) <= num) {
            if (num % i == 0 || num % (i+2) == 0) return false;
            i += 6;
        }
        return true;
    }

    const staticForm = document.getElementById('attempt-form');
    let myUnorderedList = document.getElementById('attempts');
    let numberInput = document.getElementById('number');
    let attemptForm = document.getElementById('attempt-form');
    let dangerButton = document.getElementById('danger');

    if (staticForm) {
      // We can take advantage of functional scoping; our event listener has access to its outer functional scope
      // This means that these variables are accessible in our callback
      staticForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let errorMessage = document.getElementById('errorMessage');
        if(numberInput.value && numberInput.value >= 0) {
            errorMessage.innerHTML = "";
            // List items
            let li = document.createElement('li');

            // Numbers that are prime will be colored in green
            if (isPrime(numberInput.value)) {
                li.className = 'is-prime';
                li.innerHTML = `${numberInput.value} is a prime number `;
            // and numbers that are not will be colored in red
            } else {
                li.className = 'not-prime';
                li.innerHTML = `${numberInput.value} is NOT a prime number `;
            }
            myUnorderedList.append(li);
        } else {
            let errorMessage = document.getElementById('errorMessage');
            errorMessage.innerHTML = "Invalid Input: You must provide a whole number.";
        }
        // Empty the form so inputs dont stack
        attemptForm.reset();
        // Focus the form so we can enter new results immediately after submitting
        numberInput.focus();
      });

      // Devious addition
      dangerButton.addEventListener('click', (event) => {
        event.preventDefault();;
        const matches = document.querySelectorAll('.test');
        matches.forEach((item) => {
            let li = document.createElement('li');
            item.classList.toggle('danger');
            item.style.setProperty('--animation-time', Math.random()+'s');
        });
      });
    }
  })();
  