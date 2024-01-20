const users = [
    {
        name: 'John Doe',
        id: "us1",
        joined: "2015",
        email: "john@gmail.com",
        password: "john1122",
        country: "US",
        postalCode: "56339",
    },
    {
        name: 'Marry Jane',
        id: "jp1",
        joined: "2016",
        email: "jane@gmail.com",
        password: "jane1122",
        country: "Japan",
        postalCode: "43556",
    },
    {
        name: 'John Smith',
        id: "us2",
        joined: "2018",
        email: "johnsmith@gmail.com",
        password: "jSmith1122",
        country: "US",
        postalCode: "59830",
    },
    {
        name: 'Alice Bob',
        id: "us3",
        joined: "2015",
        email: "aliceBob@gmail.com",
        password: "aliceBob11",
        country: "US",
        postalCode: "56339",
    },
]


const transactions = [
    {
        transactionId: "XX232324265",
        userId: "us1",
        amount: 50000,
        currency: "USD",
        paymentMethod: "Credit Card",
        paymentType: "Funds",
        date: "2023-10-01T11:11:14.000Za"
    },
    {
        transactionId: "XX2542324265",
        userId: "us1",
        amount: 300000,
        currency: "USD",
        paymentMethod: "Mada Card",
        paymentType: "Shopping",
        date: "2022-8-01T11:11:14.000Zb"
    },
    {
        transactionId: "XX2327624265",
        userId: "jp1",
        amount: 160000,
        currency: "EUR",
        paymentMethod: "Apple Pay",
        paymentType: "Other",
        date: "2023-10-01T11:11:14.000Zc"
    },
    {
        userId: "us2",
        amount: 120000,
        currency: "USD",
        transactionId: "XX236824265",
        paymentMethod: "ATM",
        date: "2023-10-01T11:11:14.000Z",
        paymentType: "Funds",
    },
]

const transactionId = {
    transactionId: "XX236824265",
    paymentMethod: "ATM",
    date: "2023-10-01T11:11:14.000Z",
}
//Transaction object and transaction object as perimeter
const filterTransaction = (transactions, transactionId) => {
    const alert = "transaction not found";
    // length of transaction array
    let length = transactions.length;
    //declaration of array properties of transaction object
    const transactionDate = transactionId["date"]
    const transactionPaymentMethod = transactionId["paymentMethod"]
    const transactionTransactionId = transactionId["transactionId"]
    // loop for rendering elements of array
    for (let j = 0; j < length; j++) {
        //&& check if all the condition is true
        if (transactions[j].date === transactionDate && transactions[j].paymentMethod === transactionPaymentMethod &&
            transactions[j].transactionId === transactionTransactionId) {
            return transactions[j]
        }
        // the following is for is we use single property inside the obj
        if (transactionDate && !transactionPaymentMethod && !transactionTransactionId) {
            if (transactions[j].date === transactionDate) {
                return transactions[j]
            }
        }
        if (transactionPaymentMethod && !transactionDate && !transactionTransactionId) {
            if (transactions[j].paymentMethod === transactionPaymentMethod) {
                return transactions[j]
            }
        }
        if (transactionTransactionId && !transactionDate && !transactionPaymentMethod) {
            if (transactions[j].transactionId === transactionTransactionId) {
                return transactions[j]
            }
        }
    }
    return alert
}
// reuseable function
console.log(filterTransaction(transactions, transactionId));
