<template>
    <section class="experience" id="experience">

            <div class="container">
                <div class="container-exp-cert">

                    <div class="cert">

                        <div class="containt-title">
                            <p class="title">Estudios y Certificaciones</p>
                        </div>

                        <div class="job">
                            <p>2015 - 2017</p>
                            <h5>Instituto Aiep</h5>
                            <p>Titulado en la carrera tecnica Programación y Analisis de Sistemas</p>
                        </div>
                        <div class="job">
                            <p>2021 - 2024</p>
                            <h5>Universidad de Santiago de Chile</h5>
                            <p>Estudiante de Ingenieria de Ejecución en Computación e Informática</p>
                        </div>

                    </div>

                    <div class="exp">

                        <div class="containt-title">
                            <p class="title">Experiencia Profesional</p>
                        </div>

                        <div class="job">
                            <p>2016 - 2017</p>
                            <h5>Everis Center</h5>
                            <p>QA tester en el area de automatización utilizando framework de java selenium para el
                                desarrollo de pruebas automatizadas</p>
                        </div>

                        <div class="job">
                            <p>2019 - 2020</p>
                            <h5>Socio Consulting Spa</h5>
                            <p>Desarrollador de sitio web para empresas externas basados en el lenguaje C# en
                                conjunto
                                con
                                la plataforma iPaaS Boomi
                            </p>
                        </div>

                        <div class="job">
                            <p>2020 - 2021</p>
                            <h5>Andes Labs</h5>
                            <p>Automatización de robot (rpa) utilizando La herramienta Open RPA y desarrollador en python y Django</p>
                        </div>
                        <div class="job">
                            <p>Febrero 2021 - Junio 2022</p>
                            <h5>Temis Technology SPA.</h5>
                            <p>- Desarrollo backend de un ERP utilizando Python/Django Rest Framework.&nbsp;&nbsp;(1 año 5 meses)</p>
                            <p>- Desarrollo de un Microservicio para el mismo sistema utilizando NestJS. (3 meses)</p>
                            <p>- Desarrollo frontend de un ERP utilizando VueJS. (2 meses)</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>    
</template>

<style scoped>
.experience{
    background: url('@/assets/images/code-820275_1920.jpg') 50% 0 no-repeat fixed;
    padding-bottom: 6em;
}

.experience .container-exp-cert{
    display:grid;
    grid-template-columns: 1fr;
    row-gap: 2em;
    background-color: white;
    margin-top: -135px;
    border-radius: 20px;
    padding-top: 2em;
    padding-bottom: 6em;
}

.experience .container-exp-cert .cert,
.experience .container-exp-cert .exp{
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    row-gap: 1em;
    width: 90%;
    justify-self: center;
    padding: 0 0 0 0;
}

.experience .container-exp-cert .job{
    border-left: 4px solid #d65a31;
    width: 100%;
    padding: 0.5em 2em;
    text-align: justify;
    letter-spacing: 0;
    Box-shadow: 2px 2px 3px 0 rgba(0,0,0,.2); 
}
.experience .container-exp-cert .title{
    font-size: 1.3em;
    text-align: justify;
    width: 4em;
    margin:0;
    font-weight: bold;
    color: #1a1a1a;
}

@media only screen and (min-width: 768px) {
    .experience .container-exp-cert{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .experience .container-exp-cert .title{width: 100%;}
}
</style>