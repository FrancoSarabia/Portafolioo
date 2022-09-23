<template>
    <section id="aboutMe" class="container aboutme animate__animated animate__bounceInRight">

        <div class="containt-title">
            <h2 class="title">Acerca de mi</h2>
        </div>

        <div class="profile-img">
            <img :src="require('@/assets/images/franco.jpg')">
        </div>

        <div class="text-aboutme">
            <p> Mi nombre es <span class="negrita">Franco Maximiliano Sarabia Mellado</span>, Analista Programador y estudiante de ingeniería en computación e informática enfocado en <span class="negrita">desarrollo de sistemas actualmente.</span>,
            </p>

            <p>Me considero un profesional con <span class="negrita">iniciativa</span>, en 
            <span class="negrita">constante aprendizaje</span> de nuevas tecnologías, <span class="negrita">responsable, 
                comprometido</span> con cada proyecto y con curiosidad por resolver nuevos retos.</p>

            <a 
                :href="url"
                type="button" 
                class="btn btn-aboutme-pdf"
                target="_blank"
            >
                Descargar CV
            </a>
    
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            url: ''
        }
    },
    mounted() {
        if (process.env.NODE_ENV === "development") {
            this.url = 'http://localhost:4000/Curriculum-Franco'
        } else {
            this.url = `${ process.env.HOST }/Curriculum-Franco`
        }

        console.log("EJEMPLO: ", process.env.VUE_APP_HOST_BACKEND)
        console.log("ENTORNO: ", process.env.NODE_ENV)
        // this.url =  `${ process.env.VUE_APP_HOST }/Curriculum-Franco`
        console.log("URL: ", this.url)
    }
}


</script>

<style scoped>
/*ABOUT ME*/

.aboutme > *{padding-bottom: 0.5em;}
.containt-title{
    padding-bottom: 1em;
    font-size: 2em;
}
.containt-title .title{color:#d65a31;}
.aboutme .containt-title .title{
    border-bottom: solid 2px #d65a31;
    width: 9em;
    margin: 0 auto;
}
.profile-img {text-align: center;}
.aboutme .profile-img img{
    width: 10em;
    border-radius: 50%;
    border: solid 7px #d65a31;
}
.aboutme .text-aboutme{
    text-align: center;
    font-size: 1.3em;}

.aboutme .text-aboutme .btn-aboutme-pdf{
    color: white;
    background-color: #d65a31;
    border-radius: 15px;
    box-shadow: 0 9px #999;
}

.aboutme .text-aboutme .btn-aboutme-pdf:hover{
    background-color: #bb4a24;
}

.aboutme .text-aboutme .btn-aboutme-pdf:active{
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.modalCurriculum { display: none; }

@media only screen and (min-width: 768px) {
    /*ABOUT ME*/
    .aboutme{
        display: grid;
        grid-template-columns: 350px 1fr;
        text-align: center;
        padding-bottom: 90px;
    }
    .aboutme > .containt-title{
        grid-column: 1/3;
        padding-bottom: 2em;
    }
    .aboutme .text-aboutme{text-align: justify;}
    .aboutme .profile-img{justify-self: left;}
    .aboutme .profile-img img{width: 16em;}
    .aboutme .text-aboutme{padding-top: 1em;}

    .modal{
        margin: 0 auto;
    }

    .modal-dialog{
        padding: 0;
        width: 700px;
        height: 600px;
    }
}
</style>