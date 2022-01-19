<template>
  <div class="navbar">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark w-100">
        <div class="container-fluid">
            <!-- <div class="row text-center border border-primary rounded-circle bg-white">
                <router-link to="/" class="navbar-brand r" aria-current="page">
                    <img width="40" height="50" src="../assets/penguim-icon.png" alt="..." class="navbar-brand">
                </router-link>
            </div> -->
            <router-link to="/">
                <div class="media align-items-center">
                    <div class="media-body text-center">
                        <div class="icon icon-shape bg-white rounded-circle shadow mr-3 text-white">
                            <img class="mr-2 icon rounded-circle shadow" alt="Image placeholder" src="../assets/penguim-icon.png" width="50" height="50">
                        </div>
                    </div>
                </div>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-4">
                    <li class="nav-item">
                        <router-link  to="/" :class="$route.path == '/' ? 'nav-link active' : 'nav-link'">Início</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projetos" :class="$route.path == '/projetos' ? 'nav-link active' : 'nav-link'">Projetos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/contato" :class="$route.path == '/contato' ? 'nav-link active' : 'nav-link'">Contato</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav mb-2 mb-lg-0 px-4">
                    <li class="nav-item">
                        <a href="https://www.linkedin.com/in/arthur-s%C3%A9rvulo-5bb1831bb/" class="nav-link">Linkedin <i class="fab fa-linkedin"></i></a>
                    </li>
                    <li class="nav-item">
                        <a href="https://github.com/arthurmalakian" target="_blank" class="nav-link">Github <i class="fab fa-github-square"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>


</script>

<style>
    #navbar{
        margin: 1rem;
    }
</style>