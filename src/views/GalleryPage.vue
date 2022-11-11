<template>
    <div id="gallery" class="mt-6 px-lg-5 px-3">
        <div
            class="col-4 d-flex justify-content-end d-block d-sm-block d-md-block d-lg-none"
            v-if="openFilter"
        >
            <a
                id="close-filter-trigger"
                class="btn btn-outline-white btn-sm py-2 px-3 position-absolute d-block d-sm-block d-md-block d-lg-none"
                :class="openFilter && 'active'"
                @click="handleCloseFilter"
            >
                <span class="fa fa-times"></span>
            </a>
        </div>
        <div class="row">
            <div
                id="gallery-filter"
                class="col-lg-4 sticky-top"
                :class="openFilter && 'active'"
            >
                <div class="container pb-5">
                    <div class="row align-items-center">
                        <div class="col-12 mt-lg-2">
                            <div class="filter-header">FILTER</div>
                            <div
                                class="accordion accordion-flush"
                                id="accordionFlushExample"
                            >
                                <div class="accordion-item">
                                    <h5
                                        class="accordion-header"
                                        id="flush-headingOne"
                                    >
                                        <button
                                            class="accordion-button px-0 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseOne"
                                        >
                                            Accordion Item #1
                                        </button>
                                    </h5>
                                    <div
                                        id="flush-collapseOne"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body">
                                            Placeholder
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5
                                        class="accordion-header"
                                        id="flush-headingTwo"
                                    >
                                        <button
                                            class="accordion-button px-0 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseTwo"
                                        >
                                            Accordion Item #2
                                        </button>
                                    </h5>
                                    <div
                                        id="flush-collapseTwo"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body">
                                            Placeholder
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h5
                                        class="accordion-header"
                                        id="flush-headingThree"
                                    >
                                        <button
                                            class="accordion-button px-0 collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree"
                                            aria-expanded="false"
                                            aria-controls="flush-collapseThree"
                                        >
                                            Accordion Item #3
                                        </button>
                                    </h5>
                                    <div
                                        id="flush-collapseThree"
                                        class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree"
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div class="accordion-body">
                                            Placeholder
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-md-12">
                <div
                    class="gallery-header d-flex justify-content-between align-items-center pb-0"
                >
                    <div>Operators</div>
                    <div
                        class="btn-group filter-item border-0 p-2"
                        role="group"
                    >
                        <button style="" class="btn btn-outline-light border-0">
                            Total:{{ users.length }}
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-light border-0 p-0 pl-3 mr-1 d-block d-sm-block d-md-block d-lg-none"
                            @click="handleOpenFilter"
                        >
                            <span
                                id="open-filter-trigger"
                                class="fa-solid fa-filter"
                            ></span>
                        </button>
                    </div>
                </div>
                <div
                    class="filter-header border-bottom-0 overflow-x-scroll d-flex align-items-center"
                >
                    <div class="btn-group me-2" role="group">
                        <button class="btn btn-outline-light border-0 p-2">
                            Filters
                        </button>
                        <button class="btn btn-outline-light border-0 p-0">
                            <span
                                class="ml-2 font-monospace filter-count text-black"
                                >10</span
                            >
                        </button>
                    </div>

                    <div
                        class="btn-group filter-item me-2 border px-2"
                        role="group"
                    >
                        <button
                            style=""
                            class="btn btn-outline-light border-0 p-2"
                        >
                            Notifications
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-light border-0 p-0"
                        >
                            <span class="fa fa-xmark"></span>
                        </button>
                    </div>
                    <div
                        class="btn-group filter-item me-2 border px-2"
                        role="group"
                    >
                        <button
                            style=""
                            class="btn btn-outline-light border-0 p-2"
                        >
                            Notifications
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-light border-0 p-0"
                        >
                            <span class="fa fa-xmark"></span>
                        </button>
                    </div>
                    <div
                        class="btn-group filter-item me-2 border px-2"
                        role="group"
                    >
                        <button
                            style=""
                            class="btn btn-outline-light border-0 p-2"
                        >
                            Notifications
                        </button>
                        <button
                            type="button"
                            class="btn btn-outline-light border-0 p-0"
                        >
                            <span class="fa fa-xmark"></span>
                        </button>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col" v-for="user in users" :key="user.id">
                        <div
                            class="card rounded-0 item"
                            data-bs-toggle="modal"
                            data-bs-target="#itemModel"
                        >
                            <img
                                class="card-img-top item-image"
                                :src="user.metadata.image"
                                alt="Card image cap"
                            />
                            <div class="p-2 text-center">
                                <p class="item-name mb-0">
                                    {{ user.metadata.name }}
                                </p>
                                <!-- <p class="item-no mb-0">No. 563</p> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal -->
                <div
                    class="modal fade"
                    id="itemModel"
                    tabindex="-1"
                    aria-labelledby="itemDetail"
                    aria-hidden="true"
                >
                    <div
                        class="modal-dialog modal-dialog-centered"
                        style="max-width: 80vw"
                    >
                        <div class="modal-content position-relative">
                            <button
                                type="button"
                                class="btn-close d-lg-none d-md-none d-sm-block position-absolute top-0 end-0"
                                style="z-index: 5"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            <div class="modal-body row g-0 p-0">
                                <div class="col-lg-6 col-md-6" style="">
                                    <img
                                        class=""
                                        style="width: 100%"
                                        src="https://i.picsum.photos/id/77/200/200.jpg?hmac=RaFJkrixMn3dR7INSPWcmjC7HCxmggmF5mTlMpyEHsQ"
                                        alt="Card image cap"
                                    />
                                </div>
                                <div class="col-lg-6 col-md-6 row g-0 p-4">
                                    <div class="">
                                        <div class="title p-3 bg-dark rounded">
                                            <p class="item-name mb-0">
                                                Test Item
                                            </p>
                                            <p class="item-no mb-0">No. 2258</p>
                                        </div>
                                    </div>
                                    <div
                                        class="row g-2 m-0 p-0 d-lg-flex d-md-none d-none"
                                    >
                                        <div class="col-lg-6">
                                            <div
                                                class="attributes bg-dark align-items-center rounded mr-4"
                                            >
                                                <div class="attribute-image">
                                                    <div
                                                        class="fab fa-discord text-white attribute-image"
                                                    ></div>
                                                </div>
                                                <div class="attribute-detail">
                                                    <p
                                                        class="attribute-key m-0"
                                                    >
                                                        Type:
                                                    </p>
                                                    <p
                                                        class="attribute-value m-0 text-xs font-600"
                                                    >
                                                        Blue
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div
                                                class="attributes bg-dark align-items-center rounded mr-4"
                                            >
                                                <div class="attribute-image">
                                                    <div
                                                        class="fab fa-discord text-white attribute-image"
                                                    ></div>
                                                </div>
                                                <div class="attribute-detail">
                                                    <p
                                                        class="attribute-key m-0"
                                                    >
                                                        Type:
                                                    </p>
                                                    <p
                                                        class="attribute-value m-0 text-xs font-600"
                                                    >
                                                        Blue
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div
                                                class="attributes bg-dark align-items-center rounded mr-4"
                                            >
                                                <div class="attribute-image">
                                                    <div
                                                        class="fab fa-discord text-white attribute-image"
                                                    ></div>
                                                </div>
                                                <div class="attribute-detail">
                                                    <p
                                                        class="attribute-key m-0"
                                                    >
                                                        Type:
                                                    </p>
                                                    <p
                                                        class="attribute-value m-0 text-xs font-600"
                                                    >
                                                        Blue
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Carousel
                                        class="col-12 my-1 d-lg-none d-md-block"
                                    >
                                        <Slide
                                            v-for="slide in 3"
                                            :key="`item_${slide}`"
                                        >
                                            <div
                                                class="carousel__item attributes bg-dark align-items-center rounded"
                                            >
                                                <div class="attribute-image">
                                                    <div
                                                        class="fab fa-discord text-white attribute-image"
                                                    ></div>
                                                </div>
                                                <div class="attribute-detail">
                                                    <p
                                                        class="attribute-key m-0"
                                                    >
                                                        Type:
                                                    </p>
                                                    <p
                                                        class="attribute-value m-0 text-xs font-600"
                                                    >
                                                        Blue
                                                    </p>
                                                </div>
                                            </div>
                                        </Slide>

                                        <template #addons>
                                            <Pagination />
                                        </template>
                                    </Carousel>
                                    <div class="col-12 row g-0 m-0 mt-1 p-0">
                                        <div class="col-lg-8 col-12 px-lg-2">
                                            <div
                                                class="bg-dark rounded p-2 text-center"
                                            >
                                                <p class="item-name mb-0">
                                                    Test Item
                                                </p>
                                                <p class="item-no mb-0">
                                                    No. 563
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            class="mb-0 col-lg-4 col-12 mt-lg-0 mt-1 px-lg-2"
                                        >
                                            <div
                                                class="bg-dark rounded p-2 text-center"
                                            >
                                                <p class="item-name mb-0">
                                                    Test Item
                                                </p>
                                                <p class="item-no mb-0">
                                                    No. 563
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="modal-backdrop fade show"></div> -->
</template>

<script>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import data from "../assets/Stoned_Ape_Crew.json";

export default {
    name: "GalleryPage",
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            users: data,
            openFilter: false,
        };
    },
    methods: {
        handleOpenFilter() {
            const menu = document.getElementById("open-menu-trigger");
            const header = document.getElementById("header");
            header.classList.add("d-none");
            menu.classList.add("d-none");
            document.body.classList.add("no-scroll");
            this.openFilter = true;
        },
        handleCloseFilter() {
            const menu = document.getElementById("open-menu-trigger");
            const header = document.getElementById("header");
            header.classList.remove("d-none");
            menu.classList.remove("d-none");
            document.body.classList.remove("no-scroll");
            this.openFilter = false;
        },
    },
};
</script>

<style>
.carousel__item {
    width: 90%;
    cursor: pointer;
}

.carousel__slide {
    padding: 10px 0;
}
.carousel__slide::marker {
    display: none;
}
.carousel__pagination {
    padding-left: 0;
}
.carousel__pagination-button::after {
    height: 1px;
}
</style>
