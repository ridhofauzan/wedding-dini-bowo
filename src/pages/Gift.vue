<template>
    <div class="db-wrapper">
        <h1 class="db-title">
            Gift
        </h1>
        <div class="db-bride">
            <div class="db-event__title">
                Rochayati Febriarhamadini
            </div>
            <div class="db-event__detail">
                12300000000000
            </div>
            <a @click="copyToClipBoard(rekDini)" href="#" class="db-maps__btn">Salin Nomor Rekening</a>
            <div class="db-bar-2"></div>
            <div class="db-event__title">
                Dwi Prabowo
            </div>
            <div class="db-event__detail">
                12300000000000
            </div>
            <a @click="copyToClipBoard(rekBowo)" href="#" class="db-maps__btn">Salin Nomor Rekening</a>
        </div>
    </div>
</template>

<script>
// import VueClipboards from './../components/VueClipboards.vue'
import { ref } from 'vue'
export default {
    setup() {
        const rekDini = ref('123000000')
        const rekBowo = ref('123000000')

        const copyToClipBoard = (params) => {
            navigator.clipboard.writeText(params).then(function() {
                console.log('Copying to clipboard was successful!');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        }

        return { rekDini, rekBowo, copyToClipBoard }
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
.db-bar-2 {
    width: 100%;
    height: 1px;
    background: #313F23;
    margin: 20px 0px;
}
</style>