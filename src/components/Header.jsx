import React from 'react';
import { Activity, Cpu, Scan, Star } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="glass-panel header-container">
      <div className="header-left">
        <div className="logo-box">
          <Scan className="text-cyan" size={28} />
        </div>
        <div>
          <h1 className="header-title">INCEPTION <span className="text-cyan">SCANNER</span></h1>
          <p className="header-subtitle text-cyan font-mono">Live Flap.sh Contract Infographic</p>
        </div>
      </div>
      
      <div className="header-stats font-mono">
        <a 
          href="https://github.com/arbincept/inception-flap-scanner"
          target="_blank"
          rel="noopener noreferrer"
          className="stat-item github-star-btn"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 215, 0, 0.12)',
            border: '1px solid rgba(255, 215, 0, 0.35)',
            borderRadius: '6px',
            padding: '4px 10px',
            color: '#ffd700',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <Star size={15} fill="#ffd700" className="text-yellow" />
          <span>⭐ Star on GitHub</span>
        </a>
        <div className="stat-item">
          <Activity size={16} className="text-green" />
          <span>NODE: <span className="text-bright">BSC-DATASEED</span></span>
        </div>
        <div className="stat-item">
          <Cpu size={16} className="text-purple" />
          <span>FACTORY LISTENER: <span className="text-bright text-pulse">SYNCING</span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
