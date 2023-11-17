
<template>
  <nav>
    <router-link id="logo" to="/">
      <img src="/logo.png" alt="Logo">
    </router-link>

    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>

      <li>
        <router-link to="/blog">Blog</router-link>
      </li>

      <li>
        <router-link to="projects">Projects</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">

nav {
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;


  height: 75px;

  z-index: 30;
  /* transition: ease-in-out .3s; */
  box-shadow: none;
  /* background-color: rgb(255, 115, 0); */

  background: transparent;
  
  ul {
    width: auto;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
  }

  a {
    background: none;
    border: none;
    font-size: 13pt;
  
    text-decoration: none;
  
    padding: 10px;
  
    margin: 0 10px 0 10px;
  
    transition: ease-out .2s;
    color: white;
    
    &:hover {
      background: rgba(68, 29, 66, 0.615);
      color: white;
    }

    img {
      width: 100%;
      height: 100%;
    }
    
  }
  
  #logo {
    height: auto;
    
    margin: 0;
    display: grid;
    place-items: center;
  
    /* max-height: 60%; */
    
    width: 200px;
    
    padding-left: 15px;
    
    &:hover {
      background: none !important;
    }
  }
}

ul {
  padding: 0;
  margin: 0;
}

html:not([data-scroll='0'])  nav {
  backdrop-filter: blur(10px);
  background: linear-gradient(45deg, rgba(100, 48, 48, 0.458), rgba(63, 35, 79, 0.381));
}

</style>