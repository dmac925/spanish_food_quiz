import React, { useState } from 'react';
import { MenuItem } from '../data/menuItems';
import { Trophy, UtensilsCrossed, CheckCircle2, XCircle } from 'lucide-react';

interface QuizCardProps {
  currentItem: MenuItem;
  options: string[];
  onAnswer: (answer: string) => void;
  score: number;
  total: number;
}

export const QuizCard: React.FC<QuizCardProps> = ({ currentItem, options, onAnswer, score, total }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      onAnswer(answer);
    }, 2000);
  };

  const getButtonClasses = (option: string) => {
    if (!showFeedback) {
      return "p-4 text-lg rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50";
    }

    if (option === currentItem.english) {
      return "p-4 text-lg rounded-lg border-2 border-green-500 bg-green-50 text-green-700 flex items-center justify-between";
    }

    if (option === selectedAnswer && selectedAnswer !== currentItem.english) {
      return "p-4 text-lg rounded-lg border-2 border-red-500 bg-red-50 text-red-700 flex items-center justify-between";
    }

    return "p-4 text-lg rounded-lg border-2 border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed";
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="text-yellow-500" size={24} />
          <span className="text-lg font-semibold">Score: {score}/{total}</span>
        </div>
        <UtensilsCrossed className="text-red-500" size={24} />
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentItem.spanish}</h2>
        <p className="text-gray-600 italic capitalize">{currentItem.category}</p>
        {showFeedback && selectedAnswer !== currentItem.english && (
          <div className="mt-4 text-red-600 bg-red-50 p-3 rounded-lg">
            <p>Incorrect! The right answer is: <span className="font-bold">{currentItem.english}</span></p>
            <p className="text-sm mt-1 text-gray-600">{currentItem.description}</p>
          </div>
        )}
        {showFeedback && selectedAnswer === currentItem.english && (
          <div className="mt-4 text-green-600 bg-green-50 p-3 rounded-lg">
            <p>Correct! <span className="font-bold">{currentItem.english}</span></p>
            <p className="text-sm mt-1 text-gray-600">{currentItem.description}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && handleAnswerClick(option)}
            disabled={showFeedback}
            className={getButtonClasses(option)}
          >
            <span>{option}</span>
            {showFeedback && option === currentItem.english && (
              <CheckCircle2 className="text-green-500" size={20} />
            )}
            {showFeedback && option === selectedAnswer && option !== currentItem.english && (
              <XCircle className="text-red-500" size={20} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};