const form = document.querySelector('form')
const finalScoreContainer = document.querySelector('.final-score-container')

const correctAnswers = ['B', 'A', 'D', 'C', 'A']

let score = 0

const getUserAnswers = () => {
  const userAnswers = []

  correctAnswers.forEach((_, index) => {
   const userAnswer = form[`inputQuestion${index + 1}`].value
   userAnswers.push(userAnswer)   
  })
  
  return userAnswers
}

const validateUserAnswers = userAnswers => {
  correctAnswers.forEach((correctAnswer, index) => {
    if (correctAnswer === userAnswers[index]) {
      score++
    }
  })
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  finalScoreContainer.classList.remove('d-none')
}

const animatedFinalScore = () => {
  let counter = 0
  
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    document.querySelector('span').textContent = `${counter++}/5`
    
  },120)
}

const handleFormSubmit = event => {
  event.preventDefault()
  score = 0

  const userAnswers = getUserAnswers()
  
  validateUserAnswers(userAnswers)
  showFinalScore()
  animatedFinalScore()
}

form.addEventListener('submit' , handleFormSubmit)
