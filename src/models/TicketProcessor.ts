export default class TicketProcessor {
    public processWinnerTickets(winningNumbers: any[], playerTickets: any[]) {
        const resultArray = new Array(new Array,new Array,new Array,new Array);


        for(let pTicket of playerTickets) {
            let hits = 0;
            for(let wNum of winningNumbers) {
                if (pTicket.includes(wNum)) {
                    hits++
                }
            }
            if(1 < hits) {
                resultArray[hits-2].push(pTicket);
            }

            if(4 < hits) {
                console.log(hits);
            }
        }
        return resultArray;
    }
}
