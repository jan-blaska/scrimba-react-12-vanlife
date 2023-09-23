import incomeGraph from "/income-graph.png" 

export default function Income() {
    
    const transactionsArray = [
            {
                id: 1,
                price: 720,
                date: "19/09/23"
            },
            {
                id: 2,
                price: 560,
                date: "07/09/23"
            },
            {
                id: 3,
                price: 720,
                date: "26/08/23"
            }
    ]

    const transactionElements = transactionsArray.map(transaction => {
        return (
            <div className="income-transaction" key={transaction.id}>
                <h2 className="header-36">${transaction.price}</h2>
                <h4 className="header-20">{transaction.date}</h4>

            </div>
        )
    })
    
    return (
        <div className="income">
            <h2 className="header-36">Income</h2>
            <p className="paragraph grey">Last <span className="bold">30 days</span></p>
            <h1 className="header-48">$2,260</h1>
            <img src={incomeGraph} alt="income graph" />
            <div className="income-transactions-header">
                <h3 className="header-24">Your transactions ({transactionsArray.length})</h3>
                <p className="paragraph grey">Last <span className="bold">30 days</span></p>
            </div>
            <div className="income-transactions-grid">
                {transactionElements}
            </div>
        </div>
    )
}