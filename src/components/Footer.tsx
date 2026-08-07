const Footer = () => {
    return (
    <footer
      style={{
        borderTop: '1px solid rgba(242,240,235,0.07)',
        padding: '48px 24px',
        background: '#1E1E22',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                background: 'linear-gradient(135deg, #C94747, #B88A3D)',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="font-mono" style={{ color: '#fff', fontSize: '10px', fontWeight: 500 }}>CS</span>
            </div>
            <span className="font-display" style={{ color: '#F2F0EB', fontSize: '16px', fontWeight: 700 }}>
              CS2031 · DBP
            </span>
          </div>
          <p style={{ color: '#5A5450', fontSize: '13px' }}>
            Universidad de Ingeniería y Tecnología · Licencia Apache 2.0
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {[
            ['#modulos', 'Módulos'],
            ['#nosotros', 'Nosotros'],
            ['#fuente', 'GitHub'],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ color: '#5A5450', textDecoration: 'none', fontSize: '13px', transition: 'color 0.2s' }}
              onMouseEnter={e => ((e.target as HTMLElement).style.color = '#C8C6C1')}
              onMouseLeave={e => ((e.target as HTMLElement).style.color = '#5A5450')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
    )
}

export default Footer