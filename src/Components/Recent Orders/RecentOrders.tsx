import Card from "../Card (shell)/Card";
import "./RecentOrders.css";


interface Order {
    id: number;
    client: string;
    amount: string;
    status: string;
}

interface RecentOrdersProp {
    orders: Order[];
}

function RecentOrders({ orders }: RecentOrdersProp) {
    return (
        <Card title="Recent orders">
                  <table className="orders-table">
                      <thead>
                      <tr>
                          <th>Order</th>
                          <th>Client</th>
                          <th>Status</th>
                          <th>Amount</th>
                      </tr>
                      </thead>
                      <tbody>
                      {orders.map((o) => (
                          <tr key={o.id}>
                              <td>#{o.id}</td>
                              <td>{o.client}</td>
                              <td><span className={`order-status s-${o.status}`}>{o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span></td>
                              <td>{o.amount}</td>
                          </tr>
                      ))}
                      </tbody>
                  </table>
        </Card>

    )
}

export default RecentOrders;