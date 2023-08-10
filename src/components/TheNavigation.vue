<!--          exact використовуємо щоб шлях був унікальним(коли його запис схожий на інший запис. / схожий на /about)-->
<!--<router-link tag="li" active-class="active " to="/" exact><a>Home</a></router-link>-->
<!--<router-link tag="li" active-class="active" to="/about"><a>About</a></router-link>-->
<!--          <router-link tag="li" active-class="active" to="/author"><a>Author</a></router-link>-->

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link tag="li" active-class="active " to="/" exact><a>Home</a></router-link>
          <router-link tag="li" active-class="active" to="/about"><a>About</a></router-link>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Authors
            </a>
            <ul class="dropdown-menu">
              <router-link tag="li" active-class="active" to="/author/Bob"><a class="dropdown-item">Author Bob</a></router-link>
              <router-link tag="li" active-class="active" to="/author/Dan"><a class="dropdown-item">Author Dan</a></router-link>
              <router-link tag="li" active-class="active" to="/author/Sam"><a class="dropdown-item">Author Sam</a></router-link>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style scoped>
.active a {
  color: crimson; /* або будь-який інший колір, який ви хочете використовувати для активних посилань */
}

a {
  margin-right: 15px;
  text-decoration: none;
}
</style>