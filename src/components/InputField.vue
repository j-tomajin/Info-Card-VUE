<template>
    <form class="form" @submit="submitForm">
        <!-- CARDHOLDER NAME -->
        <div class="input-field display">
            <label for="name" class="label-title">CARDHOLDER NAME</label>
            <input 
                type="text" 
                v-model="name"
                :class="[isValidName ? '' : 'error', 'input-default']"
                id="name"
                placeholder="e.g Jane Appleseed" 
            />
            <p v-if="!isValidName" class="invalid">Can't be blank</p>
        </div>

        <!-- CARD NUMBER -->
        <div class="input-field display">
            <label for="card-number" class="label-title">CARD NUMBER</label>
            <input 
                type="text" 
                v-model="card_num"
                :class="[isValidCardNumber ? '' : 'error', 'input-default', isValidCardNumberLength ? '' : 'error', 'input-default']"
                id="card-number"
                @keydown="separateInput"
                placeholder="e.g 1234 5678 9123 000"
            />
            <p v-if="!isValidCardNumber" class="invalid">Wrong format, numbers only</p>
            <p v-if="!isValidCardNumberLength" class="invalid">Must be 16 characters</p>
        </div>

        <!-- EXP-DATE && CVC -->
        <div class="input-field-2">
            <div class="exp-date">
                <label class="label-title">EXP. DATE (MM/YY)</label>
                <div class="inputs">
                    <input 
                        type="text" 
                        v-model="mm"
                        :class="[isWithinMonth ? '' : 'error', 'input-default', isValidMonth ? '' : 'error', 'input-default']"
                        placeholder="MM" 
                    />
                    <input 
                        type="text" 
                        v-model="yy"
                        :class="[isWithinYear ? '' : 'error', 'input-default', isValidYear ? '' : 'error', 'input-default']"
                        placeholder="YY" 
                    />
                </div>
                <p class="invalid">
                    <span v-if="!isValidMonth || !isValidYear">Can't be blank</span>
                    <span v-else-if="!isWithinMonth || !isWithinYear">Must be valid date</span>
                </p>
            </div>

            <div class="cvc-field display">
                <label class="label-title">CVC</label>
                <input 
                    type="text"
                    v-model="cvc"
                    :class="[isValidCvc ? '' : 'error', 'input-default', isValidCvcLength ? '' : 'error', 'input-default']"
                    placeholder="e.g 123"
                >

                <p class="invalid">
                    <span v-if="!isValidCvc">Can't be blank</span>
                    <span v-else-if="!isValidCvcLength">Must be 3 characters</span>
                </p>
            </div>
        </div>

        <input type="submit" class="sbm-btn" value="Confirm" />
    </form>
</template>

<script>

    export default {
        name: 'InputField',
        props: {
            isValidName: Boolean,
            isValidCardNumber: Boolean,
            isValidCardNumberLength: Boolean,
            isValidMonth: Boolean,
            isValidYear: Boolean,
            isWithinMonth: Boolean,
            isWithinYear: Boolean,
            isValidCvc: Boolean,
            isValidCvcLength: Boolean,
        },
        data: function() {
            return {
                name: '',
                card_num: '',
                mm: '',
                yy: '',
                cvc: '',
            }
        },
        methods: {
            separateInput() {
                if (this.card_num.length > 0) {

                    if (this.card_num.length % 4 == 0) {
                        this.card_num += "    ";
                    }
                }
            },
            
            submitForm(e) {
                e.preventDefault()
                
                this.$emit('check-user-name', this.name)
                this.$emit('check-card-number', this.card_num)
                this.$emit('check-exp-date', this.mm, this.yy)
                this.$emit('check-cvc', this.cvc)
            },
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/scss/utilities/' as *;

    .form {
        display: flex;
        flex-direction: column;
        gap: rem(16);
    }

    .display, .exp-date {
        display: flex;
        flex-direction: column;
        gap: rem(4);
    }

    .label-title {
        color: var(--clr-neutral-v-dark-violet);
    }

    .input-field-2 {
        display: flex;
        // align-items: center;
        gap: rem(16);
    }

    .inputs {
        display: flex;
        align-items: center;
        gap: rem(12);
    }

    .cvc {
        width: 100%;
    }

    .exp-date {
        width: min(100%, rem(350));

        input {
            width: min(100%, rem(150));
        }
    }

    .cvc-field {
        width: 50%;
        margin-inline-start: auto;
    }

    .input-default {
        border: 1px solid var(--clr-neutral-l-gray-violet);
        outline: 0;
        padding: rem(12);
        border-radius: rem(8);

        &:focus {
            border-color: var(--clr-primary-linear);
        }
    }

    .error {
        border-color: var(--clr-primary-red);
    }

    .invalid {
        color: var(--clr-primary-red);
    }

    .sbm-btn {
        background-color: var(--clr-neutral-v-dark-violet);
        color: var(--clr-neutral-l-gray-violet);
        padding-block: rem(12);
        border-radius: rem(8);
    }
</style>