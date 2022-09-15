<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="menu">
            <div class="container">
                <a class="navbar-brand" href="#">Franco <span style="color: #d65a31">Sarabia</span></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" style="font-size: 10px;"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#aboutMe">Acerca de</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#technicalKnowledge">Conocimientos técnicos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#experience">Experiencia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#jobs">Trabajos realizados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contacto</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
#menu{transition:background-color 500ms, height 300ms;}
li a {
    font-size: 12px;
}
.navbar-brand {
    font-size: 17px;
}
</style>