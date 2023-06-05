const jokeBtn = document.getElementById('joke-btn');
const joke = document.getElementById('joke');

function generateJoke() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            joke.innerHTML = JSON.parse(this.responseText).value;
        } else {
            joke.innerHTML = 'Something went wrong';
        }

        console.log(this.readyState);
    }
    

    xhr.send();

}

jokeBtn.addEventListener('click', generateJoke);
joke.addEventListener('DOMContentLoaded', generateJoke);