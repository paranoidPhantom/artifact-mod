<script setup lang="ts">

</script>

<template>
    <div class="container">
        <img src="/images/hero2.webp" alt="Hero image" id="hero-image">
        <div class="hero">
            <img src="/images/logo1.webp" alt="Логотип" id="logo">
            <h4>
                ARTIFACT — это полное переосмысление атмосферы сталкера, вдохновленное произведениями братьев Стругацких.<br><br>
                Модификация на основе S.T.A.L.K.E.R. CoP, рассказывающая о приключениях сталкера по кличке Угрюмый.<br><br>Вас ждет интересный
                сюжет с множеством дополнительных квестов, хорошая графика и затягивающий геймплей.
            </h4>
            <div class="button-container">
                <router-link to="/about">
                    <button>О модификации</button>
                </router-link>
                <router-link to="/beta-testing">
                    <button>Стать тестировщиком</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes heartbeat
{
  0%
  {
    transform: translate(-50%, -50%) scale( .99 );
  }
  20%
  {
    transform: translate(-50%, -50%) scale( 1 );
  }
  40%
  {
    transform: translate(-50%, -50%) scale( .99 );
  }
  60%
  {
    transform: translate(-50%, -50%) scale( 1 );
  }
  80%
  {
    transform: translate(-50%, -50%) scale( .99 );
  }
  100%
  {
    transform: translate(-50%, -50%) scale( .99 );
  }
}
#logo {
    border-radius: 1000rem;
    max-width: 100vw;
    user-select: none;
}
@keyframes vigineteLoad {
    from {
        box-shadow: none
    }
    to {
        box-shadow: 0 0 5rem 5rem black inset;
    }
}
.container {
    position: relative;
    height: 100vh;
    animation: vigineteLoad 2s forwards;
}
.hero {
    position: absolute;
    left: 50%;
    top: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: heartbeat ease-in-out infinite 1s;
    transition: all 0.3s;
}
h4 {
    filter: brightness(0.8);
    text-align: center;
    text-shadow: 0 0.2rem 5px black;
    box-shadow: 0 0 3rem 3rem rgba(0, 0, 0, 0.6);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 2rem;
    padding: 1rem 0;
    max-width: 90vw;
}
@keyframes changeGreyscale {
  0%
  {
    filter: saturate(0.5);
  }
  20%
  {
    filter: saturate(0);
  }
  40%
  {
    filter: saturate(0.5);
  }
  60%
  {
    filter: saturate(0);
  }
  80%
  {
    filter: saturate(0.5);
  }
  100%
  {
    filter: saturate(0.5);
  }
}

#hero-image {
    position: fixed;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.3s;
    animation: changeGreyscale 1s forwards infinite;
    user-select: none;
}

.container:has(button:hover) #hero-image{
    animation: changeGreyscale 1s forwards;
}

button {
  background-color: white;
  color: black;
  mix-blend-mode: screen;
  font-size: 2rem;
  font-weight: bolder;
  transition: all 0.4s;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
}

button:hover {
  background-color: transparent;
  color: white;
}

.button-container {
    display: flex;
    gap: 1rem;
}
</style>