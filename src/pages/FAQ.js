import React, { useState } from 'react'
import '../Styles/faq.css'
const FQA = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleQuestionClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const questions = [
    {
      question: 'How do I make a purchase?',
      answer: 'To purchase artwork, simply browse our collection and click on the artwork you are interested in. You will be guided through the checkout process to complete your purchase.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, such as Visa, Mastercard, and American Express. We also offer alternative payment methods, such as PayPal and Apple Pay.',
    },
    {
      question: 'Is the artwork ready to hang?',
      answer: 'It depends on the artwork. Some pieces come ready to hang with pre-installed hanging hardware, while others may require additional framing or mounting. The product description will provide details about the artwork\'s display requirements.',
      },

      {
        question: 'What is your return policy?',
        answer: 'We have a 30-day return policy. If you are not satisfied with your purchase, please contact our customer service team within 30 days of receiving the artwork to initiate the return process. Please note that certain conditions apply.',
        },
        {
          question: 'Can I cancel or modify my order?',
          answer: 'If you need to cancel or modify your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request, but please note that once an order has been shipped, it may not be possible to make changes.',
      },

      {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to many countries. During the checkout process, you can select your preferred shipping destination, and the applicable shipping fees will be calculated accordingly.',
    },

    {
      question: 'How do I care for the artwork?',
      answer: 'Each artwork comes with care instructions specific to its medium and materials. We recommend following these instructions to ensure the longevity and preservation of your artwork.',
  },

//   {
//     question: 'How do I care for the artwork?',
//     answer: 'Please feel free to contact our customer service team if you have any further questions or concerns. We are here to assist you throughout your artwork purchase journey.',
// },
  
   ];
  return (
    <div className="faq">
            <p>Click to view</p>

    <h2>Customer Q & A - Artwork Purchase Transactions</h2>
    {questions.map((q, index) => (
      <div key={index}>
        <p>
          <b onClick={() => handleQuestionClick(q.answer)}>{`Q: ${q.question}`}</b>
          {selectedAnswer === q.answer && (
            <span>{`A: ${q.answer}`}</span>
          )}
        </p>
      </div>
    ))}
  </div>
  )
}

export default FQA