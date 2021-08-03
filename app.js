console.log('hello world')

const questions = document.querySelectorAll('section')


for (let question of questions) {
    question.addEventListener('click', function () {
        let answer = this.querySelector('.answer')
        let title = this.querySelector('h2')
        title.classList.toggle('bold')
        answer.classList.toggle('answerActive')
        // answer.classList.toggle('answer')

    })
}