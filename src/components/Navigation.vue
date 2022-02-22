<template>
    <div class="db-nav">
        <router-link to="/" class="db-nav-link">
            <RemixIcon icon="home" />
            <div class="db-nav-link__text">Home</div>
        </router-link>
        <router-link to="/event" class="db-nav-link">
            <RemixIcon icon="calendar-event" />
            <div class="db-nav-link__text">Event</div>
        </router-link>
        <router-link to="/maps" class="db-nav-link">
            <RemixIcon icon="map-pin" />
            <div class="db-nav-link__text">Location</div>
        </router-link>
    </div>
</template>

<script>
import RemixIcon from './RemixIcon.vue'
export default {
    components: {
        RemixIcon
    }
}
</script>
<style>
.remixicon {
    fill: #798776;
    width: 30px;
}
.db-nav {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fafafa;
}
.db-nav-link {
    width: calc(33% - 32px);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
}
.router-link-active.db-nav-link {
    box-shadow: inset 0 -5px 0 #798776;
}
.db-nav-link__text {
    text-decoration: none;
    color: #798776;
    font-size: 12px;
}
</style>