import TransactionItem from "@/components/transaction-item"
export default async function TransactionList() {
  const response = await fetch(
    'http://localhost:3002/transactions'
  )
  const transactions = await response.json()
  
  return (<section className="space-y-4">
    {transactions.map((transaction:any) => <div key={transaction.id}>
      <TransactionItem type={transaction.type} category={transaction.category} description={transaction.description} amount={transaction.amount} />
    </div>)}
  </section>)
}