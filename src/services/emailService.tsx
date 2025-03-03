import emailjs from 'emailjs-com';

export const sendEmail = (form: HTMLFormElement, captchaValue: string) => {
  // Crear un nuevo FormData con el valor del reCAPTCHA
  const formData = new FormData(form);
  formData.append('g-recaptcha-response', captchaValue);
  // Enviar el formulario a EmailJS
  return emailjs.sendForm('service_oexwfbp', 'template_bep8nmo', form, 'ajY1xopH6osuCmuP1')
    .then((result) => {
      console.log('Correo enviado con éxito:', result.text);
    }, (error) => {
      console.log('Error al enviar el correo:', error.text);
    });
};