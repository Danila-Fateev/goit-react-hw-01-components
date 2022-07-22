import styles from "./TransactionHistory.module.css"

export default function TransactionHistory({ props }) {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
                        <tbody>
                {props.map(el =>
                    <tr id={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>)}           
                 </tbody>
        </table>
    )
}