<template>
    <div class="db-wrapper">
        <h1 class="db-title">
            Events
        </h1>
        <div class="db-bride-2">
            <!-- <img src="" alt="" class="db-bride-img"> -->
            <div class="db-bride__name">
                Rochayati Febriarhamadini S.Sos. M.Si.
            </div>
            <div class="db-bride__detail">
                Putri ke 2 dari pasangan Bpk Eddy Suryadi S.E. M.M. dan Ibu Siti Barkah S.Ag.
            </div>
            <img src="@/assets/img_2.png" alt="" class="db-bride-img">
            <div class="db-bride__name">
                Dwi Prabowo S.T. M.Si.
            </div>
            <div class="db-bride__detail">
                Putra ke 2 dari pasangan Almarhum Bpk AKBP H. Suprantoro dan Ibu Hj. Lilis
            </div>
        </div>
        <div class="db-bar"></div>
        <div class="db-event">
            <!-- <img src="" alt="" class="db-bride-img"> -->
            <div class="db-event__title">
                AKAD NIKAH
            </div>
            <div class="db-event__detail">
                Pukul 08:00 s/d selesai
            </div>
        </div>
        <div class="db-event">
            <!-- <img src="" alt="" class="db-bride-img"> -->
            <div class="db-event__title">
                RESEPSI
            </div>
            <div class="db-event__detail">
                Pukul 11:00 s/d 18:00
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Poppins&display=swap');
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
.db-bride-2 {
    border-radius: 4px;
    margin: 8px auto;
    width: calc(100% - 32px);
    padding: 16px 0px;
    background: #e5e5e5;
    display: block;
}
.db-bride__name {
    font-family: 'Abril Fatface', cursive;
    color: #313F23;
    font-size: 16px;
    margin-bottom: 5px;
    padding: 0px 16px;
}
.db-bride__detail {
    font-family: 'Poppins', cursive;
    color: #506538;
    font-size: 11px;
    padding: 0px 16px;
}
.db-event {
    border-radius: 0px;
    border: solid 5px #CBC2B0;
    margin: 8px auto;
    width: calc(100% - 70px);
    padding: 16px;
    background: #e5e5e5;
    display: block;
    margin-top: 16px;
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
    font-size: 16px;
}
.db-bar {
    width: calc(100% - 32px);
    margin: 20px auto;
    height: 1px;
    background: #FFF;
}
.db-bride-img {
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>