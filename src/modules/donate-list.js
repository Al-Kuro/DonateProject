import { settings as sets } from "../core/constants/settings";
import { getFormatedDate as FormatedDate } from "../core/utils/index.js";

export class DonateList {
    #donates

    constructor(donates) {
        this.#donates = donates; 
    };

    updateDonates(updateDonates) {
        const $donatesContainerListDom = document.querySelector('.donates-container');
        $donatesContainerListDom.remove();
        
        const $donatesContainer = document.createElement('div');
        $donatesContainer.className = 'donates-container';

        const $donatesTitle = document.createElement('h2');
        $donatesTitle.className = 'donates-container__title';

        const $donatesContainerList = document.createElement('div');
        $donatesContainerList.className = 'donates-container__donates';

        updateDonates.forEach((donate) => {
            const $donateItem = document.createElement('div');
            $donateItem.className = 'donate-item';
            $donateItem.innerHTML = `${FormatedDate(donate.date)} - <b>${donate.amount}${sets.currency}</b>`;
            $donatesContainerList.append($donateItem);
        });

        $donatesContainer.append($donatesTitle, $donatesContainerList);
        document.body.append($donatesContainer);

    };

    render() {
        const $donatesContainer = document.createElement('div');
        $donatesContainer.className = 'donates-container';

        const $donatesTitle = document.createElement('h2');
        $donatesTitle.className = 'donates-container__title';

        const $donatesContainerList = document.createElement('div');
        $donatesContainerList.className = 'donates-container__donates';

        this.#donates.forEach((donate) => {
            const $donateItem = document.createElement('div');
            $donateItem.className = 'donate-item';
            $donateItem.innerHTML = `${FormatedDate(donate.date)} - <b>${donate.amount}${sets.currency}</b>`;
            $donatesContainerList.append($donateItem);
        });

        $donatesContainer.append($donatesTitle, $donatesContainerList);

        return $donatesContainer;
    };
}