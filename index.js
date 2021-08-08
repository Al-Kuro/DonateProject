import './index.css';
import App from './src/modules/app.js';

const app = new App();
app.run();

const $formDonateDom = document.querySelector('.donate-form'); // возможно обработчик нужно перенести в другой js файл;
$formDonateDom.addEventListener('submit', (event) => {
    const { target } = event; // хз нужен ли таргет в данном случае;

    if (target) {
        const $inputDonateFormDom = document.querySelector('.donate-form__donate-input');
        const newDonate = {
            amount: $inputDonateFormDom.value,
            date: new Date(),
        };

        app.createNewDonate(newDonate);

        $inputDonateFormDom.value = '';
    }
});