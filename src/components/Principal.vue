<template>
    <header class="header">

        <div class="container">
            <div class="jumbotron">

                <div class="main-title animate__animated animate__fadeInLeftBig">
                    <h1>Programador y Analista Informatico</h1>
                    <p>Franco Sarabia</p>
                </div>

                <div class="main-logos animate__animated animate__fadeInUpBig">
                    <img src="@/assets/images/skills/python-logo.png" class="main-logos__img main-logos__img--alone">
                    <img src="@/assets/images/skills/java-logo.png" class="main-logos__img">
                    <img src="@/assets/images/skills/node-logo.png" class="main-logos__img">
                    <img src="@/assets/images/skills/angular-logo.png" class="main-logos__img">
                    <img src="@/assets/images/skills/mongo-logo.png" class="main-logos__img">
                    <img src="@/assets/images/skills/mysql-logo.png" class="main-logos__img main-logos__img--alone">
                </div>

                <div class="main-action-buttons animate__animated animate__fadeInLeftBig">
                    <a href="#aboutMe" class="btn btn-primary main-action-buttons__buttons">Ver mas <i class="fas fa-external-link-alt hide"></i></a>
                    <a href="#contact" class="btn btn-primary main-action-buttons__buttons">Contactame   <i class="fas fa-envelope"></i></a>
                </div>

            </div>
        </div>

        <div style="height: 150px; overflow: hidden;" class="wave">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #fff;"></path>
            </svg>
        </div>

    </header>
</template>

<style scoped>
/* HEADER */
.header{
    position: relative;
    width: 100%;
    height: 65em;
    background: url('@/assets/images/mainBackground.png') 50% 0 no-repeat fixed;
    padding-top: 7em;
}
.header .jumbotron{
    background: inherit;
    text-align: center;
}

.main-title h1{font-size: 2em;}
    .main-title p{font-size: 1.5em;}
.main-title p,
.main-title h1{color:#fff;}

.main-logos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
    align-items: right;
    padding: 2em 0 5em 0;
}
.main-logos__img{
    max-width: 5em;
    justify-self: center;
}
.main-logos__img--alone{display: none;}

.main-action-buttons{
    display: grid;
    row-gap: 1em;
    grid-template-columns: 1fr;
}
.main-action-buttons__buttons{
    border-radius: 1em;
    width: 13em;
    justify-self: center;
}

.wave{
    position: absolute;
    bottom: 0;
    width: 100%;
}
@media only screen and (min-width: 768px) {
    
    /* HEADER */
    .header{height: 110vh;}

    .header .jumbotron{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3em;
        grid-template-rows: minmax(0, 320px);
        align-content: flex-end;
    }

    .main-title{
        text-align: left;
        align-self: flex-end;
        padding-bottom: 3em;
        padding-top: 3em;
    }

    .main-logos{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2em;
        padding-top: 40px;
    }

    .main-logos__img--alone{
        display: inline-flex;
        grid-column: 1/3;
        width: 10em;
    }

    .main-action-buttons{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0;
    }
    .main-action-buttons__buttons{
        background: transparent;
        border: 2px solid;
        width: 13em;
        justify-self: left;
        border-radius: 15px;
        box-shadow: 0 9px #999;
    }
    .main-action-buttons a:hover{
        background: #d63031;
        transition: background-color 1s ease-out;
    }

    .main-action-buttons__buttons:active {
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
}
</style>