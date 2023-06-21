<template>
    <main class="main">
        <Cards 
            class="cards"
    
            :user_name="user_name"
            :card_num="card_num"
            :isValidCardNumber="isValidCardNumber" 
            :isValidCardNumberLength="isValidCardNumberLength"
            :month="month"
            :year="year"
            :cvc="cvc" />
    
        <div class="holder">
            <InputField
                :class="[!isDone ? 'show' : 'hidden']"
    
                :isValidName="isValidName"
                @check-user-name="checkUserName"
                
                :isValidCardNumber="isValidCardNumber"
                :isValidCardNumberLength="isValidCardNumberLength"
                @check-card-number="checkCardNumer"
                
                :isValidMonth="isValidMonth"
                :isValidYear="isValidYear"
                :isWithinMonth="isWithinMonth"
                :isWithinYear="isWithinYear"
                @check-exp-date="checkExpDate"
        
                :isValidCvc="isValidCvc"
                :isValidCvcLength="isValidCvcLength"
                @check-cvc="checkCvc"
                />
            
            
            <ThankyouPage
            :class="[isDone ? 'show' : 'hidden', 'thankyou']" />
        </div>
    </main>
</template>

<script>
    import Cards from './components/Cards.vue';
    import InputField from './components/InputField.vue';
    import ThankyouPage from './components/ThankyouPage.vue';

    export default {
    name: "App",
    components: { 
        Cards,
        InputField,
        ThankyouPage,
    },
    data: function() {
        return {
            user_name: '',
            card_num: '',
            month: '',
            year: '',
            cvc: '',
            isValidName: true,
            isValidCardNumber: true,
            isValidCardNumberLength: true,
            isValidMonth: true,
            isValidYear: true,
            isWithinMonth: true,
            isWithinYear: true,
            isValidCvc: true,
            isValidCvcLength: true,

            isDone: false,
        }
    },
    methods: {
        checkUserName(user_name) {
            if(!user_name) {
                this.isValidName = false
            } else {
                this.user_name = user_name
                this.isValidName = true
            }

            this.checkIfDone()
        },

        checkCardNumer(card_num) {
            let result = card_num.replace(/\s+/g, "");
            // console.log(result, result.length)

            if(/^\d+$/.test(card_num)) {
                this.isValidCardNumber = false
                this.isValidCardNumberLength = true
            } else {
                this.isValidCardNumber = true
            }
            
            if(result.length != 16) {
                this.isValidCardNumber = true
                this.isValidCardNumberLength = false
            } else {
                this.isValidCardNumberLength = true
            }

            if(this.isValidCardNumber && this.isValidCardNumberLength) {
                this.card_num = card_num
            }

            this.checkIfDone()
        },

        checkExpDate(mm, yy) {
            const date = new Date().getFullYear()
            const year = date.toString().slice(-2)
            
            if(!mm) {
                this.isValidMonth = false
            } else {
                this.isValidMonth = true
            }
            if(!yy) {
                this.isValidYear = false
            } else {
                this.isValidYear = true
            }

            if(mm > 12) {
                this.isWithinMonth = false
            } else {
                this.isWithinMonth = true
            }
            if(yy > year) {
                this.isWithinYear = false
            } else {
                this.isWithinYear = true
            }

            this.month = mm
            this.year = yy
            this.checkIfDone()
        },

        checkCvc(cvc) {
            if(!cvc) {
                this.isValidCvc = false
            } else {
                this.isValidCvc = true
            }

            if(cvc.length != 3) {
                this.isValidCvcLength = false
            } else {
                this.isValidCvcLength = true
            }

            this.cvc = cvc
            this.checkIfDone()
        },

        checkIfDone() {
            if(this.isValidName && this.isValidCardNumber && this.isValidCardNumberLength && this.isValidMonth && this.isValidYear && this.isValidCvc && this.isValidCvcLength) {
                this.isDone = true
                console.log(this.isDone)
            } else {
                this.isDone = false
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    @use './assets/scss/utilities/' as *;

    .main {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        gap: clampf(120, 800, 150);

        @include breakpointMin(medium-screen) {
            grid-template-columns: repeat(2, 1fr);
            gap: rem(64);
        }
    }

    .holder {
        margin-block: auto;
        position: relative;
        overflow: hidden;
        transition: all 300ms ease-in-out;
    }

    .show {
        position: unset;
    }
    
    .hidden {
        position: absolute;
        width: 100%;
        top: 0;
        right: -100%;
    }

    .cards {
        margin-block: auto;
    }
</style>