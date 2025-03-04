import styles from './Inicio.module.css';
import React, { useRef, useState } from 'react';
import { sendEmail } from '../../services/emailService';
import ReCAPTCHA from 'react-google-recaptcha';
export function Inicio() {
  const form = useRef<HTMLFormElement>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  interface EmailFormElements extends HTMLFormControlsCollection {
    user_name: HTMLInputElement;
    user_email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    readonly elements: EmailFormElements;
  }

  const handleSubmit = async (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();
    if (form.current && captchaValue) {
      try {
        await sendEmail(form.current, captchaValue);
        setMessage("¡Mensaje enviado con éxito! Me pondré en contacto pronto.");
        form.current.reset(); // Opcional: Resetea el formulario después del envío
      } catch (error) {
        setMessage("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } else {
      alert('Por favor, completa el reCAPTCHA');
    }
  };

  // Función para manejar el cambio de valor del reCAPTCHA
  const onCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };
  return <div className={styles.inicio}>
    <header className={styles.header}>
      <div className="container">
        <div className="row">
          <div className='col-lg-6'>
            <h1>Hola,</h1>
            <h1>Soy Víctor</h1>
            <h2>Desarrollador de Aplicaciones Multiplataforma</h2>
          </div>
          <div className='col-lg-6'>
            <div className={styles.profile_image_container}>
              <img src="assets/images/foto_perfil.jpg" className={styles.profile_image}></img>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section className={styles.about}>
      <h2>Sobre mí</h2>
      <div className='row'>
        <div className='col-lg-6'>
          <p>
            Soy un desarrollador multiplataforma apasionado por crear experiencias digitales
            increíbles. Tengo experiencia en React, TypeScript, JavaScript, Angular, HTML, CSS, SQL, Java, Android, Wordpress y otras tecnologías modernas. Me encanta aprender cosas nuevas, resolver problemas y trabajar en equipo. Siempre estoy buscando mejorar mis habilidades y aprender nuevas tecnologías.
          </p>
        </div>
        <div className='col-lg-6' style={{ borderLeft: '1px solid #e0e0e0' }}>
          <div className={styles.icon}>
            <div className='row'>
              <i className="fas fa-birthday-cake"></i>
              <p>14/01/1994</p>
            </div>
          </div>
          <div className={styles.icon}>
            <div className='row'>
              <i className="fas fa-phone"></i>
              <p>677553370</p>
            </div>
          </div>
          <div className={styles.icon}>
            <div className='row'>
              <i className="fas fa-map-marker-alt"></i>
              <p>Cangas del Narcea, España</p>
            </div>
          </div>
          <div className={styles.icon}>
            <div className='row'>
              <i className="fas fa-envelope"></i>
              <p>victorxr1994@gmail.com</p>
            </div>
          </div>
          <div className={styles.icon}>
            <div className='row'>
              <i className="fas fa-language"></i>
              <p>Español, Inglés, Catalán</p>
            </div>
          </div>
          <a href="https://victorxavierr.github.io/Portafolio/CV_Victor.pdf" download className={styles.download_button} type='button'>
            <i className="fas fa-download"></i>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
    <section className={styles.projects}>
      <h2>Proyectos Destacados</h2>
      <div className='row'>
        <div className={styles.project}>
          <h3>PescaAstur</h3>
          <p>Proyecto final de FP que consiste en una página web donde los usuarios pueden registrarse,
            obtener información detallada de la meteorología en Asturias, informarse de los campeonatos de pesca y adquirir productos,todo desde el mismo lugar.</p>
          <h3>Tecnologías utilizadas</h3>
          <ul>
            <li>Backend con Java y SpringBoot</li>
            <li>Frontend con Angular y TypeScript</li>
            <li>BD documental con Firebase</li>
          </ul>
          <div className='row'>
            <a href="https://github.com//VictorXavierR/PescaAstur" target="_blank" rel="noopener noreferrer" className={styles.github_button}>
              <i className="fab fa-github"></i>
            </a>
            <p className={styles.padded_paragraph_github}>!Ven a verlo a Github!</p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.contact}>
      <div className='row'>
        <div className='col-lg-6'>
          <h2>Contacto</h2>
          <p>
            Si quieres saber más o trabajar conmigo, no dudes en ponerte en contacto.
          </p>
          <form ref={form} onSubmit={handleSubmit} className={styles.contact_form}>
            <label>Nombre</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Mensaje</label>
            <textarea name="message" required />
            <div style={{ display: "flex", marginTop: "10px", borderRadius: "5px", transform: "scale(0.85)", alignSelf: "flex-start", marginLeft: "-20px" }}>
              <ReCAPTCHA
                sitekey="6LctIOcqAAAAADdwA6MCSOkY2n32fb2fW3YYolVE" // Reemplaza con tu clave del sitio  
                onChange={onCaptchaChange}
              />
            </div>
            <div className='row' style={{paddingLeft:"15px"}}>
              <input type="submit" value="Enviar" />
              {message && (
                <div className={styles.bubble}>
                  {message}
                </div>
              )}
            </div>
          </form>
        </div>
        <div className='col-lg-6'>
          <img src="assets/images/imagen_contacto.png" className={styles.contact_image}></img>
        </div>
      </div>
    </section>
    <footer className={styles.footer}>
      <div className='row'>
        <div className='col-lg-3 d-none d-lg-block' style={{ paddingLeft: "0px" }}>
          <p className='footer_nombre'>Víctor Xavier Rodríguez <br></br>&copy; 2025</p>
        </div>
        <div className='col-md-4 d-none d-lg-none d-md-block' style={{ paddingLeft: "0px" }}>
          <p className='footer_nombre'>Víctor Xavier Rodríguez <br></br>&copy; 2025</p>
        </div>
        <div className='col-sm-12 d-block d-md-none' style={{ paddingLeft: "0px" }}>
          <p className='footer_nombre'>Víctor Xavier Rodríguez <br></br>&copy; 2025</p>
        </div>
        <div className='col-lg-6 col-md-8 d-none d-sm-block' style={{ paddingLeft: "60px" }}>
          <p className='footer_titulo'>Desarrollador de Aplicaciones Multiplataforma</p>
        </div>
        <div className='col-sm-12 d-block d-md-none' style={{ paddingLeft: "0px" }}>
          <p className='footer_titulo'>Desarrollador de Aplicaciones Multiplataforma</p>
        </div>
        <div className='col-lg-3 col-md-12 col-sm-12 row'>
          <p className='p_linkedin'>Sigueme en Linkedin</p>
          <a href="https://www.linkedin.com/in/victor-xavier-7aa001206/" target="_blank" rel="noopener noreferrer" className={styles.linkedin_button}>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>;
}
