<template>
      <nav id="header">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-8 col-sm-8 col-md-3">
                    <!-- <img src="@/assets/img/taiyo-logo.png" alt=""> -->
                </div>

                <div id="main-menu" class="col-4 col-sm-4 col-md-9 justify-content-end d-block d-sm-block d-md-flex" :class="openMenu && 'active'">



                    <a id="close-menu-trigger" @click="handleCloseMenu" class="btn btn-outline-white btn-sm py-2 px-3 position-absolute d-block d-sm-block d-md-none">
                        <span class="fa fa-times"></span>
                    </a>

                    <ul class="menu">
                        <li class="text-center d-block d-sm-block d-md-none">
                            <img src="@/assets/img/taiyo-logo.png" alt="">
                        </li>
                        <li @click="handleCloseMenu"><router-link to="/" class="anchor-link btn btn-white btn-sm">Home</router-link></li>
                        <li v-if="($route.path === '/' || $route.path.startsWith('/#'))"><a href="#about" class="anchor-link btn btn-white btn-sm" @click="handleCloseMenu">About</a></li>
                        <li v-if="($route.path === '/' || $route.path.startsWith('/#'))"><a href="#faq" class="anchor-link btn btn-white btn-sm" @click="handleCloseMenu">FAQS</a></li>
                        <li>
                            <div class="dropdown">
                                <a class="btn btn-white btn-sm dropdown-toggle"  data-bs-toggle="dropdown">Shop</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <router-link class="dropdown-item" to="/gallery"><li @click="handleCloseMenu">Gallery</li></router-link>
                                    <a class="dropdown-item" href="#" @click="handleCloseMenu"><li>Another action</li></a>
                                    <a class="dropdown-item" href="#" @click="handleCloseMenu"><li>Something else here</li></a>
                                </ul>
                            </div>
                        </li>

                        <li class="px-1 d-block d-sm-block d-md-none d-lg-inline-block">
                            <a href="https://discord.com/invite/wPW4khNWt8" @click="handleCloseMenu" target="_blank">
                                <span class="fab fa-discord text-white"></span>
                                <span class="d-block d-sm-block d-md-none ms-2 fab-label">Discord</span>
                            </a>
                        </li>
                        <li class="px-1 mx-0 d-block d-sm-block d-md-none d-lg-inline-block">
                            <a href="https://mobile.twitter.com/TaiyoPilots" @click="handleCloseMenu" target="_blank">
                                <span class="fab fa-twitter text-white"></span>
                                <span class="d-block d-sm-block d-md-none ms-2 fab-label">Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-4 d-flex justify-content-end d-block d-sm-block d-md-none">
                    <a id="open-menu-trigger" class="btn btn-outline-white btn-sm py-2 px-3" @click="handleOpenMenu">
                        <span class="fa fa-bars"></span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavigationComp',
  data() {
    return {
        openMenu: false
    }
  },
  methods: {
    handleOpenMenu() {
        document.body.classList.add('no-scroll');
        this.openMenu = true;
    },
    handleCloseMenu() {
        document.body.classList.remove('no-scroll');
        this.openMenu = false;
    }
  },
}
</script>

<style lang="sass" scoped>

</style>