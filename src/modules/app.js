import { DonateForm } from "./donate-form.js";
import { DonateList } from "./donate-list.js";
import { calculateSumOfNumbers as sumNumbers } from "../core/utils/index.js";

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
];

export default class App {
    #donateForm
    #donateList

    constructor() {
        this.state = {
            donates: mockDonates,
            totalAmount: sumNumbers(mockDonates.amount), // возможно неправильно передал значения Amount
        };

        this.#donateForm = new DonateForm(this.state.totalAmount);
        this.#donateList = new DonateList(this.state.donates);
    };

    run() {
        const donateFormHtml = this.#donateForm.render();
        const donateListHtml = this.#donateList.render();
        document.body.append(donateFormHtml, donateListHtml);
    };

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate);
        this.state.totalAmount = this.state.totalAmount + newDonate.amount;
        this.#donateList.updateDonates(this.state.donates);
        this.#donateForm.updateTotalAmount(newDonate.amount);
    }
}