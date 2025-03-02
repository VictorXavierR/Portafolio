import emailjs from 'emailjs-com';

export const sendEmail = (form: HTMLFormElement, captchaValue: string) => {
    // Agregar el valor del reCAPTCHA a los datos del formulario
    const formData = new FormData(form);
    formData.append('g-recaptcha-response', captchaValue);  // Agregamos el valor del reCAPTCHA
  
    // Enviar el formulario a EmailJS
    form.append('g-recaptcha-response', captchaValue);  // Agregamos el valor del reCAPTCHA
    return emailjs.sendForm('service_oexwfbp', 'template_bep8nmo', form, 'ajY1xopH6osuCmuP1')
      .then((result) => {
        console.log('Correo enviado con éxito:', result.text);
      }, (error) => {
        console.log('Error al enviar el correo:', error.text);
      });
  };