<template>
    <div id="technicalKnowledge" class="divider">
            <h2 class="title"><i class="fas fa-tools"></i> Conocimientos Tecnicos</h2>
        </div>

        <section class="technicalKnowledge">

            <div class="container">
                <div class="skills">
                    <div class="skill-container node">
                        <img src="@/assets/images/skills/node-logo.png" class="skill-img">
                        <h4 class="skill-title">NodeJS</h4>
                        <p class="descrip-skill">Entorno de ejecución de JavaScript para el desarrollo del backend</p>
                    </div>
                    
                    <div class="skill-container nest">
                        <img src="@/assets/images/skills/nest-logo.png" class="skill-img">
                        <h4 class="skill-title">NestJS</h4>
                        <p class="descrip-skill">Framework de nodejs para el desarrollo del backend</p>
                    </div>

                    <div class="skill-container angular">
                        <img src="@/assets/images/skills/angular-logo.png" class="skill-img">
                        <h4 class="skill-title">Angular</h4>
                        <p class="descrip-skill">Framework de JavaScript para crear y mantener aplicaciones web de una sola pagina (SPA)</p>
                    </div>


                    <div class="skill-container spring">
                        <img src="@/assets/images/skills/spring-logo.png" class="skill-img">
                        <h4 class="skill-title">Spring Boot</h4>
                        <p class="descrip-skill">Framework de Java para el desarrollo del backend</p>
                    </div>

                    <div class="skill-container drf">
                        <img src="@/assets/images/skills/drf-logo.png" class="skill-img drf-img">
                        <h4 class="skill-title">Django Rest Framework</h4>
                        <p class="descrip-skill">Framework de Python para el desarrollo de Apis Rest en el backend</p>
                    </div>

                    <div class="skill-container mongo">
                        <img src="@/assets/images/skills/mongo-logo.png" class="skill-img">
                        <h4 class="skill-title">Mongo DB</h4>
                        <p class="descrip-skill">Sistema de base de datos NoSQL, orientado a documentos y de código
                            abierto</p>
                    </div>

                    <div class="skill-container mysql">
                        <img src="@/assets/images/skills/mysql-logo.png" class="skill-img">
                        <h4 class="skill-title">MySql</h4>
                        <p class="descrip-skill">Gestor de base de datos relacionales</p>
                    </div>

                    <div class="skill-container postgresql">
                        <img src="@/assets/images/skills/postgresql-logo.png" class="skill-img">
                        <h4 class="skill-title">PostgreSql</h4>
                        <p class="descrip-skill">Gestor de base de datos relacionales</p>
                    </div>

                </div>
            </div>

        </section>
</template>

<style scoped>
.technicalKnowledge{
    background: url('@/assets/images/texture.png') top left repeat;
}

.divider{
    color: #bfbfbf;
    text-align:center;
    padding: 70px 0 0;
    background-color: #5d656b;
    border-bottom: solid 7px #008080;
    clip-path: polygon(0 0, 100% 20%, 100% 100%, 0 100%);
}
.divider .title{
    color: #bfbfbf;
    font-size: 1.5em;
}

.skills{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2em;
    justify-items: center;
    padding: 4em 0 5em 0;
}

.skills .skill-container{
    width: 150px;
    border-top: 10px solid rgba(255, 255, 255, 0.055);
    transition-duration: 0.5s;
    text-align: center;
}

.skills .angular:hover, .java:hover{border-top: 10px solid rgb(185, 43, 43);}
.skills .node:hover, .mongo:hover{border-top: 10px solid rgb(39, 153, 39);}
.skills .mysql:hover{border-top: 10px solid rgb(219, 219, 43);}
.skills .nest:hover{border-top: 10px solid rgb(236, 83, 83);}
.spring:hover{border-top: 10px solid rgb(91, 216, 91);}
.drf:hover{border-top: 10px solid rgb(207, 13, 13);}
.postgresql:hover{border-top: 10px solid rgb(87, 86, 170);}

.skills .skill-container .skill-title{
    font-size: 1.3em;
    letter-spacing: 0;
    text-transform: lowercase;
}
.skills .skill-container .skill-title::first-letter{text-transform: uppercase;}
.skills .skill-container .descrip-skill {
    font-size: 0.9em;
}

.skills .skill-img{
    width: 7em;
    padding: 0 0 1em;
}

@media only screen and (min-width: 600px) {
    .skills{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@media only screen and (min-width: 768px) {
    .divider .title{
        color: #bfbfbf;
        font-size: 2em;
    }

    .skills{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        align-items: top;
        padding-top: 3em;
    }

    .skills .skill-container{width: 120px;}   

    .skills .skill-title{
        font-size: 1.2em;
        font-weight: bold;
    }

    .skills .skill-img{
        width: 6em;
        padding: 1em 0 1em;
    }

    .skills .drf-img {
        width: 10em;
        padding: 1em 0 2em 0;
    }
}
</style>