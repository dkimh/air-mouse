'use client';

const SketchfabEmbed = () => {
    return (
        <div
            className="sketchfab-embed-wrapper"
            style={{ width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#000000' }}
        >
            <iframe
                title="Lungs - normal study"
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                src="https://sketchfab.com/models/79149850d98842f981a1c60e7498413b/embed?autostart=1&transparent=1"
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                }}
            ></iframe>
            
            <p
                style={{
                    fontSize: '13px',
                    fontWeight: 'normal',
                    margin: '5px',
                    color: '#4A4A4A',
                    background: 'rgba(255,255,255,0.7)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                }}
            >
                <a
                    href="https://sketchfab.com/3d-models/lungs-normal-study-79149850d98842f981a1c60e7498413b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                >
                    Lungs - normal study
                </a>{' '}
                by{' '}
                <a
                    href="https://sketchfab.com/valchanov"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                >
                    valchanov
                </a>{' '}
                on{' '}
                <a
                    href="https://sketchfab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 'bold', color: '#1CAAD9' }}
                >
                    Sketchfab
                </a>
            </p>
        </div>
    );
};

export default SketchfabEmbed;
