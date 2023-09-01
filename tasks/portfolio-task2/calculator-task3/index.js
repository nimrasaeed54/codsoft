let string = "";
let msg = document.querySelector('input')
let buttons = document.querySelectorAll('.btn')
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
                msg.value = string;
            }
            catch (error) {
                msg.value = 'Error';
            }
        }
        else if (e.target.innerHTML == 'C') {
            try {
                string = "";
                document.querySelector('input').value = string;
                msg.value = string;

            }
            catch (error) {
                msg.value = 'Error';
            }


        }
        else if (e.target.innerHTML == '^') {
            try {

                string = string + '**';
                document.querySelector('input').value = string;
                msg.value = string;

            }
            catch (error) {
                msg.value = 'Error';
            }

        }
        else if (e.target.innerHTML == 'del') {
            try {

                string = string.slice(0, -1);
                document.querySelector('input').value = string;
                msg.value = string;

            }

            catch (error) {
                msg.value = 'Error';
            }
        }
        else {
            try {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
                msg.value = string;

            }
            catch (error) {
                msg.value = 'Error';
            }
        }

    })
})
