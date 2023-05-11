
const form = document.querySelector('form')
const showPoints = document.querySelector('.show-points')
const correctAsnwers = ['B', 'A', 'B', 'A', 'A']

const asnwers = ( ) =>  {
    const userAsnwers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    ]

    return userAsnwers
}

const insertPoints = (text) => {
    showPoints.textContent = `${text}`
}

const userCorrectAsnwers = event => {
    event.preventDefault()

    let points = 0

    const isACorrectAsnwers = (asnwer, i) => {
        if (asnwer === correctAsnwers[i]){
           points += 1
        }
    }
    
    asnwers().forEach(isACorrectAsnwers)
    
    insertPoints(`Você acertou ${points}/5 perguntas!`)

    if (points === 0) {
       insertPoints(`Você acertou nenhuma das 5 perguntas )=`)
    }
}

form.addEventListener('submit' , userCorrectAsnwers)
