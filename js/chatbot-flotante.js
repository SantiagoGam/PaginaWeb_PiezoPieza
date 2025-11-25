// chatbot-flotante.js
(function() {
    // Crear estilos
    const style = document.createElement('style');
    style.innerHTML = `
        .chatbot-flotante {
            position: fixed;
            bottom: 40px;
            right: 40px;
            z-index: 9999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .chatbot-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #FFD25A;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            padding: 0;
        }
        
        .chatbot-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(255, 210, 90, 0.4);
        }
        
        .chatbot-btn svg {
            width: 32px;
            height: 32px;
            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
        }
        
        .chatbot-tooltip {
            position: absolute;
            bottom: 80px;
            right: 0;
            background: white;
            color: #0a0a0a;
            padding: 14px 18px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px);
            transition: all 0.3s ease;
            border-left: 4px solid #FFD25A;
            line-height: 1.4;
            font-family: inherit;
        }
        
        .chatbot-btn:hover + .chatbot-tooltip,
        .chatbot-tooltip:hover {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        
        @media (max-width: 768px) {
            .chatbot-flotante {
                bottom: 30px;
                right: 30px;
            }
            
            .chatbot-btn {
                width: 55px;
                height: 55px;
            }
            
            .chatbot-btn svg {
                width: 28px;
                height: 28px;
            }
            
            .chatbot-tooltip {
                bottom: 75px;
                right: -30px;
                font-size: 13px;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Crear HTML
    const container = document.createElement('div');
    container.className = 'chatbot-flotante';
    container.innerHTML = `
        <button class="chatbot-btn" title="Contactar soporte">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="#0a0a0a" stroke="#0a0a0a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="9" cy="10" r="1" fill="#0a0a0a"/>
                <circle cx="12" cy="10" r="1" fill="#0a0a0a"/>
                <circle cx="15" cy="10" r="1" fill="#0a0a0a"/>
            </svg>
        </button>
        <div class="chatbot-tooltip">
            ¿Tiene dudas para realizar la compra o requiere servicio técnico? ¡Haga clic aquí!
        </div>
    `;
    
    document.body.appendChild(container);
    
    // Agregar evento al botón
    const btn = container.querySelector('.chatbot-btn');
    btn.addEventListener('click', function() {
        window.open('https://t.me/AsistentePieza_bot', '_blank');
    });
})();
