import App from "./app.js";
import { settings as sets } from "../core/constants/settings.js";

export class DonateForm {
    #$form

    constructor(totalAmount) {
        this.#$form = document.createElement('form');
        this.#$form.className = 'donate-form';
        this.totalAmount = totalAmount;

        //this.createNewDonate = createNewDonate; // (передать в конструктор, как параметр, Ошибка в чем то
    };

    /*createElementDom(name, attr, attrValue, textContentValue) {
        const element = document.createElement(name);
        element.attr = attrValue;
        element.textContent = textContentValue;
        
        return element;
    };*/

    updateTotalAmount(newAmount = 0) {
        const $totalAmountDom = document.querySelector('#total-amount');
        $totalAmountDom.textContent = `${this.totalAmount + newAmount}${sets.currency}`;
    }

    render() {
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

        $labelInputDonate.append($inputDonateForm);
        this.#$form.append($totalAmount, $labelInputDonate, $buttonDonateForm);

        return this.#$form;
    };
}