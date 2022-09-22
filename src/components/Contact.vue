<template>
    <section class="contact" id="contact">

            <div class="container">
                <h1 class="title">Contacta<span>me</span></h1>

                <div class="contact-wraper">

                    <div class="contact-form">
                        <h3 class="sub-title">Enviar Correo</h3>

                        <form action="">
                            <p>
                                <label>Nombre y Apellido (*)</label>
                                <input type="text" v-model="nameLastName">
                            </p>

                            <p>
                                <label>Correo Electronico (*)</label>
                                <input type="email" v-model="emailFrom">
                            </p>

                            <p>
                                <label>Telefono</label>
                                <input type="tel" v-model="phone">
                            </p>

                            <p>
                                <label>Asunto (*)</label>
                                <input type="text" v-model="emailSubject">
                            </p>

                            <p class="block"> <label>Mensaje (*)</label>
                                <textarea name="message" rows="3" v-model="emailMessage"></textarea>
                            </p>

                            <template v-if="!loading">
                                <p class="block">
                                    <button type="button" @click="sendEmail()">
                                        <i class="fas fa-paper-plane"></i> {{ textButton }}
                                    </button>
                                </p>
                            </template>
                            <template v-else>
                                <p class="block">
                                    <button class="btn btn-primary" type="button" disabled>
                                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                        Espere por favor...
                                    </button>
                                </p>
                            </template>
                        </form>
                    </div>

                    <div class="contact-info">
                        <h4 style="color: white;">Más información</h4>

                        <ul>
                            <li><i class="fas fa-phone"></i> +569 8217 6256</li>
                            <li>
                                <i class="fas fa-envelope"></i> <a href="mailto:franco.sarabia24@gmail.com" style="color:white;">franco.sarabia24@gmail.com</a>
                            </li>
                            <li><i class="fas fa-map-marker-alt"></i> Santiago - Chile</li>

                            <li style="padding: 20px 0 10px 0;">REDES SOCIALES</li>

                            <li> 
                                <a href="https://linkedin.com/in/franco-sarabia-4b8911133/" target="_blank">
                                    <img src="../assets/images/Linkedin-logo.png" class="linkedin-img" />
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>
                <div class="text-footer">
                    <h5 style="color: #9e9797;">Designed by Franco Sarabia - {{ new Date().getFullYear() }}©</h5>
                    <p>
                        <span>Código Portafolio | </span>
                        <a href="https://github.com/FrancoSarabia/PortafolioV2" target="_blank">Frontend - </a>
                        <a href="https://github.com/FrancoSarabia/portafolio_backend" target="_blank">Backend</a>
                    </p>
                </div>
            </div>

        </section>
</template>

<script>
import axios from "axios";
const Swal = require('sweetalert2')


export default {
    data() {
        return {
            emailFrom: '',
            emailSubject: '',
            emailMessage: '',
            nameLastName: '',
            phone: '',
            icon: '',
            title: '',
            textButton: 'Enviar',
            loading: false,
            url: ''
        }
    },
    mounted() {
        this.url =  `${ process.env.VUE_APP_HOST }/Curriculum-Franco`
    },
    methods: {
        async sendEmail() {

            const body = {
                from: this.emailFrom,
                subject: this.emailSubject,
                message: this.emailMessage,
                nameLastName: this.nameLastName,
                phone: this.phone
            }
            this.loading = true
            this.textButton = 'Espere...'
            
            await axios.post(`${this.url}api/send-email/`, body, { timeout: 7000 })
            .then(response => { 
                this.icon = 'success'
                this.title = response.data['message']
            })
            .catch(err => {
                this.icon = 'error'
                this.title = 'No se pudo enviar el correo'
            });

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            Toast.fire({
                icon: this.icon,
                title: this.title
            })

            this.loading = false
            this.textButton = 'Enviar'
        }
    }
}
</script>

<style scoped>
.divider-contact{
    background: url('@/assets/images/teclado.jpg') 50% 0 no-repeat fixed;
    filter: sepia(100%);
    border-bottom: none;
    box-shadow: inset 0 0 7px rgba(0,0,0,.07);
}

.divider-contact::before{ background-color: rgba(216, 213, 20, 0.5); }


.contact{
    background: #181818;
    color:#fff;
    font-family: 'Quicksand', sans-serif;
    padding: 5em 0;
}

.contact .title{
    text-align: center;
    font-size: 3em;
    color: white;
    padding-bottom: 1em;
}

.contact .title span{ color: #d65a31; }
.contact-wraper{ box-shadow: 0 0 20px 0 rgba(255, 255, 255, .3); }
.contact-wraper > *{ padding: 1em; }
.contact-form{ background: #222222; }

.contact-form .sub-title{
    color: white;
    font-size: 1.2em;
    padding: 1em 0;
}

.contact-form form{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.contact-form form .block{ grid-column: 1/3; }

.contact-form form p{
    margin: 0;
    padding: 1em;
}

.contact-form form button,
.contact-form form input,
.contact-form form textarea{
    width: 100%;
    padding: .7em;
    border: none;
    background:none;
    outline: 0;
    border-bottom: 1px solid #d65a31;
    color: #fff;
}

.contact-form form button{
    background: #d65a31;
    color: white;
    font-weight: bold;
    border:0;
    text-transform: uppercase;
    padding: 1em;
    border-radius: 15px;
    box-shadow: 0 9px #999;
}

.contact-form form button:hover,
.contact-form form button:focus{
    background: #d63031;
    color: #999;
    transition: background-color 1s ease-out;
    outline: 0;
}
.contact-form form button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.contact-info{ background: #000; }

.contact-info h4,
.contact-info ul,
.contact-info p{
    text-align: center;
    margin: 0 0 1rem 0;
}

.contact-info ul{
    list-style: none;
    padding:0;
}
.contact-info li{ padding-bottom: 15px; }
.contact-info .linkedin-img { width: 26px; }

/*.contact-info ul li{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: .3em;
}*/

.text-footer{
    text-align: center;
    color: white;
    font-size: 14px;
    text-decoration: none;
    padding-top: 2em;
}

    .text-footer p {
        margin: 12px 0 0 0;
        color: #9e9797;
    }
    .text-footer p a{
        color: #d65a31;
        text-decoration: none;
    }

@media only screen and (min-width: 768px) {
    .contact {
        padding-bottom: 2em;
    }
    .contact-wraper{
        display: grid;
        grid-template-columns: 2fr 1fr;
    }

    .contact-wraper > *{
        padding: 2em;
    }

    .contact-info h4,
    .contact-info ul,
    .contact-info p{
        padding: 1em;
        text-align: left;
    }
}
</style>