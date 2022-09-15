<template>
<div id="jobs" class="divider divider-jobs">
            <h2 class="title"><i class="fas fa-tools"></i> Proyectos</h2>
        </div>

        <section class="jobs">
            <div class="container">
                <div class="galeria-port">
                    
                    <div 
                        type="button" 
                        class="imagen-port" 
                        data-bs-toggle="modal" 
                        data-bs-target="#modalProject" 
                        id="temisProject" 
                        @click.prevent="setImages('Temis')"
                    >
                        <img :src="require('@/assets/images/projects/Temis/Login.png')">
                        <div class="hover-galeria">
                            <img src="@/assets/images/icono1.png">
                            <p>Proyecto ERP Temis</p>
                            <p>CLICK PARA VER MAS</p>
                        </div>
                    </div>

                    
                </div>

                <!-- ======================================================================== -->
                <!-- ============================== MODAL =================================== -->
                <!-- ======================================================================== -->
                <div 
                    class="modal fade" 
                    id="modalProject" 
                    tabindex="-1" 
                    role="dialog" 
                    aria-labelledby="exampleModalCenterTitle" 
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-dialog-centered modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div id="carouselImages" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-indicators carousel-indicator-hit-area-height">
                                        <button 
                                            v-for="(image, index) in images" 
                                            :key="index"
                                            type="button" 
                                            :data-bs-slide-to="index.toString()" 
                                            data-bs-target="#carouselExampleCaptions" 
                                            :class="index == 0 ?'active' : carouselClass.split(' ')[1]" 
                                            aria-current="true" 
                                            :aria-label="'Slide' + index"
                                            style="background-color: black;"
                                        ></button>
                                    </div>

                                    <div class="carousel-inner">
                                        <template v-if="images.length > 0">
                                            <div 
                                                :class="index == 0 ?'carousel-item active' : carouselClass"
                                                v-for="(image, index) in images" 
                                                :key="index"
                                                style="text-align: center;"
                                            >
                                                <img 
                                                    :src="image.path" 
                                                    :alt="'imagen' + index"
                                                    d-block
                                                    width="600"
                                                    height="400"
                                                >
                                            </div>
                                        </template>
                                    </div>
                                    <button 
                                        class="carousel-control-prev carousel-control-width carousel-control-color" 
                                        type="button" 
                                        data-bs-target="#carouselImages"
                                        data-bs-slide="prev"
                                    >
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button 
                                        class="carousel-control-next carousel-control-width carousel-control-color" 
                                        type="button" 
                                        data-bs-target="#carouselImages"
                                        data-bs-slide="next"
                                    >
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <div class="carousel-description">
                                    <h5>ERP TEMIS</h5>
                                    <p>Repositorio Github:
                                        <template v-if="urlGithub !== 'Sin Repositorio'">
                                            <a
                                                class="repository-link"
                                                :href="urlGithub"
                                                target="_blank"
                                            >
                                                {{ urlGithub }}
                                            </a>
                                        </template>
                                        <template v-else>
                                            <span>
                                                Sin Repositorio
                                            </span>
                                        </template>
                                    </p>
                                    <p>{{ projectDesc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
</template>

<script>
import { defineAsyncComponent } from "vue";

let timeout

export default {
    ModalJob: defineAsyncComponent(() =>
      import(/* webpackChunkName: "ModalJob" */ "../components/Modal.vue")
    ), 
    data() {
        return {
            images: [],
            projectName : '',
            lengthArray: 0,
            carouselClass: 'carousel-item',
            urlGithub: '',
            projectDesc: ''
        }
    },
    methods: {
        async setImages(project) {
            if(project == 'Temis') {
                this.images = [
                    { path: await require(`@/assets/images/projects/Temis/Login.png`) },
                    { path: await require(`@/assets/images/projects/Temis/menu_principal_1png.png`) },
                    { path: await require(`@/assets/images/projects/Temis/menu_principal_2.png`) },
                    { path: await require(`@/assets/images/projects/Temis/notas_de_venta.png`) }
                ]
                this.projectName = 'Temis Technology'
                this.urlGithub = 'Sin Repositorio'
                this.lengthArray = this.images.length
                this.projectDesc = 'Desarrollo de un ERP para la empresa Temis Technology SPA'
            }
        }
    },
}
</script>

<style lang="scss" scoped>

$carousel-control-width: 5%;
$carousel-control-color: #d63031;

$carousel-indicator-hit-area-height: 0;

.carousel-control-width { width: $carousel-control-width; }
.carousel-control-color { background-color: $carousel-control-color; }

.carousel-indicator-hit-area-height { height: $carousel-indicator-hit-area-height; }

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
.divider-jobs{
    margin-top: -6em;
}

.jobs{
    padding-top: 2em;
}

.galeria-port{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

.imagen-port{
    width: 90%;
    height: 200px;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, .5);
}

.imagen-port > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.hover-galeria{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transform: scale(0);
    background: hsla(14, 66%, 51%, 0.7);
    transition: transform .5s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.hover-galeria img{
    width: 50px;
}

.hover-galeria p{
    color: #fff;
}

.imagen-port:hover .hover-galeria{
    transform: scale(1);
}

/*MODAL*/

.modal-footer .btn-close-modal:hover {
    color: white;
    background-color: #d63031;
    transition: 1s;
}
.modal-footer .btn-github:hover {
    opacity: 0.8;
}

/*CAROUSEL*/
.carousel-description {
    text-align: center;
    padding-top: 1.5em;
}

@media only screen and (min-width: 600px) {
    .jobs .galeria-port{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (min-width: 768px) {
    .jobs .galeria-port{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 1em;
    }
    
}
</style>