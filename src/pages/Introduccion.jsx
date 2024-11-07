import '../styles/IntroduccionStyles.css';
import { useEffect } from 'react';

const Introducción = () => {
    useEffect(() => {
        document.title = 'Introducción';
    }, []);

    return (
        <div className="home">
            {/* Sección de introducción */}
            <div className="intro-section">
                <p>
                    El Carestation 620 es un sistema de anestesia compacto y versátil, diseñado para adaptarse a entornos de atención médica modernos y exigentes. Su diseño elegante y ergonómico lo hace ideal para espacios reducidos y de movimiento continuo.
                </p>
            </div>

            {/* Sección de Características */}
            <div className="features-section">
                <h2 className="features-heading">Características Principales</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h3 className="feature-title">Interfaz de Usuario Intuitiva</h3>
                        <p className="feature-description">
                            Con una pantalla táctil de 15 pulgadas inspirada en la plataforma CARESCAPE, combina controles de ventilación y monitoreo del paciente, ofreciendo una experiencia simplificada y fácil de usar, esencial en entornos quirúrgicos de ritmo acelerado.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Iluminación Inteligente y Verificación Rápida</h3>
                        <p className="feature-description">
                            La iluminación inteligente resalta los controles activos, y el proceso de verificación diaria puede completarse en solo tres minutos, con una guía paso a paso.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Sistema de Respiración Compacto</h3>
                        <p className="feature-description">
                            Equipado con válvulas de flujo controladas digitalmente, permite cambios rápidos en la concentración de anestesia (wash-in(
                                Este proceso eleva rápidamente la concentración de anestésico en el sistema respiratorio del paciente para inducir la anestesia.) y wash-out(eliminación controlada del anestésico permite al paciente recuperar la conciencia de forma segura tras la cirugía)), facilitando la anestesia de flujo bajo y mejorando la seguridad y eficiencia.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Diseño Ergonómico y Eficiente</h3>
                        <p className="feature-description">
                            Diseñado con principios ergonómicos, el sistema reduce posiciones incómodas para el operador al disponer los controles de forma accesible.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Configuración Flexible</h3>
                        <p className="feature-description">
                        Incluye opciones de montaje en pared o sistemas colgantes para adaptarse a distintas configuraciones de quirófano, con compartimentos de almacenamiento y vaporizadores Tec™ 7 sin mantenimiento.
                        </p>
                    </div>
                    <div className="feature-item">
                        <h3 className="feature-title">Confiabilidad y Pruebas Extensas</h3>
                        <p className="feature-description">
                        Con más de 19,000 horas de pruebas en condiciones extremas, el dispositivo asegura robustez y confiabilidad en situaciones exigentes
                        </p>
                    </div>
        </div>
        </div>
            {/* Sección para la actividad de Educaplay */}
            <div className="EducaplayActivity">
                <h2 className="educaplay-heading"> A continuación, explora el mapa interactivo donde podrás ver las principales partes del equipo.</h2>
                <iframe
                    src="https://es.educaplay.com/juego/20501188-maquina_anestesia_ge_carestation_620.html"
                    width="100%"
                    height="600"
                    style={{ border: 'none' }}
                    title="Actividad de Capacitación"
                    allow="fullscreen; autoplay;"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default Introducción;
