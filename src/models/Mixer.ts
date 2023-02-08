export default class Mixer {
    private numberRange = new Array;
    private winningNumbers = new Array;
    private playerTickets = new Array;

    run() {
        this.initPlayerTickets();
        this.drawTheNumbers();
        console.log(this.winningNumbers);
        console.log(this.playerTickets);

    }

    private initNumberRange() {
        const numberRange = new Array;
        for(let i = 1; i < 91; i++) {
            numberRange.push(i);
        }
        return numberRange;
    }

    private drawTheNumbers() {
        this.winningNumbers = this.setFiveNumbers();
    }

    private setFiveNumbers() {
        const ninetyNumbers = this.initNumberRange();
        const fiveNumbers = [];
        for (let i = 0; i < 5; i++) {
            const randomIndex = Math.floor(Math.random() * ninetyNumbers.length);
            const drawnNumber = ninetyNumbers[randomIndex];
            ninetyNumbers.splice(randomIndex, 1);
            fiveNumbers.push(drawnNumber);
        }
        return fiveNumbers;
    }

    private initPlayerTickets() {
        for (let player = 0; player < 4992576; player++) {
            this.playerTickets.push(this.setFiveNumbers());
        }
    }
}
