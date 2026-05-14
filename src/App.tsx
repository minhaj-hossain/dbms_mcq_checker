import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  Info, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  BookOpen, 
  Database,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { QUESTIONS, Question } from './questions';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const handleOptionSelect = (key: string) => {
    if (isAnswered) return;
    setSelectedOption(key);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return <ResultsView score={score} total={QUESTIONS.length} onRestart={handleRestart} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-white">
      {/* Header Section */}
      <header className="h-20 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 px-6 sm:px-10 flex items-center justify-between shrink-0 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-900/20">
            DB
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight">DBMS Mastery</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Oracle & SQL Certification • Module 1</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="text-right">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Progress</p>
            <p className="text-sm font-bold text-slate-200">Question {currentIndex + 1} of {QUESTIONS.length}</p>
          </div>
          <div className="w-24 sm:w-32 h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <motion.div 
              className="h-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 45, damping: 15 }}
            />
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col lg:flex-row p-6 sm:p-8 gap-8 max-w-7xl mx-auto w-full items-start">
        
        {/* Question Column */}
        <div className="flex-1 w-full flex flex-col gap-6 lg:max-w-3xl">
          <motion.div 
            key={`q-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-[32px] p-8 shadow-2xl shadow-black/20 border border-slate-800"
          >
            <span className="inline-block px-3 py-1 bg-indigo-950/50 text-indigo-400 text-[10px] font-bold rounded-lg mb-4 uppercase tracking-widest border border-indigo-900/50">
              Question Context
            </span>
            <h2 className="text-2xl font-semibold leading-relaxed text-slate-100">
              {currentQuestion.question}
            </h2>
          </motion.div>

          <div className="space-y-3 w-full">
            {Object.entries(currentQuestion.options).map(([optKey, optValue], idx) => (
              <OptionButton
                key={optKey}
                label={optKey}
                value={optValue}
                isSelected={selectedOption === optKey}
                isCorrect={isAnswered && optKey === currentQuestion.answer}
                isWrong={isAnswered && selectedOption === optKey && optKey !== currentQuestion.answer}
                isDisabled={isAnswered}
                onClick={() => handleOptionSelect(optKey)}
                delay={idx * 0.05}
              />
            ))}
          </div>

          {!isAnswered && (
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#4338ca' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className={`group px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl
                  ${selectedOption === null 
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' 
                    : 'bg-indigo-600 text-white shadow-indigo-900/40'}
                `}
              >
                Validate Selection
                <CheckCircle2 className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </div>

        {/* Feedback Section (Sidebar on desktop, below on mobile) */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="w-full lg:w-96 flex flex-col gap-6 lg:sticky lg:top-28"
            >
              {/* Result Card */}
              <div className={`rounded-[32px] p-6 border-2 transition-colors ${
                selectedOption === currentQuestion.answer 
                ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-100' 
                : 'bg-rose-950/20 border-rose-900/50 text-rose-100'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                    selectedOption === currentQuestion.answer ? 'bg-emerald-500' : 'bg-rose-500'
                  }`}>
                    {selectedOption === currentQuestion.answer ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                  </div>
                  <span className="font-bold uppercase tracking-wider text-sm">
                    {selectedOption === currentQuestion.answer ? 'Correct Answer' : 'Incorrect Choice'}
                  </span>
                </div>
                <p className="text-sm leading-relaxed font-medium text-slate-300">
                  {selectedOption === currentQuestion.answer 
                    ? "Excellent! Your understanding of this concept is accurate." 
                    : "Not quite the right answer. Review the analysis below to strengthen your knowledge."
                  }
                </p>
              </div>

              {/* Analysis Card */}
              <div className="bg-slate-900 rounded-[32px] p-6 border border-slate-800 shadow-2xl shadow-black/20 flex flex-col flex-1">
                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">Conceptual Analysis</h3>
                
                <div className="space-y-8 flex-1">
                  <section>
                    <h4 className="text-[10px] font-bold text-slate-300 mb-2 uppercase flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                       Distractor Trap
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed italic pr-2">
                      {currentQuestion.why_wrong}
                    </p>
                  </section>

                  <div className="h-px bg-slate-800 flex-none"></div>

                  <section>
                    <h4 className="text-[10px] font-bold text-slate-300 mb-2 uppercase flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      Official Explanation
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      {currentQuestion.explanation}
                    </p>
                  </section>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#1e293b' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNext}
                  className="w-full mt-10 bg-white text-slate-950 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/20"
                >
                  {currentIndex === QUESTIONS.length - 1 ? 'Finish Challenge' : 'Continue to Next'}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Bar */}
      <footer className="h-16 bg-slate-900 border-t border-slate-800 px-6 sm:px-10 flex items-center shrink-0 justify-between mt-auto">
        <div className="flex gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Accuracy: {score > 0 ? Math.round((score / (isAnswered ? currentIndex + 1 : currentIndex)) * 100) : 0}%</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Focus Mode Active</span>
          </div>
        </div>
        <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest hidden sm:block">
          DBMS CERTIFICATION PREP • v1.0
        </div>
      </footer>
    </div>
  );
}

interface OptionButtonProps {
  label: string;
  value: string;
  isSelected: boolean;
  isCorrect: boolean;
  isWrong: boolean;
  isDisabled: boolean;
  onClick: () => void;
  delay: number;
}

const OptionButton: React.FC<OptionButtonProps> = ({ 
  label, 
  value, 
  isSelected, 
  isCorrect, 
  isWrong, 
  isDisabled, 
  onClick,
  delay 
}) => {
  let containerStyles = "bg-slate-900 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/50";
  let letterStyles = "border-slate-700 text-slate-500 group-hover:bg-slate-800 group-hover:border-indigo-400";
  let textStyles = "text-slate-400 font-medium";
  
  if (isSelected && !isDisabled) {
    containerStyles = "bg-indigo-950/30 border-indigo-500 shadow-2xl shadow-indigo-950/50 ring-2 ring-indigo-500/10";
    letterStyles = "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40 border-indigo-600";
    textStyles = "text-indigo-100 font-bold";
  }
  
  if (isCorrect) {
    containerStyles = "bg-emerald-950/30 border-emerald-500 shadow-lg shadow-emerald-950/20";
    letterStyles = "bg-emerald-500 text-white border-emerald-500";
    textStyles = "text-emerald-100 font-bold";
  } else if (isWrong) {
    containerStyles = "bg-rose-950/30 border-rose-500 shadow-lg shadow-rose-950/20";
    letterStyles = "bg-rose-500 text-white border-rose-500";
    textStyles = "text-rose-100 font-bold";
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full group relative border-2 rounded-2xl p-5 flex items-center gap-5 transition-all duration-200 ${containerStyles} ${isDisabled && !isCorrect && !isWrong ? 'opacity-30 grayscale-[0.5]' : ''} ${isDisabled ? 'cursor-default' : 'cursor-pointer hover:-translate-y-0.5'}`}
    >
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold transition-all text-sm shrink-0 ${letterStyles}`}>
        {isCorrect ? <CheckCircle2 className="w-5 h-5" /> : isWrong ? <XCircle className="w-5 h-5" /> : label.toUpperCase()}
      </div>
      <span className={`text-base leading-relaxed transition-colors ${textStyles}`}>
        {value}
      </span>
      {(isCorrect || (isSelected && !isDisabled)) && (
        <div className={`ml-auto p-1.5 rounded-full ${isCorrect ? 'bg-emerald-500' : 'bg-indigo-600'} text-white shadow-lg`}>
          <CheckCircle2 className="w-4 h-4" />
        </div>
      )}
    </motion.button>
  );
}

function ResultsView({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) {
  const percentage = Math.round((score / total) * 100);
  
  const getFeedback = () => {
    if (percentage === 100) return "Master of Databases!";
    if (percentage >= 80) return "Excellent Performance!";
    if (percentage >= 60) return "Well Done Achievement!";
    return "Foundation Established!";
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl bg-slate-900 rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 p-10 sm:p-14 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
        
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="w-24 h-24 bg-slate-800 rounded-3xl flex items-center justify-center text-indigo-400 mb-6 mx-auto shadow-inner border border-slate-700">
             <Trophy className="w-12 h-12" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-white mb-3 tracking-tight">Assessment Summary</h1>
        <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-10">{getFeedback()}</p>
        
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-950/50 rounded-3xl p-8 border border-slate-800">
            <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-2">Final Score</p>
            <p className="text-4xl font-mono font-black text-white">{score}<span className="text-slate-700 text-2xl">/{total}</span></p>
          </div>
          <div className="bg-indigo-950/30 rounded-3xl p-8 border border-indigo-900/50">
            <p className="text-[10px] uppercase font-bold text-indigo-400 tracking-widest mb-2">Mastery Rank</p>
            <p className="text-4xl font-mono font-black text-indigo-400">{percentage}%</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: '#1e293b' }}
          whileTap={{ scale: 0.98 }}
          onClick={onRestart}
          className="w-full py-5 bg-white text-slate-950 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-indigo-500/10 text-lg"
        >
          <RotateCcw className="w-6 h-6" />
          Restart Certification Prep
        </motion.button>
        
        <p className="mt-8 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
           Digital Accreditation for Database Mastery
        </p>
      </motion.div>
    </div>
  );
}
