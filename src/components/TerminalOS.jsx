import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, skillsData, projectsData, experienceData, educationData, certificationsData } from '../data/portfolioData';
import { Terminal as TerminalIcon, Sparkles, Power, RefreshCw, Maximize2, Minimize2, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const WELCOME_BANNER = `
  ____             _ _              ____   ____             _                  
 / ___| _   _   __| (_)_ __        / ___| |  _ \\ ___   ___ (_) __ _ _ __ _   _ 
 \\___ \\| | | | / _\` | | '_ \\ _____| |  _  | |_) / _ \\ / _ \\| |/ _\` | '__| | | |
  ___) | |_| || (_| | | | | |_____| |_| | |  __/ (_) | (_) | | (_| | |  | |_| |
 |____/ \\__,_| \\__,_|_|_| |_|      \\____| |_|   \\___/ \\___// |\\__,_|_|   \\__, |
                                                         |__/            |___/ 
 ==============================================================================
  SYSTEM: SUDIN-OS v4.19.0-GENAI-x86_64 | LOCATION: Bengaluru, Karnataka (IST)
  TYPE 'help' FOR COMMANDS OR CLICK ANY QUICK ACTION BELOW.
 ==============================================================================
`;

export default function TerminalOS() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'banner', content: WELCOME_BANNER },
    { type: 'system', content: 'Tip: Run "projects", "skills", "experience", or "matrix" to explore.' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [crtTheme, setCrtTheme] = useState('green'); // green, amber, cyan, matrix
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isMatrixRunning, setIsMatrixRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  const themeClasses = {
    green: {
      text: 'text-emerald-400',
      glow: 'crt-glow-green',
      prompt: 'text-emerald-300',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20'
    },
    amber: {
      text: 'text-amber-400',
      glow: 'crt-glow-amber',
      prompt: 'text-amber-300',
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/20'
    },
    cyan: {
      text: 'text-cyan-400',
      glow: 'crt-glow-cyan',
      prompt: 'text-cyan-300',
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-950/20'
    },
    matrix: {
      text: 'text-green-500',
      glow: 'crt-glow-green',
      prompt: 'text-green-400',
      border: 'border-green-600/40',
      bg: 'bg-black/90'
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Matrix digital rain background effect
  useEffect(() => {
    if (!isMatrixRunning || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    const chars = '0123456789ABCDEF@#$%&*+-/<>~SUDINGPOOJARY';
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    const draw = () => {
      ctx.fillStyle = 'rgba(5, 8, 14, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = crtTheme === 'amber' ? '#f59e0b' : crtTheme === 'cyan' ? '#06b6d4' : '#22c55e';
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, [isMatrixRunning, crtTheme]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    // Add to input history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);

    let output = '';

    switch (cmd) {
      case 'help':
        output = `
AVAILABLE COMMANDS:
  about           - Display personal bio, focus areas, and background
  skills          - Display categorized skills & technology tree
  projects        - List featured AI/ML & engineering projects
  project <id>    - Inspect project (e.g. "project 1", "project 2")
  experience      - View work history & Soukhya Tech details
  education       - View university coursework & degrees
  certifications  - View verified certificates
  contact         - Show direct email, phone, and socials
  resume          - Download Sudin G Poojary's latest resume
  matrix          - Toggle CRT digital rain animation
  theme <color>   - Switch theme (options: green, amber, cyan, matrix)
  clear           - Wipe terminal output
  whoami          - Quick identity check
  date            - Show live IST datetime
        `;
        break;

      case 'whoami':
      case 'about':
        output = `
NAME: ${personalInfo.name}
ROLE: ${personalInfo.title}
LOCATION: ${personalInfo.location}
STATUS: ${personalInfo.status}

SUMMARY:
${personalInfo.bio}

CURRENT EMPHASIS:
- Generative AI & Autonomous Agentic Pipelines
- Vector Search with FAISS & Chroma
- High-Throughput ETL & Big Data Architectures
- Enterprise Java & Spring Boot Microservices
        `;
        break;

      case 'skills':
        output = `
==================== TECHNICAL CAPABILITIES ====================
${skillsData.categories.map(cat => `
[+] ${cat.title.toUpperCase()}:
    ${cat.skills.map(s => `• ${s.name} (${s.level})`).join('\n    ')}
`).join('')}
        `;
        break;

      case 'projects':
        output = `
====================== FEATURED PROJECTS ======================
${projectsData.map((p, idx) => `
[#${idx + 1}] ${p.title.toUpperCase()}
    Tag: [${p.badge}] | Date: ${p.date}
    Tech: ${p.techStack.join(', ')}
    Summary: ${p.shortDescription}
`).join('')}

Type "project 1", "project 2", etc. for architecture deep dives.
        `;
        break;

      case 'project':
        const idx = parseInt(arg, 10) - 1;
        if (!isNaN(idx) && projectsData[idx]) {
          const p = projectsData[idx];
          output = `
================ PROJECT ARCHITECTURE: ${p.title} ================
CATEGORY: ${p.category} | BADGE: ${p.badge} | DATE: ${p.date}
TECH STACK: ${p.techStack.join(' | ')}

DESCRIPTION:
${p.fullDescription}

KEY HIGHLIGHTS:
${p.highlights.map(h => `  ✓ ${h}`).join('\n')}

GITHUB REPOSITORY: ${p.githubUrl || 'Available on request'}
          `;
        } else {
          output = `Invalid project index. Usage: "project 1", "project 2", "project 3", "project 4"`;
        }
        break;

      case 'experience':
        output = `
======================= WORK EXPERIENCE =======================
${experienceData.map(e => `
COMPANY: ${e.company} (${e.location})
ROLE: ${e.role} | PERIOD: ${e.period}
TYPE: ${e.type}

DETAILS:
${e.bullets.map(b => `  • ${b}`).join('\n')}

TECHNOLOGIES USED:
  ${e.tech.join(', ')}
`).join('\n')}
        `;
        break;

      case 'education':
        output = `
========================== EDUCATION ==========================
${educationData.map(ed => `
INSTITUTION: ${ed.institution} (${ed.location})
DEGREE: ${ed.degree}
SPECIALIZATION: ${ed.specialization} | TIMELINE: ${ed.period}

DETAILS:
${ed.description}
`).join('\n')}
        `;
        break;

      case 'certifications':
        output = `
======================= CERTIFICATIONS =======================
${certificationsData.map(c => `  ★ ${c.title} — ${c.issuer} [${c.badge}]`).join('\n')}
        `;
        break;

      case 'contact':
        output = `
====================== CONTACT INFORMATION ======================
EMAIL:    ${personalInfo.email}
PHONE:    ${personalInfo.phone}
LINKEDIN: ${personalInfo.socials.linkedin}
GITHUB:   ${personalInfo.socials.github}
LOCATION: ${personalInfo.location}
        `;
        break;

      case 'resume':
        const link = document.createElement('a');
        link.href = personalInfo.resumeUrl;
        link.download = 'Sudin_G_Poojary_Resume.pdf';
        link.click();
        output = `Downloading Sudin_G_Poojary_Resume.pdf... Download triggered!`;
        break;

      case 'matrix':
        setIsMatrixRunning(!isMatrixRunning);
        output = `Matrix digital rain animation toggled ${!isMatrixRunning ? 'ON' : 'OFF'}.`;
        break;

      case 'theme':
        if (['green', 'amber', 'cyan', 'matrix'].includes(arg)) {
          setCrtTheme(arg);
          output = `Terminal CRT phosphor theme switched to: [${arg.toUpperCase()}]`;
        } else {
          output = `Invalid theme. Available options: green, amber, cyan, matrix.`;
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'date':
        output = `Current System Time: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST`;
        break;

      default:
        output = `Command not recognized: "${cmd}". Type "help" to see available options.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'command', content: `sudin@workstation:~$ ${trimmed}` },
      { type: 'output', content: output }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < commandHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact', 'resume', 'matrix', 'clear', 'about', 'whoami'];
      const match = commands.find(c => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const quickActions = [
    { label: 'help', cmd: 'help' },
    { label: 'projects', cmd: 'projects' },
    { label: 'skills', cmd: 'skills' },
    { label: 'experience', cmd: 'experience' },
    { label: 'resume', cmd: 'resume' },
    { label: 'matrix', cmd: 'matrix' },
    { label: 'clear', cmd: 'clear' },
  ];

  const currentTheme = themeClasses[crtTheme];

  return (
    <div className="w-full rounded-2xl bg-[#0a0f18] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm relative retro-border">
      
      {/* Retro CRT Window Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f172a] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 cursor-pointer" onClick={() => setHistory([])} title="Clear"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 cursor-pointer" onClick={() => setInput('help')} title="Help"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 cursor-pointer" onClick={() => setIsMatrixRunning(!isMatrixRunning)} title="Matrix"></div>
          <span className="text-[11px] text-slate-400 font-bold ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
            sudin@workstation: ~/portfolio (UNIX Shell)
          </span>
        </div>

        {/* Theme & Controls */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-slate-900 px-2 py-0.5 rounded border border-white/5 text-[10px]">
            <span className="text-slate-500">CRT:</span>
            {['green', 'amber', 'cyan', 'matrix'].map((t) => (
              <button
                key={t}
                onClick={() => setCrtTheme(t)}
                className={`px-1.5 py-0.5 rounded uppercase font-bold transition-all ${
                  crtTheme === t
                    ? 'bg-white/20 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsPowerOn(!isPowerOn)}
            className={`p-1 rounded text-xs transition-colors ${
              isPowerOn ? 'text-emerald-400 hover:text-emerald-300' : 'text-slate-600'
            }`}
            title="CRT Monitor Power Switch"
          >
            <Power className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Command Pills */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-950/90 border-b border-white/5 overflow-x-auto">
        <span className="text-[10px] text-slate-500 uppercase tracking-wider shrink-0 mr-1">Quick Run:</span>
        {quickActions.map((qa) => (
          <button
            key={qa.label}
            onClick={() => handleCommand(qa.cmd)}
            className="px-2.5 py-1 rounded bg-slate-900 hover:bg-indigo-950 border border-white/10 hover:border-indigo-500/50 text-[11px] text-slate-300 hover:text-indigo-300 transition-all shrink-0"
          >
            ${qa.label}
          </button>
        ))}
      </div>

      {/* Screen Body */}
      <div className="relative min-h-[380px] max-h-[460px] overflow-y-auto p-4 sm:p-5 crt-screen bg-[#05080e] select-text">
        {/* Matrix Canvas Layer */}
        {isMatrixRunning && (
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-20 z-0" />
        )}

        {isPowerOn ? (
          <div className={`relative z-10 space-y-2 ${currentTheme.text} ${currentTheme.glow}`}>
            {history.map((item, index) => (
              <div key={index}>
                {item.type === 'banner' && (
                  <pre className="text-[9px] sm:text-[11px] leading-[1.15] opacity-90 overflow-x-auto whitespace-pre">
                    {item.content}
                  </pre>
                )}
                {item.type === 'system' && (
                  <div className="text-slate-400 text-xs italic">
                    {item.content}
                  </div>
                )}
                {item.type === 'command' && (
                  <div className="font-bold flex items-center gap-1 text-slate-200 mt-2">
                    {item.content}
                  </div>
                )}
                {item.type === 'output' && (
                  <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed opacity-95">
                    {item.content}
                  </pre>
                )}
              </div>
            ))}

            {/* Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className={`font-bold ${currentTheme.prompt}`}>sudin@workstation:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white focus:ring-0 p-0"
                placeholder="type a command..."
                autoFocus
              />
              <span className="w-2 h-4 bg-white/70 animate-pulse"></span>
            </div>

            <div ref={bottomRef} />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[340px] text-slate-600 font-mono">
            <Power className="w-8 h-8 mb-2 opacity-40" />
            <span>CRT MONITOR POWERED OFF</span>
            <button
              onClick={() => setIsPowerOn(true)}
              className="mt-3 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-emerald-400 hover:text-emerald-300"
            >
              Power On System
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
