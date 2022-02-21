<template>
    <div class="db-wrapper">
        <h1 class="db-title">
            Location
        </h1>
        <div class="db-bride">
            <div class="db-event__title">
                Gedung YPI AL-BAROKAH
            </div>
            <div class="db-event__detail">
                Jalan Raya Jatimakmur No.22, Pondok Gede, Bekasi, 17413
            </div>
            <div class="mapouter"><div class="gmap_canvas"><iframe height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=-6.2833083,106.9301443&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            <a target="_blank" href="https://www.google.com/maps?saddr=My+Location&daddr=-6.2833083,106.9301443" class="db-maps__btn">Dapatkan Arah</a>
        </div>
    </div>
</template>

<script>
export default {
    components: {
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
#gmap_canvas {
    width: 100%;
}
.mapouter{position:relative;text-align:right;height:300px;width:100%;}
.gmap_canvas {overflow:hidden;background:none!important;height:300px;width:100%;}
.db-event__title {
    font-family: 'Poppins', cursive;
    color: #313F23;
    font-weight: 600;
    font-size: 20px;
}
.db-event__detail {
    font-family: 'Poppins', cursive;
    color: #506538;
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.db-maps__btn {
    display: block;
    margin-top: 10px;
    text-decoration: none;
    color: #fff;
    background: #798776;
    padding: 8px 16px;
    border-radius: 4px;
}
</style>