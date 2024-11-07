import '../styles/CuestionarioStyles.css';
import { useEffect } from 'react';

const Cuestionario = () => {
    useEffect(() => {
        document.title = 'Cuestionario';
    }, []);
    
    return (
        <div className='Container1'>
            <h1>Cuestionario sobre la Máquina de Anestesia GE Carestation 620</h1>
            <iframe 
                allow="fullscreen; autoplay;" 
                allowFullScreen 
                width="795" 
                height="690" 
                frameBorder="0" 
                src="https://es.educaplay.com/juego/21112072-cuestionarios_maquina_anestesia_carestation_620.html"
            ></iframe>
        </div>
    );
};

export default Cuestionario;
