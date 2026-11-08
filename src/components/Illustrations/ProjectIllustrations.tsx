import React from 'react';

interface ProjectIllProps {
  className?: string;
  size?: number | string;
}

/**
 * RailAssist Illustration: Railway Locomotive, Pension Ledger, Circulars & Track
 */
export const RailwaySystemIllustration: React.FC<ProjectIllProps> = ({ className = '', size = '100%' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    style={{ width: size, height: 'auto' }}
  >
    {/* Background Paper Card */}
    <rect x="20" y="20" width="440" height="280" rx="14" fill="#FAF7F2" stroke="#292B25" strokeWidth="2.5" />
    <rect x="35" y="35" width="410" height="250" rx="10" stroke="#E5DED1" strokeWidth="1" strokeDasharray="4 4" />

    {/* Railway Track at Bottom */}
    <line x1="40" y1="240" x2="440" y2="240" stroke="#292B25" strokeWidth="3" />
    <line x1="40" y1="248" x2="440" y2="248" stroke="#292B25" strokeWidth="3" />
    {Array.from({ length: 18 }).map((_, i) => (
      <line key={i} x1={55 + i * 22} y1="236" x2={55 + i * 22} y2="252" stroke="#788568" strokeWidth="2.5" />
    ))}

    {/* Locomotive Outline */}
    <path d="M 60 160 L 140 160 L 160 180 L 180 180 L 180 230 L 60 230 Z" fill="#E8ECE4" stroke="#292B25" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="80" y="175" width="25" height="20" rx="3" fill="#FAF7F2" stroke="#292B25" strokeWidth="2" />
    <circle cx="90" cy="230" r="12" fill="#292B25" />
    <circle cx="90" cy="230" r="4" fill="#FAF7F2" />
    <circle cx="150" cy="230" r="12" fill="#292B25" />
    <circle cx="150" cy="230" r="4" fill="#FAF7F2" />
    {/* Steam puffs */}
    <circle cx="75" cy="140" r="10" fill="#FAF7F2" stroke="#788568" strokeWidth="1.8" strokeDasharray="3 2" />
    <circle cx="65" cy="120" r="14" fill="#FAF7F2" stroke="#788568" strokeWidth="1.8" strokeDasharray="3 2" />

    {/* Pension Settlement Ledger / Workbook */}
    <rect x="220" y="60" width="200" height="150" rx="8" fill="#FFFFFF" stroke="#292B25" strokeWidth="2.5" />
    <rect x="220" y="60" width="200" height="30" fill="#C8795C" />
    <text x="235" y="80" fill="#FAF7F2" fontFamily="monospace" fontSize="11" fontWeight="700">SCR PENSION SETTLEMENT</text>
    {/* Ledger lines */}
    <line x1="235" y1="110" x2="405" y2="110" stroke="#E5DED1" strokeWidth="1.5" />
    <text x="235" y="105" fill="#77756D" fontFamily="monospace" fontSize="9">OPS / UPS / NPS Matrix</text>
    <line x1="235" y1="135" x2="405" y2="135" stroke="#E5DED1" strokeWidth="1.5" />
    <line x1="235" y1="160" x2="405" y2="160" stroke="#E5DED1" strokeWidth="1.5" />
    <line x1="235" y1="185" x2="405" y2="185" stroke="#E5DED1" strokeWidth="1.5" />

    {/* Official Seal / Badge */}
    <circle cx="390" cy="180" r="22" fill="#F7ECE7" stroke="#C8795C" strokeWidth="2" strokeDasharray="4 2" />
    <text x="375" y="184" fill="#C8795C" fontFamily="sans-serif" fontSize="9" fontWeight="800">VERIFIED</text>
  </svg>
);

/**
 * VAVE Illustration: Multi-Agent Neural Control Hub & Clarification Engine
 */
export const AiControlPlaneIllustration: React.FC<ProjectIllProps> = ({ className = '', size = '100%' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    style={{ width: size, height: 'auto' }}
  >
    {/* Terminal / Control Room Screen */}
    <rect x="20" y="20" width="440" height="280" rx="14" fill="#292B25" stroke="#292B25" strokeWidth="2.5" />
    
    {/* Screen Header Bar */}
    <rect x="20" y="20" width="440" height="34" rx="14 14 0 0" fill="#1F211C" />
    <circle cx="42" cy="37" r="4" fill="#C8795C" />
    <circle cx="56" cy="37" r="4" fill="#E5DED1" />
    <circle cx="70" cy="37" r="4" fill="#788568" />
    <text x="95" y="41" fill="#77756D" fontFamily="monospace" fontSize="10">vave-orchestrator :: control_plane.py</text>

    {/* Central Clarification Engine (Supriya's Contribution Highlighted!) */}
    <rect x="150" y="110" width="180" height="85" rx="10" fill="#3C3E37" stroke="#788568" strokeWidth="2" />
    <text x="165" y="135" fill="#FAF7F2" fontFamily="monospace" fontSize="11" fontWeight="700">CLARIFICATION ENGINE</text>
    <text x="165" y="152" fill="#C8795C" fontFamily="sans-serif" fontSize="10" fontWeight="600">✦ Fine-tuned 0.5B Model</text>
    <text x="165" y="172" fill="#95A384" fontFamily="monospace" fontSize="9">Natural Lang ➔ JSON Schema</text>

    {/* Left Input: Human Goal */}
    <rect x="40" y="80" width="90" height="55" rx="8" fill="#292B25" stroke="#E5DED1" strokeWidth="1.5" />
    <text x="50" y="102" fill="#FAF7F2" fontFamily="monospace" fontSize="9">HUMAN GOAL</text>
    <text x="50" y="120" fill="#77756D" fontFamily="sans-serif" fontSize="8">"Summarize & sync"</text>
    <path d="M 130 110 L 150 135" stroke="#788568" strokeWidth="2" strokeDasharray="3 3" />

    {/* Bottom: ChromaDB Semantic Memory */}
    <rect x="175" y="225" width="130" height="45" rx="8" fill="#1F211C" stroke="#77756D" strokeWidth="1.5" />
    <text x="195" y="245" fill="#FAF7F2" fontFamily="monospace" fontSize="10">ChromaDB</text>
    <text x="195" y="258" fill="#77756D" fontFamily="sans-serif" fontSize="8">Vector Context Memory</text>
    <path d="M 240 195 L 240 225" stroke="#788568" strokeWidth="2" />

    {/* Right: Delegated Helpers */}
    <rect x="350" y="80" width="100" height="45" rx="8" fill="#292B25" stroke="#C8795C" strokeWidth="1.5" />
    <text x="360" y="100" fill="#C8795C" fontFamily="monospace" fontSize="9">OS Automation</text>
    <text x="360" y="114" fill="#77756D" fontFamily="sans-serif" fontSize="8">PyAutoGUI Agent</text>
    <path d="M 330 135 L 350 110" stroke="#C8795C" strokeWidth="2" strokeDasharray="3 3" />

    <rect x="350" y="145" width="100" height="45" rx="8" fill="#292B25" stroke="#E5DED1" strokeWidth="1.5" />
    <text x="360" y="165" fill="#FAF7F2" fontFamily="monospace" fontSize="9">Local LLMs</text>
    <text x="360" y="179" fill="#77756D" fontFamily="sans-serif" fontSize="8">Ollama / Qwen 2.5</text>
    <path d="M 330 155 L 350 165" stroke="#E5DED1" strokeWidth="2" strokeDasharray="3 3" />

    {/* Emergency Kill Switch Badge */}
    <rect x="40" y="235" width="105" height="30" rx="6" fill="#F7ECE7" stroke="#C8795C" strokeWidth="1.5" />
    <circle cx="55" cy="250" r="5" fill="#C8795C" />
    <text x="66" y="254" fill="#A65A40" fontFamily="sans-serif" fontSize="8" fontWeight="700">ZERO-TRUST / KILL-SW</text>
  </svg>
);

/**
 * AethelGard Illustration: Real-time 1v1 Battle Arena, Timer & Power-ups
 */
export const GamingArenaIllustration: React.FC<ProjectIllProps> = ({ className = '', size = '100%' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    style={{ width: size, height: 'auto' }}
  >
    <rect x="20" y="20" width="440" height="280" rx="14" fill="#FAF7F2" stroke="#292B25" strokeWidth="2.5" />

    {/* Arena Header: 1v1 Live Duel */}
    <rect x="20" y="20" width="440" height="45" rx="14 14 0 0" fill="#292B25" />
    <text x="40" y="47" fill="#F4F0E8" fontFamily="monospace" fontSize="12" fontWeight="700">AETHELGARD :: 1v1 LIVE DUEL</text>
    
    {/* Countdown Timer Badge */}
    <circle cx="240" cy="45" r="24" fill="#C8795C" stroke="#FAF7F2" strokeWidth="3" />
    <text x="232" y="52" fill="#FAF7F2" fontFamily="monospace" fontSize="16" fontWeight="900">08s</text>

    {/* Left Contender Card */}
    <rect x="40" y="85" width="160" height="110" rx="10" fill="#E8ECE4" stroke="#788568" strokeWidth="2" />
    <circle cx="70" cy="120" r="18" fill="#788568" />
    <text x="64" y="125" fill="#FAF7F2" fontFamily="sans-serif" fontSize="12" fontWeight="700">P1</text>
    <text x="96" y="115" fill="#292B25" fontFamily="sans-serif" fontSize="11" fontWeight="700">Supriya</text>
    <text x="96" y="130" fill="#788568" fontFamily="monospace" fontSize="9">ELO: 1420 ✦ Level 8</text>
    <text x="50" y="175" fill="#292B25" fontFamily="monospace" fontSize="18" fontWeight="800">450 PTS</text>

    {/* Center VS Symbol */}
    <circle cx="240" cy="140" r="18" fill="#292B25" />
    <text x="232" y="145" fill="#FAF7F2" fontFamily="sans-serif" fontSize="11" fontWeight="800">VS</text>

    {/* Right Contender Card */}
    <rect x="280" y="85" width="160" height="110" rx="10" fill="#F7ECE7" stroke="#C8795C" strokeWidth="2" />
    <circle cx="310" cy="120" r="18" fill="#C8795C" />
    <text x="304" y="125" fill="#FAF7F2" fontFamily="sans-serif" fontSize="12" fontWeight="700">P2</text>
    <text x="336" y="115" fill="#292B25" fontFamily="sans-serif" fontSize="11" fontWeight="700">Challenger</text>
    <text x="336" y="130" fill="#C8795C" fontFamily="monospace" fontSize="9">ELO: 1390 ✦ Level 7</text>
    <text x="290" y="175" fill="#292B25" fontFamily="monospace" fontSize="18" fontWeight="800">380 PTS</text>

    {/* Power-up Matrix at bottom */}
    <rect x="40" y="215" width="400" height="65" rx="8" fill="#FFFFFF" stroke="#292B25" strokeWidth="2" />
    <text x="55" y="235" fill="#77756D" fontFamily="monospace" fontSize="9">TACTICAL POWER-UPS:</text>
    
    <g transform="translate(60, 245)">
      <rect x="0" y="0" width="90" height="26" rx="5" fill="#E8ECE4" stroke="#788568" strokeWidth="1.5" />
      <text x="10" y="17" fill="#58634C" fontFamily="sans-serif" fontSize="9" fontWeight="700">❄️ Freeze (10s)</text>
    </g>
    <g transform="translate(165, 245)">
      <rect x="0" y="0" width="85" height="26" rx="5" fill="#F7ECE7" stroke="#C8795C" strokeWidth="1.5" />
      <text x="10" y="17" fill="#A65A40" fontFamily="sans-serif" fontSize="9" fontWeight="700">✂️ 50 / 50 Cut</text>
    </g>
    <g transform="translate(265, 245)">
      <rect x="0" y="0" width="100" height="26" rx="5" fill="#FAF7F2" stroke="#292B25" strokeWidth="1.5" />
      <text x="10" y="17" fill="#292B25" fontFamily="sans-serif" fontSize="9" fontWeight="700">⚡ 2x Double Pts</text>
    </g>
  </svg>
);

/**
 * NYRA Illustration: Mobile Safety, 50Hz Sensor Waveform & GPS SOS
 */
export const MobileSafetyIllustration: React.FC<ProjectIllProps> = ({ className = '', size = '100%' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    style={{ width: size, height: 'auto' }}
  >
    <rect x="20" y="20" width="440" height="280" rx="14" fill="#FAF7F2" stroke="#292B25" strokeWidth="2.5" />

    {/* Smartphone Frame */}
    <rect x="50" y="45" width="130" height="230" rx="18" fill="#FFFFFF" stroke="#292B25" strokeWidth="3" />
    <rect x="85" y="52" width="60" height="6" rx="3" fill="#292B25" />
    
    {/* Screen: SOS Trigger UI */}
    <rect x="58" y="70" width="114" height="190" rx="10" fill="#FAF7F2" />
    <circle cx="115" cy="130" r="34" fill="#F7ECE7" stroke="#C8795C" strokeWidth="2" />
    <circle cx="115" cy="130" r="26" fill="#C8795C" />
    <text x="103" y="134" fill="#FAF7F2" fontFamily="sans-serif" fontSize="10" fontWeight="900">SOS</text>
    <text x="75" y="180" fill="#292B25" fontFamily="sans-serif" fontSize="9" fontWeight="700">Fall Detected</text>
    <text x="80" y="195" fill="#77756D" fontFamily="monospace" fontSize="8">Auto alert in 12s</text>

    {/* 50Hz Telemetry Waveform Panel */}
    <rect x="210" y="45" width="230" height="110" rx="10" fill="#292B25" stroke="#292B25" strokeWidth="2" />
    <text x="225" y="70" fill="#95A384" fontFamily="monospace" fontSize="10" fontWeight="700">TRI-AXIAL SENSOR (50Hz)</text>
    <path
      d="M 225 105 Q 240 70, 255 105 T 285 105 Q 295 140, 305 60 Q 315 150, 325 105 T 355 105 T 385 105 T 415 105"
      stroke="#C8795C"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M 225 118 Q 250 110, 275 118 T 325 118 T 375 118 T 425 118"
      stroke="#788568"
      strokeWidth="1.5"
      strokeDasharray="4 2"
      fill="none"
    />
    <text x="225" y="142" fill="#77756D" fontFamily="monospace" fontSize="8">3-second sliding window / UCI HAR feature extractor</text>

    {/* GPS & Alert Dispatch Hub */}
    <rect x="210" y="170" width="230" height="105" rx="10" fill="#E8ECE4" stroke="#788568" strokeWidth="2" />
    <circle cx="240" cy="205" r="14" fill="#C8795C" />
    <path d="M 240 197 C 235 197, 232 201, 232 205 C 232 211, 240 219, 240 219 C 240 219, 248 211, 248 205 C 248 201, 245 197, 240 197 Z" fill="#FAF7F2" />
    <text x="265" y="200" fill="#292B25" fontFamily="sans-serif" fontSize="11" fontWeight="700">GPS Coords Dispatched</text>
    <text x="265" y="215" fill="#58634C" fontFamily="monospace" fontSize="9">17.3850° N, 78.4867° E</text>
    <text x="225" y="245" fill="#77756D" fontFamily="monospace" fontSize="8">SMS + Email broadcast to emergency contacts</text>
    <text x="225" y="260" fill="#C8795C" fontFamily="sans-serif" fontSize="8" fontWeight="600">✦ 100% on-device sensor evaluation (Zero cloud storage)</text>
  </svg>
);

/**
 * Curalight Illustration: Pancreatic CT Slice, Model Pipeline & TFLite Edge
 */
export const MedicalImagingIllustration: React.FC<ProjectIllProps> = ({ className = '', size = '100%' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    style={{ width: size, height: 'auto' }}
  >
    <rect x="20" y="20" width="440" height="280" rx="14" fill="#FAF7F2" stroke="#292B25" strokeWidth="2.5" />

    {/* CT Scan Slice Placeholder Frame */}
    <rect x="40" y="50" width="150" height="160" rx="8" fill="#1F211C" stroke="#292B25" strokeWidth="2.5" />
    <text x="55" y="75" fill="#788568" fontFamily="monospace" fontSize="9" fontWeight="700">PANCREATIC CT SLICE</text>
    
    {/* Stylized anatomical tissue contours */}
    <circle cx="115" cy="130" r="38" stroke="#3C3E37" strokeWidth="2" strokeDasharray="4 2" fill="none" />
    <path d="M 85 130 Q 115 100, 145 125 Q 125 155, 85 130 Z" fill="#3C3E37" opacity="0.6" />
    {/* ROI Bounding Box */}
    <rect x="100" y="115" width="30" height="25" stroke="#C8795C" strokeWidth="2" strokeDasharray="3 2" fill="none" />
    <text x="55" y="195" fill="#E5DED1" fontFamily="monospace" fontSize="8">ROI: Pancreas Head</text>

    {/* ML Pipeline Arrow */}
    <path d="M 200 130 L 230 130" stroke="#292B25" strokeWidth="2.5" />
    <path d="M 224 125 L 232 130 L 224 135" stroke="#292B25" strokeWidth="2.5" strokeLinejoin="round" fill="none" />

    {/* Central Pipeline Stages */}
    <g transform="translate(240, 50)">
      <rect x="0" y="0" width="190" height="65" rx="8" fill="#FFFFFF" stroke="#292B25" strokeWidth="2" />
      <text x="15" y="24" fill="#292B25" fontFamily="monospace" fontSize="10" fontWeight="700">CNN Feature Extractor</text>
      <text x="15" y="42" fill="#77756D" fontFamily="sans-serif" fontSize="9">Binary: Normal vs. Suspicious</text>
      <text x="15" y="55" fill="#788568" fontFamily="monospace" fontSize="8">Class 0: Normal / Class 1: Suspicious</text>
    </g>

    {/* int8 TFLite Conversion Chip */}
    <g transform="translate(240, 130)">
      <rect x="0" y="0" width="190" height="75" rx="8" fill="#F7ECE7" stroke="#C8795C" strokeWidth="2" />
      <text x="15" y="24" fill="#A65A40" fontFamily="monospace" fontSize="10" fontWeight="700">int8 TFLite Quantization</text>
      <text x="15" y="42" fill="#292B25" fontFamily="sans-serif" fontSize="9">Edge Optimization (CPU-First)</text>
      <text x="15" y="58" fill="#788568" fontFamily="monospace" fontSize="8">Flutter Mobile Scaffold Ready</text>
    </g>

    {/* Clinical Disclaimer Ribbon at Bottom */}
    <rect x="40" y="225" width="400" height="48" rx="6" fill="#FAF7F2" stroke="#292B25" strokeWidth="1.5" strokeDasharray="4 2" />
    <text x="55" y="244" fill="#C8795C" fontFamily="sans-serif" fontSize="9" fontWeight="800">RESEARCH & PROTOTYPE DISCLAIMER:</text>
    <text x="55" y="260" fill="#77756D" fontFamily="sans-serif" fontSize="8">
      Not a certified medical device; strictly for offline edge AI exploration and research benchmarking.
    </text>
  </svg>
);

/**
 * Empower Her Path Illustration: Career Roadmaps, Mentorship & Growth
 */
export const EmpowerPlatformIllustration: React.FC<ProjectIllProps> = ({ className = '', size = '100%' }) => (
  <svg
    viewBox="0 0 480 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none ${className}`}
    style={{ width: size, height: 'auto' }}
  >
    <rect x="20" y="20" width="440" height="280" rx="14" fill="#FAF7F2" stroke="#292B25" strokeWidth="2.5" />

    {/* Platform Header */}
    <rect x="20" y="20" width="440" height="42" rx="14 14 0 0" fill="#788568" />
    <text x="40" y="46" fill="#FAF7F2" fontFamily="monospace" fontSize="11" fontWeight="700">
      EMPOWER HER PATH ✦ WOMEN IN TECH PLATFORM
    </text>

    {/* Pathway Ladder & Milestones */}
    <g transform="translate(45, 80)">
      <line x1="20" y1="160" x2="20" y2="20" stroke="#292B25" strokeWidth="3" />
      <line x1="80" y1="160" x2="80" y2="20" stroke="#292B25" strokeWidth="3" />
      <line x1="20" y1="140" x2="80" y2="140" stroke="#C8795C" strokeWidth="2.5" />
      <line x1="20" y1="100" x2="80" y2="100" stroke="#C8795C" strokeWidth="2.5" />
      <line x1="20" y1="60" x2="80" y2="60" stroke="#C8795C" strokeWidth="2.5" />
      {/* Star on top of ladder */}
      <circle cx="50" cy="18" r="14" fill="#C8795C" />
      <text x="45" y="23" fill="#FAF7F2" fontSize="14">✦</text>
    </g>

    {/* Pathway Tracks & Cards */}
    <g transform="translate(160, 80)">
      <rect x="0" y="0" width="270" height="50" rx="8" fill="#FFFFFF" stroke="#292B25" strokeWidth="2" />
      <text x="15" y="22" fill="#292B25" fontFamily="sans-serif" fontSize="11" fontWeight="700">Domain Roadmaps</text>
      <text x="15" y="38" fill="#77756D" fontFamily="sans-serif" fontSize="9">Software Engineering, AI/ML, Cloud & UI/UX tracks</text>

      <rect x="0" y="60" width="270" height="50" rx="8" fill="#FFFFFF" stroke="#292B25" strokeWidth="2" />
      <text x="15" y="82" fill="#788568" fontFamily="sans-serif" fontSize="11" fontWeight="700">Mentorship Network Hub</text>
      <text x="15" y="98" fill="#77756D" fontFamily="sans-serif" fontSize="9">1-on-1 office hours & technical guidance</text>

      <rect x="0" y="120" width="270" height="50" rx="8" fill="#FFFFFF" stroke="#292B25" strokeWidth="2" />
      <text x="15" y="142" fill="#C8795C" fontFamily="sans-serif" fontSize="11" fontWeight="700">Opportunity Radar</text>
      <text x="15" y="158" fill="#77756D" fontFamily="sans-serif" fontSize="9">Diversity scholarships, hackathons & hiring grants</text>
    </g>

    {/* Handwritten closing sticker */}
    <text x="160" y="270" fill="#788568" fontFamily="Caveat, cursive" fontSize="19" fontWeight="600">
      ✦ Inspiring and empowering the next generation of women engineers
    </text>
  </svg>
);

