<template>
    <Cards 
        :user_name="user_name"
        :card_num="card_num"
        :isValidCardNumber="isValidCardNumber" 
        :isValidCardNumberLength="isValidCardNumberLength"
        :month="month"
        :year="year"
        :cvc="cvc" />

    <InputField
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
    class="thankyou" />
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
            isValidName: true,
            card_num: '',
            month: '',
            year: '',
            cvc: '',
            isValidCardNumber: true,
            isValidCardNumberLength: true,
            isValidMonth: true,
            isValidYear: true,
            isWithinMonth: true,
            isWithinYear: true,
            isValidCvc: true,
            isValidCvcLength: true,
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
        },

        checkCvc(cvc) {
            console.log(cvc.length)
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
        }
    },
}
</script>

<style lang="scss" scoped>
    
</style>