import App from "./app.js";
import { settings as sets } from "../core/constants/settings.js";

export class DonateForm {
    #$formDonate
    
    constructor(totalAmount, createNewDonate) {
        this.totalAmount = totalAmount;
        this.createNewDonate = createNewDonate;
    };

    updateTotalAmount(newAmount = 0) {
        const $totalAmountDom = document.querySelector('#total-amount');
        $totalAmountDom.textContent = `${newAmount}${sets.currency}`;
    }

    onCreateNewDonateSubmit(event) {
        event.preventDefault();
        const newDonateValue = Number(event.target.amount.value);
    
        if (newDonateValue && this.createNewDonate) {
            const newDonate = {
                amount: newDonateValue,
                date: new Date(),
            };
    
            this.createNewDonate(newDonate);
            event.target.amount.value = '';
        };
    }

    render() {
        this.#$formDonate = document.createElement('form');
        this.#$formDonate.className = 'donate-form';

        const $totalAmount = document.createElement('h1');
        $totalAmount.id = 'total-amount';
        $totalAmount.textContent = `${this.totalAmount}${sets.currency}`;

        const $labelInputDonate = document.createElement('label');
        $labelInputDonate.className = 'donate-form__input-label';
        $labelInputDonate.textContent = `Введите сумму в ${sets.currency}`;

        const $inputDonateForm = document.createElement('input');
        $inputDonateForm.className = 'donate-form__donate-input';
        $inputDonateForm.name = 'amount';
        $inputDonateForm.type = 'number';
        $inputDonateForm.max = '100';
        $inputDonateForm.min = '0';
        $inputDonateForm.required = '';

        const $buttonDonateForm = document.createElement('button');
        $buttonDonateForm.className = 'donate-form__submit-button';
        $buttonDonateForm.type = 'submit';
        $buttonDonateForm.textContent = 'Отправить';

        $labelInputDonate.append($inputDonateForm);
        this.#$formDonate.append($totalAmount, $labelInputDonate, $buttonDonateForm);

        this.#$formDonate.addEventListener('submit', this.onCreateNewDonateSubmit.bind(this));

        return this.#$formDonate;
    };
    
}