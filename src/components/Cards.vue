<template>
    <div class="container">
        
        <div class="front card">
            <img :src="front" alt="front of the card" class="card-front">

            <!-- CARD INFORMATION -->
            <img :src="logo" alt="logo" class="logo info">
            <div class="card-number info">0000 0000 0000 0000</div>
            <div class="user-name info">
                <p v-if="user_name == ''">Jane Appleseed</p>
                <p v-else>{{ user_name }}</p>
            </div>
            <div class="exp-date info">00/00</div>
        </div>

        <div class="back card">
            <img :src="back" alt="back of the card" class="card-back">
        </div>
        
    </div>
</template>

<script>
    import logo from '../assets/images/card-logo.svg'
    import back from '../assets/images/bg-card-back.png'
    import front from '../assets/images/bg-card-front.png'

    export default {
        name: 'Cards',
        props: {
            user_name: String,
        },
        data: function() {
            return {
                logo: logo,
                back: back,
                front: front,
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/scss/utilities/' as *;
    .card {
        width: clampf(350, 800, 440);
    }

    .front {
        position: relative;
        color: var(--clr-neutral-white);
    }

    .back {
        margin-inline-start: auto;
    }

    .info {
        position: absolute;
    }

    .logo {
        top: 10%;
        left: 5%;
    }

    .card-number {
        left: 5%;
        top: 55%;
        font-size: clampf(24, 800, 32 );
    }

    .user-name {
        left: 5%;
        bottom: 10%;
    }

    .exp-date {
        right: 5%;
        bottom: 10%;
    }
</style>