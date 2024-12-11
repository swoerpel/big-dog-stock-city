import { filter, interval, map, Observable, tap } from "rxjs";



function createId(): string{
    return Math.random().toString(36).substr(2, 9);
}

const customerNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

const preferredCustomers = ['Alice', 'David'];

interface Transaction{
    id: string;
    customerName: string;
    cost: number;
    timestamp: Date;
}

const transactions$: Observable<Transaction> = interval(1000).pipe(
    map(() => {
        return {
            id: createId(),
            customerName: customerNames[Math.floor(Math.random() * customerNames.length)],
            cost: Math.floor(Math.random() * 1000),
            timestamp: new Date()
        }
    })
)


const highValueTransactions$: Observable<Transaction> = transactions$.pipe(
    filter(transaction => transaction.cost > 500)
)

const preferredCustomerTransactions$: Observable<Transaction> = transactions$.pipe(
    filter(transaction => preferredCustomers.includes(transaction.customerName))
)


highValueTransactions$.subscribe(d => console.log('\n$$$',d))

preferredCustomerTransactions$.subscribe(d => console.log('\nPREF',d))

