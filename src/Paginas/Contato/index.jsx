import React from 'react'
import styles from './Contato.module.css'
import emailjs from 'emailjs-com';

export default function Contato() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_hcy36pg', 'template_9khb42c', e.target, 'AwHJDYSAupxN90XCc')
            .then((result) =>{
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            alert('Mensagem enviada com sucesso!')
            e.target.reset()
    }
    return (
        <>
            <h2 className={styles.form_title}>Contato</h2>
            <div className={styles.container__contato}>
                <form className={styles.form_contato} onSubmit={sendEmail}>
                    <input type='text' placeholder='Digite seu nome' name="nome_usuario" required />
                    <input type='email' placeholder='Digite seu email' name="email_usuario" required />
                    <input type='text' placeholder='Digite o assunto' name="assunto" required />
                    <textarea placeholder='Digite a sua mensagem' name="mensagem" required></textarea>
                    <button type='submit'>Enviar mensagem</button>
                </form>
            </div>
        </>
    )
}
