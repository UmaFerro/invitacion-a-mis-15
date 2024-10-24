<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

//AUDIO
const audio = new Audio('paradise.mp3')
const isPlaying = ref(false)

const toggleMusic = () => {
  if (isPlaying.value) {
    audio.pause()
  } else {
    audio.play()
  }
  isPlaying.value = !isPlaying.value
}

//SONG FORM
const song = ref({
  name: '',
  author: '',
  link: ''
})
const songRedirect = () => {
  const data = `Nombre de la cancion: ${song.value.name}
  Autor: ${song.value.author}
  Link de la cancion: ${song.value.link}`
  const encodedData = encodeURIComponent(data);
  return `https://wa.me/+5492235219344?text=${encodedData}`;
}
//CONFIRMATION FORM
const confirmation = ref({
  select: null,
  fullName: '',
  data: ''
})
const confirmationRedirect = () => {
  const data = `Nombre completo: ${confirmation.value.fullName}
  Asistencia: ${confirmation.value.select}
  ${confirmation.value.data === '' ? '' : `Dato importante: ${confirmation.value.data}`}`
  const encodedData = encodeURIComponent(data);
  return `https://wa.me/+5492235219344?text=${encodedData}`;
}
//COUNTDOWN
const targetDate = new Date('2024-11-22T21:00:00').getTime()
const countdownText = ref('')
const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  countdownText.value = `${days}d ${hours}h ${minutes}m ${seconds}s`

  if (distance < 0) {
    countdownText.value = '¡Cuenta regresiva terminada!'
    clearInterval(interval)
  }
}

let interval
onMounted(() => {
  interval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div id="content">

    <div class="background">
      <img src="/images/uma.jpeg">
    </div>

    <section class="index">
      <div>
        <span class="title">Uma</span>
        <span class="subtitle">Mis XV años</span>
      </div>
      <span class="date">22.11.2024</span>
      <button class="audio" @click="toggleMusic">
        <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z" /></svg>
      </button>
    </section>

    <section class="countdown">
      <span>Faltan</span>
      <h1>{{ countdownText }}</h1>
    </section>

    <section class="address">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
      <h1>Dirección</h1>
      <div>
        <h2>Jano's, La Normandina</h2>
        <p>Av. Patricio Peralta Ramos 5050, Mar del Plata, Provincia de Buenos Aires</p>
      </div>
      <span>21:00hs</span>
      <a href="https://www.google.com/maps/place/Jano's+Playa+Grande/@-38.0263882,-57.541312,15z/data=!4m6!3m5!1s0x9584dd70893c535d:0x7ddc7fac2960aa33!8m2!3d-38.0261389!4d-57.5303659!16s%2Fg%2F11tgf2gxjc?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="primary-button">VER UBICACIÓN</a>
      <div class="image-container">
        <img src="/images/normandina.jpg">
      </div>
    </section>

    <section class="hashtag">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>
      <div>
        <h1>Compartí la magia de Mis 15</h1>
        <p>Durante la fiesta usa el siguiente hashtag y compartí conmigo como viviste cada momento de esta noche tan especial para mi</p>
      </div>
      <span>#XVUMA_</span>
      <a href="https://www.instagram.com/explore/search/keyword/?q=%23XVUMA_" target="_blank" class="secondary-button">VER MURAL</a>
    </section>

    <section class="songs">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,3V15.5A3.5,3.5 0 0,1 17.5,19A3.5,3.5 0 0,1 14,15.5A3.5,3.5 0 0,1 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z" /></svg>
      <h1>¿Que canción no puede faltar?</h1>
      <div class="form">
        <input type="text" placeholder="Nombre de la cancion" v-model="song.name">
        <input type="text" placeholder="Autor" v-model="song.author">
        <input type="text" placeholder="Link de youtube, spotify.." v-model="song.link">
      </div>
      <button :disabled="Object.values(song).some(value => value === '')" class="primary-button"><a :href="songRedirect()">ENVIAR</a></button>
    </section>

    <section class="paragraph">
      <p>La risa no tiene tiempo, la imaginación no tiene edad y los sueños son para siempre</p>
      <p>...</p>
      <p>Yo soñé con esta noche mágica y quiero compartirla con vos</p>
    </section>

    <section class="dressCode">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-80v-240h-64q-40 0-68-28t-28-68q0-29 16-53.5t42-36.5l262-116v-26q-36-13-58-43.5T360-760q0-50 35-85t85-35q50 0 85 35t35 85h-80q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720t28.5 11.5Q520-697 520-680v58l262 116q26 12 42 36.5t16 53.5q0 40-28 68t-68 28h-64v240H280Zm-64-320h64v-40h400v40h64q7 0 11.5-5t4.5-13q0-5-2.5-8.5T750-432L480-552 210-432q-5 2-7.5 5.5T200-418q0 8 4.5 13t11.5 5Zm144 240h240v-200H360v200Zm0-200h240-240Z"/></svg>
      <h1>Código de vestimenta</h1>
      <span>ELEGANTE</span>
    </section>

    <section class="confirmation">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15,14C12.3,14 7,15.3 7,18V20H23V18C23,15.3 17.7,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,15L4.4,14.5C2.4,12.6 1,11.4 1,9.9C1,8.7 2,7.7 3.2,7.7C3.9,7.7 4.6,8 5,8.5C5.4,8 6.1,7.7 6.8,7.7C8,7.7 9,8.6 9,9.9C9,11.4 7.6,12.6 5.6,14.5L5,15Z" /></svg>
      <h1>Confirmación</h1>
      <p>Completa el siguiente formulario para confirmar tu asistencia y poder celebrar juntos una noche especial</p>
      <div class="select">
        <div class="option" @click="confirmation.select = '¡Si voy!'" :class="{active: confirmation.select === 'No puedo :('}">
          <p v-if="confirmation.select === '¡Si voy!'" class="fade">❤️</p>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
          <span>¡Si voy!</span>
        </div>
        <div class="option" @click="confirmation.select = 'No puedo :('" :class="{active: confirmation.select === '¡Si voy!'}">
          <p v-if="confirmation.select === 'No puedo :('" class="fade">😔</p>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
          <span>No puedo :(</span>
        </div>
      </div>
      <div class="form">
        <input type="text" placeholder="Nombre completo" v-model="confirmation.fullName">
        <input type="text" placeholder="Algún dato importante" v-model="confirmation.data">
      </div>
      <button :disabled="!confirmation.select || confirmation.fullName === ''" class="primary-button"><a :href="confirmationRedirect()">ENVIAR</a></button>
    </section>

    <section class="end">
      <h1 class="title"><strong class="alternative">✨</strong>Uma<strong>✨</strong></h1>
      <h2>22/11/2024</h2>
    </section>
  </div>
</template>
