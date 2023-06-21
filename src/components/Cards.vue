<template>
    <div class="container">
        <div class="front-container">
            <div class="front card">
                <img :src="front" alt="front of the card" class="card-front">
    
                <!-- CARD INFORMATION -->
                <img :src="logo" alt="logo" class="logo info">
                <div class="card-number info">
                    <p v-if="card_num == ''">0000 0000 0000 0000</p>
                    <p v-else>{{ card_num }}</p>
                </div>
                <div class="user-name info">
                    <p v-if="user_name == ''">Jane Appleseed</p>
                    <p v-else>{{ user_name }}</p>
                </div>
                <div class="exp-date info">
                    <p v-if="month == '' || year == ''">00/00</p>
                    <p v-else>{{ month }}/{{ year }}</p>
                </div>
            </div>
        </div>

        <div class="back card">
            <div class="cvc">
                <p v-if="cvc == ''">000</p>
                <p v-else>{{ cvc }}</p>
            </div>
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
            card_num: String,
            isValidCardNumber: Boolean,
            isValidCardNumberLength: Boolean,
            month: String,
            year: String,
            cvc: String,
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

    .container {
        position: relative;
    }

    .front-container {
        position: absolute;
        z-index: 10;
        top: 57%;

        @include breakpointMin(medium-screen) {
            position: unset;
            margin-bottom: rem(32);
        }
    }

    .card {
        width: clampf(280, 1050, 420);
    }

    .hide {
        display: none;
    }

    .front, .back {
        position: relative;
        color: var(--clr-neutral-white);
    }
    
    .back {
        margin-inline-start: auto;
    }
    
    .cvc {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12%;
        font-size: clampf(12, 800, 16);
    }

    .info {
        position: absolute;
    }

    .logo {
        top: 10%;
        left: 5%;
        width: clampf(60, 800, 85);
    }

    .card-number {
        left: 5%;
        top: 55%;
        font-size: clampf(20, 1050, 32);
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