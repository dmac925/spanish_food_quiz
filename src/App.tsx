import React, { useState, useCallback, useMemo } from 'react';
import { menuItems } from './data/menuItems';
import { QuizCard } from './components/QuizCard';
import { GraduationCap } from 'lucide-react';

export const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shuffledItems = useMemo(() => [...menuItems].sort(() => Math.random() - 0.5), []);

  const generateOptions = useCallback((correctAnswer: string) => {
    const incorrectOptions = menuItems
      .filter(item => item.english !== correctAnswer)
      .map(item => item.english)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    return [...incorrectOptions, correctAnswer]
      .sort(() => Math.random() - 0.5);
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === shuffledItems[currentIndex].english) {
      setScore(prev => prev + 1);
    }

    if (currentIndex === shuffledItems.length - 1) {
      setGameOver(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const restartGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setGameOver(false);
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
          <GraduationCap className="mx-auto text-blue-500 mb-4" size={48} />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">¡Bien hecho! (Well done!)</h2>
          <p className="text-xl mb-6">Your final score: {score}/{shuffledItems.length}</p>
          <button
            onClick={restartGame}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 
                     transition-colors duration-200 font-semibold"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <QuizCard
        currentItem={shuffledItems[currentIndex]}
        options={generateOptions(shuffledItems[currentIndex].english)}
        onAnswer={handleAnswer}
        score={score}
        total={shuffledItems.length}
      />
    </div>
  );
};