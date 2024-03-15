import React from 'react'

interface Expense {
    id:number;
    description:string;
    amount: number;
    category: string;
}
interface Props {
    expenses: Expense[]
}
export const ExpenseList = () => {
  return (
    <>
        <div>ExpenseList</div>
        <table className="table table-bordered">
            <thead>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </thead>
        </table>
    </>
  )
}
