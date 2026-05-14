import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Zap } from 'lucide-react';

// ─── INLINE QUESTIONS (replace with your import) ──────────────────────────────
const QUESTIONS = [
  {
    question: "What is the full form of DBMS?",
    options: { a: "Data of Binary Management System", b: "Database Management System", c: "Database Management Service", d: "Data Backup Management System" },
    answer: "b",
    explanation: "DBMS stands for Database Management System — software that lets users create, store, organize, and retrieve data. Examples include MySQL, Oracle, and Microsoft SQL Server.",
    why_wrong: "Option (a) is fabricated. Option (c) changes 'System' to 'Service'. Option (d) confuses DBMS with backup software — its core role is data management, not backup."
  },
  {
    question: "An Oracle database is an ____ from Oracle Corporation.",
    options: { a: "RDBMS", b: "ADBMS", c: "MDBMS", d: "None" },
    answer: "a",
    explanation: "Oracle Database is a Relational Database Management System (RDBMS). Data is stored in structured tables with rows and columns, linked by keys.",
    why_wrong: "ADBMS and MDBMS are not standard database classifications. Oracle's design is purely relational."
  },
  {
    question: "Which of the following best defines a database?",
    options: { a: "A collection of programs", b: "A type of software", c: "A collection of data", d: "A type of computer" },
    answer: "c",
    explanation: "A database is an organized collection of structured data — like a digital filing cabinet. It is the data itself, not the software or hardware.",
    why_wrong: "Option (a) describes an application suite. Option (b) describes the DBMS software, not the database. Option (d) is hardware that hosts a database."
  },
  {
    question: "Which SQL clause is used to filter groups of rows that have been aggregated?",
    options: { a: "WHERE", b: "HAVING", c: "GROUP BY", d: "ORDER BY" },
    answer: "b",
    explanation: "HAVING filters results after aggregation. It was added because WHERE cannot work with aggregate functions like COUNT(), SUM(), or AVG().",
    why_wrong: "WHERE filters rows before aggregation. GROUP BY organizes rows. ORDER BY only sorts the final output — none of them can filter aggregated groups."
  },
  {
    question: "Which of the following is not an example of DBMS?",
    options: { a: "MySQL", b: "Microsoft Access", c: "IBM DB2", d: "Google" },
    answer: "d",
    explanation: "Google is a technology company and search engine, not a DBMS. While Google builds cloud database tools, 'Google' itself is not a database management system.",
    why_wrong: "MySQL, Microsoft Access, and IBM DB2 are all real, purpose-built database management software products."
  }
];

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface Question {
  question: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
  why_wrong: string;
}

// ─── FONT LOADER ──────────────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);
  return null;
};

// ─── SCANLINE OVERLAY ─────────────────────────────────────────────────────────
const Scanlines = () => (
  <div
    className="pointer-events-none fixed inset-0 z-50"
    style={{
      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
    }}
  />
);

// ─── NOISE / GRAIN ────────────────────────────────────────────────────────────
const Grain = () => (
  <div
    className="pointer-events-none fixed inset-0 z-40 opacity-[0.025]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px',
    }}
  />
);

// ─── GLITCH TEXT ──────────────────────────────────────────────────────────────
const GlitchText = ({ text, className = '' }: { text: string; className?: string }) => {
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 3500 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`relative inline-block ${className}`}
      style={glitch ? {
        textShadow: `2px 0 #00F5FF, -2px 0 #CCFF00`,
        transform: `translateX(${Math.random() > 0.5 ? 2 : -2}px)`,
      } : {}}
    >
      {text}
    </span>
  );
};

// ─── CORNER BRACKETS ──────────────────────────────────────────────────────────
const CornerBrackets = ({ color = '#CCFF00', size = 16 }: { color?: string; size?: number }) => (
  <>
    {/* TL */}
    <span className="absolute top-0 left-0" style={{ width: size, height: size, borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    {/* TR */}
    <span className="absolute top-0 right-0" style={{ width: size, height: size, borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
    {/* BL */}
    <span className="absolute bottom-0 left-0" style={{ width: size, height: size, borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
    {/* BR */}
    <span className="absolute bottom-0 right-0" style={{ width: size, height: size, borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
  </>
);

// ─── OPTION BUTTON ────────────────────────────────────────────────────────────
const OptionButton = ({
  label, value, isSelected, isCorrect, isWrong, isDisabled, onClick, delay
}: {
  label: string; value: string; isSelected: boolean; isCorrect: boolean;
  isWrong: boolean; isDisabled: boolean; onClick: () => void; delay: number;
}) => {
  const getStyle = () => {
    if (isCorrect) return {
      border: '1px solid #CCFF00',
      background: 'rgba(204,255,0,0.07)',
      color: '#CCFF00',
      boxShadow: '0 0 20px rgba(204,255,0,0.15)',
    };
    if (isWrong) return {
      border: '1px solid #FF3366',
      background: 'rgba(255,51,102,0.07)',
      color: '#FF3366',
      boxShadow: '0 0 20px rgba(255,51,102,0.15)',
    };
    if (isSelected) return {
      border: '1px solid #00F5FF',
      background: 'rgba(0,245,255,0.06)',
      color: '#00F5FF',
      boxShadow: '0 0 24px rgba(0,245,255,0.12)',
    };
    return {
      border: '1px solid rgba(255,255,255,0.08)',
      background: 'rgba(255,255,255,0.02)',
      color: 'rgba(255,255,255,0.6)',
    };
  };

  const labelColor = isCorrect ? '#CCFF00' : isWrong ? '#FF3366' : isSelected ? '#00F5FF' : 'rgba(255,255,255,0.3)';

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={!isDisabled ? { x: 6, transition: { duration: 0.15 } } : {}}
      whileTap={!isDisabled ? { scale: 0.985 } : {}}
      onClick={onClick}
      disabled={isDisabled}
      style={{ ...getStyle(), transition: 'all 0.25s ease', fontFamily: "'Space Mono', monospace" }}
      className={`w-full relative rounded-lg p-4 sm:p-5 flex items-center gap-4 text-left ${isDisabled ? 'cursor-default' : 'cursor-pointer'} ${isDisabled && !isCorrect && !isWrong ? 'opacity-25' : ''}`}
    >
      <span
        className="text-xs font-bold shrink-0 w-7 h-7 flex items-center justify-center rounded border"
        style={{ borderColor: labelColor, color: labelColor, fontFamily: "'Space Mono', monospace" }}
      >
        {isCorrect ? '✓' : isWrong ? '✗' : label.toUpperCase()}
      </span>
      <span className="text-sm sm:text-base leading-snug flex-1">{value}</span>
    </motion.button>
  );
};

// ─── RESULTS VIEW ─────────────────────────────────────────────────────────────
const ResultsView = ({ score, total, onRestart }: { score: number; total: number; onRestart: () => void }) => {
  const pct = Math.round((score / total) * 100);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.from(containerRef.current, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' });
    if (circleRef.current) {
      gsap.from(circleRef.current, { scale: 0, rotation: -180, duration: 0.8, delay: 0.3, ease: 'back.out(1.7)' });
    }
  }, []);

  const grade = pct === 100 ? 'S' : pct >= 80 ? 'A' : pct >= 60 ? 'B' : pct >= 40 ? 'C' : 'D';
  const gradeColor = pct >= 80 ? '#CCFF00' : pct >= 60 ? '#00F5FF' : '#FF3366';

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#0F0F1A' }}>
      <FontLoader />
      <Scanlines />
      <Grain />

      {/* Grid background */}
      <div className="fixed inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div ref={containerRef} className="w-full max-w-lg relative z-10">
        <div
          className="relative p-8 sm:p-12 rounded-xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <CornerBrackets color={gradeColor} size={20} />

          <div className="text-center">
            <p className="text-xs tracking-[0.4em] mb-6 uppercase" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Space Mono', monospace" }}>
              SESSION_COMPLETE / RESULTS
            </p>

            <div ref={circleRef} className="inline-flex items-center justify-center mb-8">
              <div
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center flex-col"
                style={{ border: `3px solid ${gradeColor}`, boxShadow: `0 0 40px ${gradeColor}30, inset 0 0 40px ${gradeColor}05` }}
              >
                <span className="text-4xl sm:text-5xl font-black" style={{ color: gradeColor, fontFamily: "'Space Mono', monospace" }}>{grade}</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Space Mono', monospace" }}>{pct}%</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'CORRECT', value: score, color: '#CCFF00' },
                { label: 'TOTAL_Q', value: total, color: '#00F5FF' },
              ].map(({ label, value, color }) => (
                <div key={label} className="p-4 rounded-lg" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
                  <p className="text-xs mb-1" style={{ color: `${color}80`, fontFamily: "'Space Mono', monospace" }}>{label}</p>
                  <p className="text-2xl font-black" style={{ color, fontFamily: "'Space Mono', monospace" }}>{value}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={onRestart}
              className="w-full py-4 rounded-lg font-bold flex items-center justify-center gap-3 text-sm tracking-widest uppercase"
              style={{
                background: '#CCFF00',
                color: '#0F0F1A',
                fontFamily: "'Space Mono', monospace",
                boxShadow: '0 0 30px rgba(204,255,0,0.3)',
              }}
            >
              <RotateCcw className="w-4 h-4" />
              RESTART_SESSION
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  // Store answers per question: { [index]: { selected, answered } }
  const [answerHistory, setAnswerHistory] = useState<Record<number, { selected: string; answered: boolean }>>({});

  const headerRef = useRef<HTMLElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  const q: Question = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;
  const isCorrect = isAnswered && selectedOption === q.answer;

  // GSAP: initial page load only — keep questionRef visible, just animate header
  useEffect(() => {
    const tl = gsap.timeline();
    if (headerRef.current) tl.from(headerRef.current, { y: -60, opacity: 0, duration: 0.6, ease: 'power3.out' });
  }, []);

  // GSAP: progress bar
  useEffect(() => {
    if (progressFillRef.current) {
      gsap.to(progressFillRef.current, { width: `${progress}%`, duration: 0.6, ease: 'power2.out' });
    }
  }, [progress]);

  // GSAP: question change — skip on very first render to avoid blank first question
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (!questionRef.current) return;
    gsap.fromTo(questionRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [currentIndex]);

  const handleSelect = (key: string) => {
    if (isAnswered) return;
    setSelectedOption(key);
  };

  const handleCheck = () => {
    if (!selectedOption || isAnswered) return;
    setIsAnswered(true);
    const correct = selectedOption === q.answer;
    if (correct) setScore(s => s + 1);
    setAnswerHistory(prev => ({ ...prev, [currentIndex]: { selected: selectedOption, answered: true } }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      const nextIndex = currentIndex + 1;
      const savedNext = answerHistory[nextIndex];
      setCurrentIndex(nextIndex);
      setSelectedOption(savedNext?.selected ?? null);
      setIsAnswered(savedNext?.answered ?? false);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentIndex === 0) return;
    const prevIndex = currentIndex - 1;
    const savedPrev = answerHistory[prevIndex];
    // If current question was answered but going back, deduct score for current if it was correct
    // (score tracks only committed answers; back just navigates, no score change)
    setCurrentIndex(prevIndex);
    setSelectedOption(savedPrev?.selected ?? null);
    setIsAnswered(savedPrev?.answered ?? false);
  };

  if (showResults) return <ResultsView score={score} total={QUESTIONS.length} onRestart={() => { setCurrentIndex(0); setSelectedOption(null); setIsAnswered(false); setScore(0); setShowResults(false); setAnswerHistory({}); }} />;

  const answeredCount = Object.keys(answerHistory).length;
  const accuracy = answeredCount === 0 ? 0 : Math.round((score / answeredCount) * 100);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#0F0F1A', fontFamily: "'Space Mono', monospace" }}>
      <FontLoader />
      <Scanlines />
      <Grain />

      {/* Ambient blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: '#CCFF00', filter: 'blur(100px)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.04]" style={{ background: '#00F5FF', filter: 'blur(100px)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'linear-gradient(rgba(204,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      {/* ── HEADER ── */}
      <header
        ref={headerRef}
        className="relative z-10 flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 flex items-center justify-center rounded text-xs font-black"
            style={{ background: '#CCFF00', color: '#0F0F1A' }}
          >DB</div>
          <div className="hidden sm:block">
            <GlitchText text="DBMS_MASTERY" className="text-sm font-bold" style={{ color: '#CCFF00' } as React.CSSProperties} />
            <p className="text-[9px] tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.25)' }}>ORACLE & SQL // MODULE_01</p>
          </div>
        </div>

        {/* Center: progress bar */}
        <div className="flex-1 max-w-xs mx-6 hidden sm:block">
          <div className="flex justify-between mb-1">
            <span className="text-[9px] tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>PROGRESS</span>
            <span className="text-[9px]" style={{ color: '#CCFF00' }}>{currentIndex + 1}/{QUESTIONS.length}</span>
          </div>
          <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div ref={progressFillRef} className="h-full rounded-full" style={{ background: '#CCFF00', width: '0%', boxShadow: '0 0 10px #CCFF00' }} />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="text-right">
            <p className="text-[9px] tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>ACCURACY</p>
            <p className="text-sm font-black" style={{ color: '#00F5FF' }}>{accuracy}%</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-[9px] tracking-widest" style={{ color: 'rgba(255,255,255,0.25)' }}>SCORE</p>
            <p className="text-sm font-black" style={{ color: '#CCFF00' }}>{score}</p>
          </div>
        </div>
      </header>

      {/* Mobile progress */}
      <div className="sm:hidden px-5 pt-3 relative z-10">
        <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div className="h-full rounded-full" style={{ background: '#CCFF00', boxShadow: '0 0 10px #CCFF00' }} animate={{ width: `${progress}%` }} transition={{ duration: 0.6, ease: 'easeOut' }} />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Q{currentIndex + 1} of {QUESTIONS.length}</span>
          <span className="text-[9px]" style={{ color: '#CCFF00' }}>{Math.round(progress)}%</span>
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="flex-1 relative z-10 flex flex-col lg:flex-row gap-6 xl:gap-10 px-5 sm:px-8 lg:px-12 py-6 sm:py-10 max-w-7xl mx-auto w-full">

        {/* LEFT: Question + Options */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">

          {/* Q Number badge + back button */}
          <motion.div
            key={`badge-${currentIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 flex-wrap"
          >
            {/* Back button */}
            <motion.button
              whileHover={currentIndex > 0 ? { scale: 1.05, x: -2 } : {}}
              whileTap={currentIndex > 0 ? { scale: 0.95 } : {}}
              onClick={handleBack}
              disabled={currentIndex === 0}
              className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase transition-all duration-200"
              style={currentIndex > 0 ? {
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
              } : {
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.15)',
                cursor: 'not-allowed',
              }}
              onMouseEnter={e => { if (currentIndex > 0) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { if (currentIndex > 0) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 1.5L3 5L6.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              BACK
            </motion.button>

            <span
              className="text-xs px-3 py-1 rounded tracking-widest"
              style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)', color: '#00F5FF' }}
            >
              QUERY_{String(currentIndex + 1).padStart(2, '0')}
            </span>
            <div className="flex gap-1">
              {QUESTIONS.map((_, i) => (
                <div key={i} className="w-4 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: answerHistory[i]?.answered
                      ? (answerHistory[i].selected === QUESTIONS[i].answer ? '#CCFF00' : '#FF3366')
                      : i === currentIndex ? '#00F5FF' : 'rgba(255,255,255,0.1)'
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Question card */}
          <div
            ref={questionRef}
            className="relative p-6 sm:p-8 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <CornerBrackets color="rgba(0,245,255,0.3)" size={14} />
            <p
              className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              {q.question}
            </p>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {Object.entries(q.options).map(([key, val], i) => (
              <OptionButton
                key={`${currentIndex}-${key}`}
                label={key}
                value={val}
                isSelected={selectedOption === key}
                isCorrect={isAnswered && key === q.answer}
                isWrong={isAnswered && selectedOption === key && key !== q.answer}
                isDisabled={isAnswered}
                onClick={() => handleSelect(key)}
                delay={i * 0.06}
              />
            ))}
          </div>

          {/* Validate button */}
          <AnimatePresence>
            {!isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-end mt-2"
              >
                <motion.button
                  whileHover={selectedOption ? { scale: 1.03 } : {}}
                  whileTap={selectedOption ? { scale: 0.97 } : {}}
                  onClick={handleCheck}
                  disabled={!selectedOption}
                  className="px-7 py-3 rounded-lg font-bold text-sm tracking-widest uppercase flex items-center gap-2 transition-all duration-300"
                  style={selectedOption ? {
                    background: '#CCFF00',
                    color: '#0F0F1A',
                    boxShadow: '0 0 24px rgba(204,255,0,0.35)',
                  } : {
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.2)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'not-allowed',
                  }}
                >
                  <Zap className="w-4 h-4" />
                  VALIDATE
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Feedback panel */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-full lg:w-[380px] xl:w-[420px] flex flex-col gap-4 lg:sticky lg:top-6 shrink-0"
            >
              {/* Result badge */}
              <div
                className="relative px-5 py-4 rounded-xl flex items-center gap-3"
                style={isCorrect ? {
                  background: 'rgba(204,255,0,0.05)',
                  border: '1px solid rgba(204,255,0,0.25)',
                  boxShadow: '0 0 30px rgba(204,255,0,0.06)',
                } : {
                  background: 'rgba(255,51,102,0.05)',
                  border: '1px solid rgba(255,51,102,0.25)',
                  boxShadow: '0 0 30px rgba(255,51,102,0.06)',
                }}
              >
                {isCorrect
                  ? <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#CCFF00' }} />
                  : <XCircle className="w-5 h-5 shrink-0" style={{ color: '#FF3366' }} />
                }
                <div>
                  <p className="text-xs font-bold tracking-widest" style={{ color: isCorrect ? '#CCFF00' : '#FF3366' }}>
                    {isCorrect ? 'CORRECT' : 'INCORRECT'}
                  </p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {isCorrect ? 'Confirmed. Moving forward.' : `Correct: option (${q.answer.toUpperCase()})`}
                  </p>
                </div>
              </div>

              {/* Analysis card */}
              <div
                className="relative flex-1 rounded-xl p-6 flex flex-col gap-6"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <CornerBrackets color="rgba(255,255,255,0.1)" size={12} />

                {/* Explanation */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00F5FF', boxShadow: '0 0 6px #00F5FF' }} />
                    <span className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: '#00F5FF' }}>EXPLANATION</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {q.explanation}
                  </p>
                </section>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                {/* Why Wrong */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#CCFF00', boxShadow: '0 0 6px #CCFF00' }} />
                    <span className="text-[10px] tracking-[0.25em] uppercase font-bold" style={{ color: '#CCFF00' }}>DISTRACTOR_ANALYSIS</span>
                  </div>
                  <p className="text-sm leading-relaxed italic" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {q.why_wrong}
                  </p>
                </section>

                {/* Next button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  className="mt-auto w-full py-4 rounded-lg font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  }}
                >
                  {currentIndex === QUESTIONS.length - 1 ? 'FINISH_SESSION' : 'NEXT_QUERY'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="relative z-10 px-5 sm:px-8 lg:px-12 py-4 flex items-center justify-between shrink-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#CCFF00' }} />
          <span className="text-[10px] tracking-widest" style={{ color: 'rgba(255,255,255,0.2)' }}>SYSTEM_ACTIVE</span>
        </div>
        <span className="text-[10px] tracking-widest hidden sm:block" style={{ color: 'rgba(255,255,255,0.12)' }}>
          DBMS_CERT_PREP // v2.0 // {new Date().getFullYear()}
        </span>
      </footer>
    </div>
  );
}