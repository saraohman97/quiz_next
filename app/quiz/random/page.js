'use client'

import React, { useState } from 'react'
import { randomQuiz } from '../../data'

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  })

  const { questions } = randomQuiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true)
    setSelectedAnswerIndex(idx)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
      console.log('true')
    } else {
      setSelectedAnswer(false)
      console.log('false')
    }
  }

  //calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null)
    setResult(prev =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1
        } : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1
        }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    setChecked(false)
  }

  return (
    <div className='bg-white px-4 py-6 rounded-2xl w-96'>
      <h1 className='text-4xl'>Quiz page</h1>
      <div>
        <h2 className='mb-4'>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>

      <div>
        {!showResult ? (
          //quiz questions
          <div>
            <h3 className='text-xl text-pink-400 pb-4'>{questions[activeQuestion].question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={selectedAnswerIndex === idx
                  ? 'border border-solid border-gray-200 bg-teal-50 outline outline-4 outline-teal-200 rounded mb-2 py-4 text-center text-gray-400 list-none cursor-pointer'
                  : 'border border-solid border-gray-200 rounded mb-2 py-4 text-center text-gray-400 list-none cursor-pointer hover:bg-gray-100'
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {/* what does activeQuestion do? */}
            <button onClick={nextQuestion} disabled={checked ? '' : 'disabled'} className={checked ? 'bg-pink-200 p-2 w-full rounded' : 'bg-gray-200 p-2 w-full rounded'}>{activeQuestion === question.length - 1 ? 'Finish' : 'Next'}</button>
          </div>
        ) : (
          //quiz answer
          <div>
            <h3 className='text-xl text-pink-400 pb-4'>
              Result <br />
              Overall {(result.score / 20) * 100}%
            </h3>
            <p>Total questions: <span>{questions.length}</span></p>
            <p>Total score: <span>{result.score}%</span></p>
            <p>Correct answers: <span>{result.correctAnswers}</span></p>
            <p>Wrong answers: <span>{result.wrongAnswers}</span></p>
            <button className='mt-4 bg-pink-200 p-2 w-full rounded' onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default page