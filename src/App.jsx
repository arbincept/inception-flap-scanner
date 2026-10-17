import React from 'react'
import Header from './components/Header'
import Scanner from './components/Scanner'

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <div className="app-content">
        <Scanner />
      </div>

      <footer className="glass-panel" style={{
        marginTop: '1.5rem',
        padding: '1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        fontSize: '0.75rem',
        color: '#94a3b8'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div>
            <strong style={{ color: '#fff' }}>Inception Flap Scanner</strong> • Open Source by{' '}
            <a href="https://github.com/arbincept" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
              Arbitrage Inception
            </a>
            {' '}• Dev: <a href="https://github.com/Lukecele" target="_blank" rel="noreferrer" style={{ color: '#c5c6c7', textDecoration: 'none' }}>@Lukecele</a>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://github.com/arbincept/inception-flap-scanner/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '2px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(102, 252, 241, 0.15)',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                textDecoration: 'none',
                fontFamily: 'monospace',
                fontSize: '0.7rem',
                fontWeight: 'bold'
              }}
            >
              MIT License (100% Free)
            </a>
            <span style={{
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: 'rgba(74, 222, 128, 0.15)',
              border: '1px solid var(--accent-green)',
              color: 'var(--accent-green)',
              fontFamily: 'monospace',
              fontSize: '0.7rem'
            }}>
              100% Free & Open Source
            </span>
            <a
              href="https://github.com/arbincept/inception-flap-scanner"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#94a3b8', textDecoration: 'none' }}
            >
              GitHub Code
            </a>
          </div>
        </div>

        <div style={{
          fontSize: '0.7rem',
          color: '#64748b',
          lineHeight: '1.5',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '0.5rem'
        }}>
          ⚖️ <strong>Legal Notice:</strong> Open-source software released free of charge for educational and on-chain heuristic research under the MIT License. Zero proprietary copyright reserved. Non-commercial research tool; does not provide investment or financial advice.
        </div>
      </footer>
    </div>
  )
}

export default App
