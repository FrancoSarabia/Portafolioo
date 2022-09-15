<template>
  <div class="main-container">
    <navbar></navbar>
    <principal></principal>
    <about></about>
    <technicalKnowledge></technicalKnowledge>
    <experiencies></experiencies>
    <jobs></jobs>
    <contact></contact>
    <div class="arrow-top" @click="scrollTop()">
        <i class="fas fa-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
//import PdfViewer from '../components/PdfViewer.vue'

export default {
  components: {
    Navbar: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Navbar" */ "../components/Navbar.vue")
    ),
    Principal: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Principal" */ "../components/Principal.vue")
    ),
    About: defineAsyncComponent(() =>
      import(/* webpackChunkName: "About" */ "../components/About.vue")
    ),
    TechnicalKnowledge: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "TechnicalKnowledge" */ "../components/TechnicalKnowledge.vue"
      )
    ),
    Experiencies: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "Experiencies" */ "../components/Experiencies.vue"
      )
    ),
    Jobs: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Jobs" */ "../components/Jobs.vue")
    ),
    Contact: defineAsyncComponent(() =>
      import(/* webpackChunkName: "Contact" */ "../components/Contact.vue")
    ),
  },
  mounted() {
    const html = document.getElementsByTagName('html')[0]
    let arrow = document.getElementsByClassName('arrow-top')[0]

    arrow.scrollTop = 0

    if(html.scrollTop == 0){
        arrow.style.display = "none"
    }
    window.addEventListener('scroll', () => {
        if(html.scrollTop > 0)
            arrow.style.display = "block"
        else
            arrow.style.display = "none"
    })
  },
  methods: {
    scrollTop() {
        const body = document.getElementsByTagName('html')[0]
        body.scrollTop = 0
        body.style.transition = "3s"
    }
  },
};
</script>

<style>

html {
  scroll-behavior: smooth;
}

.main-container {
  display: grid;
  grid-template-columns: 1fr;
}

.arrow-top {
  color: white;
  text-align: center;
  background-color: #d65a31;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 3.5em;
  padding: 1.5em 0 1.5em 0;
}

.arrow-top:hover {
    background-color: black;
    cursor: pointer;
    transition: 0.5s;
}
</style>