import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ordersCss from "./Orders.module.css";
import ProductCard from "../../components/Product/ProductCard";
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";

function Orders() {
  const [{ user }] = useContext(DataContext); // Get the current user from global state
  const [orders, setOrders] = useState([]); // State to store fetched orders

  useEffect(() => {
    if (user) {
      // Reference to the 'orders' subcollection of the current user
      const ordersRef = collection(doc(collection(db, "users"), user.uid), "orders");

      // Create a query to order orders by 'created' field in descending order
      const q = query(ordersRef, orderBy("created", "desc"));

      // Listen for real-time updates from Firestore
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return () => unsubscribe(); // Cleanup listener on unmount
    } else {
      setOrders([]); // Clear orders if user is not logged in
    }
  }, [user]);

  return (
    <Layout>
      <section className={ordersCss.orders}>
        <div className={ordersCss.orders__container}>
          <h2>Your Orders</h2>

          {/* Display message if there are no orders */}
          {orders?.length === 0 && (
            <div className={ordersCss.orders__empty}>
              <p>You don't have orders yet.</p>
            </div>
          )}

          {/* Loop through orders and display them */}
          <div>
            {orders?.map((eachOrder, i) => (
              <div key={i}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p> {/* Show Order ID */}
                {/* Display each product in the order using ProductCard */}
                {eachOrder?.data?.basket?.map((order) => (
                  <ProductCard key={order.id} product={order} flex={true} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
