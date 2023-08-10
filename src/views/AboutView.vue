<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>

export default {
  name: "AboutView",

  // перевірка паролю перед прогрузкою даного шляху
  beforeRouteEnter(to, from, next) {
    let password = prompt('Enter password to redirect');
    if (password === '123') {
      next();
      return true;
    } else {
      next(false);
      return false;
    }
  }
}

</script>