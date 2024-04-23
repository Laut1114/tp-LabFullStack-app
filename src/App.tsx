import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <img src={reactLogo} alt="nav icon" />
        <a href="#">App Noticias</a>
      </nav>

      <div className='main'>
        <aside className='aside-left'>
          <h4>Ultimas Noticias</h4>
          <p className='ultimas-noticias'>Un transporte escolar se incendió cuando trasladaba a estudiantes de Pilo Lil, en Neuquén.</p>
          <p className='ultimas-noticias'>Secuestro de varias especies en Bahía Blanca: se resistió al control y lesionó a autoridades.</p>
          <p className='ultimas-noticias'>Cómo la inteligencia artificial generativa puede convertir los recuerdos en fotos que nunca existieron.</p>
          <p className='ultimas-noticias'>Presentaron un pedido de juicio político contra Javier Milei por «posible comisión de delitos».</p>
          <p className='ultimas-noticias'>Video | Milei en cadena nacional:  «La era del supuesto Estado presente ha terminado».</p>
          <p className='ultimas-noticias'>Rutas 22 y 151: Weretilneck confirma a Neuquén como parte de la provincialización.</p>
          <p className='ultimas-noticias'>Policías evitaron que una mujer se arroje de las bardas en Regina.</p>
          <p className='ultimas-noticias'>Estudiantes de Neuquén viajarán a Brasil para un certamen internacional de petróleo y gas.</p>
          <p className='ultimas-noticias'>Polémica superclásica: la AFA publico el audio del VAR por el gol anulado a River.</p>
          <p className='ultimas-noticias'>Las primeras nevadas complican las rutas de Neuquén y Río Negro: recomiendan circular con extrema precaución.</p>
        </aside>
        <div className='principal'>
          <h2>Noticias Más Leidas</h2>

          <div className="card">
            <img src="/src/assets/card1.webp" alt="card1" width={"20%"} />
            <div>
              <p>Paritaria en Río Negro: habrá «correcciones» para los próximos aumentos de los docentes</p>
              <button>Leer Más</button>
            </div>
          </div>

          <div className="card">
            <img src="/src/assets/card2.webp" alt="card2" width={"20%"} />
            <div>
              <p>El MPN dijo no a la Audiencia Pública por la boleta de CALF</p>
              <button>Leer Más</button>
            </div>
          </div>

          <div className="card">
            <img src="/src/assets/card3.webp" alt="card3" width={"20%"} />
            <div>
              <p>Previo a la marcha universitaria, el Gobierno emitió un comunicado y aseguró el depósito de fondos</p>
              <button>Leer Más</button>
            </div>
          </div>

          <div className="card">
            <img src="/src/assets/card4.webp" alt="card4" width={"20%"} />
            <div>
              <p>Así llegó la nieve al Cerro Catedral de Bariloche: mirá cómo congelar los precios para esquiar</p>
              <button>Leer Más</button>
            </div>
          </div>

          <div className="card">
            <img src="/src/assets/card5.webp" alt="card5" width={"20%"} />
            <div>
              <p>La intendenta de Catriel decidió tapar pozos de la Ruta 151 ante la falta de respuesta del VN</p>
              <button>Leer Más</button>
            </div>
          </div>

          <div className="card">
            <img src="/src/assets/card6.webp" alt="card6" width={"20%"} />
            <div>
              <p>Los detalles para la vuelta del Tren del Valle entre Cipolletti y Neuquén</p>
              <button>Leer Más</button>
            </div>
          </div>
        </div>

        <aside className='aside-right'>
          <div className='datos'>
            <h3>Datos del Tiempo</h3>
            <p>• 9°C - CIELO CLARO.</p>
          </div>

          <div className='datos'>
            <h3>Cotizaciones Monedas</h3>
            <hr />
            <p>• Dólar Oficial: $892 (+0.22%)</p>
            <p>• Dólar Informal: $1.035 (+1.97%)</p>
            <p>• Dólar CCL: $1.062 (-2.22%)</p>
            <p>• Dólar Tarjeta: $1.427 (+0.22%)</p>
            <p>• Plazo Fijo: 60%</p>
            <p>• Riesgo País: 1.161 (-4.52%)</p>
          </div>
        </aside>
      </div>
      
      <footer className="footer">
        <p>Tp - Laboratorio Full Stack | San Martin Lautaro | Proyecto de portal de noticias en React - Vite </p>
        <p></p>
      </footer>
    </>
  )
}

export default App
