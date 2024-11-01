import React, { useState, useEffect } from "react";

const Orders = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [orders, setOrders] = useState([]);
  const [isCompleted, setCompleted] = useState([]);
  const [isPending, setPending] = useState([]);
  const [isCanceled, setCanceled] = useState([]);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
    sortOrders();
  };

  const NavButton = ({ children, hook, onClick }) => {
    return (
      <button
        className={`${hook ? "border-b-2 border-blue-600 text-blue-600" : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  const sortOrders = () => {
    const completedOrders = orders.filter(
      (order) => order.status === 'Completed'
    );
    const pendingOrders = orders.filter((order) => order.status === "Pending");
    const canceledOrders = orders.filter(
      (order) => order.status === "Canceled"
    );
    setCompleted(completedOrders);
    setPending(pendingOrders);
    setCanceled(canceledOrders);
  };

  useEffect(() => {
    setOrders([
      {
        ID: 1, 
        name: "Product 1",
        address: "Address 1",
        date: "04/06/24",
        price: 100,
        status: "Completed",
      },
      {
        ID: 2,
        name: "Product 2",
        address: "Address 2",
        date: "04/07/24",
        price: 200,
        status: "Completed",
      },
      {
        ID: 3,
        name: "Product 3",
        address: "Address 3",
        date: "04/08/24",
        price: 300,
        status: "Canceled",
      },
      {
        ID: 3,
        name: "Product 3",
        address: "Address 3",
        date: "04/09/24",
        price: 300,
        status: "Pending",
      }
    ]);
  }, []);

  const renderItems = () => {
    switch (selectedLink) {
      case 1:
        return isCompleted.map((order, index) => (
          <Item key={index} {...order} i={index + 1} />
        ));
      case 2:
        return isPending.map((order, index) => (
          <Item key={index} {...order} i={index + 1} />
        ));
      case 3:
        return isCanceled.map((order, index) => (
          <Item key={index} {...order} i={index + 1} />
        ));
      default:
        return orders.map((order, index) => (
          <Item key={index} {...order} i={index + 1} />
        ));
    }
  };

  return (
    <div className="flex md:text-base text-sm">
      <div className="flex-1 bg-slate-50 md:p-2">
        <div className="p-4">
          <div className="flex gap-5 items-center pb-5">
            <h1 className="transition-all delay-500 text-gray-900 font-semibold">
              Orders
            </h1>
            <span className="text-sm text-slate-400 font-normal">
              {orders.length} Order(s) found
            </span>
          </div>
          <div className="flex justify-between">
            <div className="md:w-auto">
              <div className="items-center py-2 text-sm font-medium">
                <div className="flex space-x-5 w-full py-2 md:overflow-hidden overflow-scroll">
                  <NavButton
                    onClick={() => handleLinkClick(0)}
                    hook={selectedLink === 0 || selectedLink === null}
                  >
                    All Orders
                  </NavButton>
                  <NavButton
                    onClick={() => handleLinkClick(1)}
                    hook={selectedLink === 1}
                  >
                    Completed
                  </NavButton>
                  <NavButton
                    onClick={() => handleLinkClick(2)}
                    hook={selectedLink === 2}
                  >
                    Pending
                  </NavButton>
                  <NavButton
                    onClick={() => handleLinkClick(3)}
                    hook={selectedLink === 3}
                  >
                    Canceled
                  </NavButton>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 bg-white border rounded-md">
            <div className="mb-4">
              <div className="justify-between flex md:w-full w-[20rem] md:overflow-auto overflow-scroll">
                <table className="w-full md:table-fixed table-auto">
                  <thead>
                    <tr className="text-xs text-gray-400 text-left border-b">
                      <th className="px-4 py-2 font-medium">#</th>
                      <th className="px-4 py-2 font-medium">Order ID</th>
                      <th className="px-4 py-2 font-medium">Item Name</th>
                      <th className="px-4 py-2 font-medium">Address</th>
                      <th className="px-4 py-2 font-medium">Date</th>
                      <th className="px-4 py-2 font-medium">Price</th>
                      <th className="px-4 py-2 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-500">{renderItems()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

const Item = ({ i, ID, name, address, date, price, status }) => {
  const getStatusClassName = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-50 "; 
      case "Pending":
        return "text-yellow-500 bg-yellow-50";
      case "Canceled":
        return "text-red-600 bg-red-50";
      default:
        return "";
    }
  };

  const statusClassName = getStatusClassName(status);
  return (
    <tr className="text-sm">
      <td className="px-4 py-4">{i}</td>
      <td className="px-4 py-4">{ID}</td>
      <td className="px-4 py-4">{name}</td>
      <td className="px-4 py-4">{address}</td>
      <td className="px-4 py-4">{date}</td>
      <td className="px-4 py-4">
        <span>PHP</span> {price}
      </td>
      <td className={`flex justify-center py-2 rounded-md m-2 ${statusClassName}`}>{status}</td>
    </tr>
  );
};
