import '../BackgroundSelector/BackgroundSelector.css';
import bg1 from '../BackgroundSelector/background.jpg';
import bg2 from '../BackgroundSelector/background2.jpg';
import bg3 from '../BackgroundSelector/background3.jpg';

const backgrounds = [
    { id: 'bg1', src: bg1, label: 'Ondas' },
    { id: 'bg2', src: bg2, label: 'Rosa' },
    { id: 'bg3', src: bg3, label: 'Cubos' },
];

function BackgroundSelector({ selected, onSelect }) {
    return (
        <div className="BackgroundSelector">
            <span className="BackgroundSelector-label">🎨 Seleccione Imagen de Fondo:</span>
            <div className="BackgroundSelector-options">
                {backgrounds.map(bg => (
                    <button
                        key={bg.id}
                        className={`BackgroundSelector-thumb ${selected === bg.src ? 'BackgroundSelector-thumb--active' : ''}`}
                        onClick={() => onSelect(bg.src)}
                        title={bg.label}
                    >
                        <img src={bg.src} alt={bg.label} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export { BackgroundSelector, bg1 };
