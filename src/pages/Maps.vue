<template>
    <div class="db-wrapper">
        <h1 class="db-title">
            Location
        </h1>
        <div class="db-bride">
            <GoogleMap />
        </div>
    </div>
</template>

<script>
import GoogleMap from './../components/GoogleMap.vue'
export default {
    components: {
        GoogleMap
    }
}
</script>
<style>
.db-wrapper {
    width: 100%;
    padding-bottom: 70px;
}
img.db-logo {
  width: 100%;
}
h1.db-title {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: 3px;
    text-align: center;
    font-family: 'Abril Fatface', cursive;
}
.db-bride {
    border-radius: 4px;
    margin: 8px auto;
    width: calc(100% - 60px);
    padding: 16px;
    background: #e5e5e5;
    display: block;
}
</style>