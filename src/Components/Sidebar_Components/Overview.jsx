import { useState } from "react";

import * as Icon from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100 },
];

const Overview = () => {
  const [viewDetailsOrders, setViewDetailsOrders] = useState(false);
  const [viewDetailsTransactions, setViewDetailsTransactions] = useState(false);
  const [viewDetailsIncome, setViewDetailsIncome] = useState(false);
  const [viewDetailsExpenses, setViewDetailsExpenses] = useState(false);

  const toggleViewDetailsOrders = () => {
    setViewDetailsOrders(!viewDetailsOrders);
  };

  const toggleViewDetailsTransactions = () => {
    setViewDetailsTransactions(!viewDetailsTransactions);
  };

  const toggleViewDetailsIncome = () => {
    setViewDetailsIncome(!viewDetailsIncome);
  };

  const toggleViewDetailsExpenses = () => {
    setViewDetailsExpenses(!viewDetailsExpenses);
  };

  const [isDelivered, inProgress] = useState(true);

  const OrderDetails = ({ Orders, Revenue, Value, Product, Time }) => {
    return (
      <div className="border p-2 flex flex-col">
        <p>
          Total New Orders: <span className="font-semibold">{Orders}</span>
        </p>
        <p>
          Total Revenue: <span className="font-semibold">PHP {Revenue}</span>
        </p>
        <p>
          Average Order Value: <span className="font-semibold">{Value}</span>
        </p>
        <p>
          Top Selling Product: <span className="font-semibold">{Product}</span>
        </p>
        <p>
          Average Processing Time: <span className="font-semibold">{Time}</span>
        </p>
        <button
          onClick={toggleViewDetailsOrders}
          className="text-blue-400 hover:text-blue-700"
        >
          Hide Details
        </button>
      </div>
    );
  };

  const TransactionDetails = ({ OrderVal, Frequency, RRR, Reviews }) => {
    return (
      <div className="border p-2 flex flex-col">
        <p>
          Average Order Value (AOV):{" "}
          <span className="font-semibold">PHP {OrderVal}</span>
        </p>
        <p>
          Average Purchase Frequency:{" "}
          <span className="font-semibold">{Frequency}</span>
        </p>
        <p>
          Return and Refund Rate: <span className="font-semibold">{RRR}</span>
        </p>
        <p>
          Customer Feedback and Reviews:
          <span className="font-semibold">{Reviews}</span>
        </p>
        <button
          onClick={toggleViewDetailsTransactions}
          className="text-blue-400 hover:text-blue-700"
        >
          Hide Details
        </button>
      </div>
    );
  };

  const IncomeDetails = ({ SalesRev, Margin, ROI, Tax }) => {
    return (
      <div className="border p-2 flex flex-col">
        <p>
          Sales revenue:
          <span className="font-semibold">PHP {SalesRev}</span>
        </p>
        <p>
          Profit Margin:
          <span className="font-semibold">{Margin}</span>
        </p>
        <p>
          Return of Investment (ROI):{" "}
          <span className="font-semibold">PHP {ROI}</span>
        </p>
        <p>
          Tax rate:
          <span className="font-semibold">{Tax}</span>
        </p>
        <button
          onClick={toggleViewDetailsIncome}
          className="text-blue-400 hover:text-blue-700"
        >
          Hide Details
        </button>
      </div>
    );
  };

  const ExpensesDetails = ({ COGS, OpExpenses, SFCost, Fee }) => {
    return (
      <div className="border p-2 flex flex-col">
        <p>
        Cost of Goods Sold (COGS):
          <span className="font-semibold">PHP {COGS}</span>
        </p>
        <p>
        Operating Expenses:
          <span className="font-semibold">{OpExpenses}</span>
        </p>
        <p>
        Shipping and Fulfillment Costs:
          <span className="font-semibold">PHP {SFCost}</span>
        </p>
        <p>
          Transaction Fees:
          <span className="font-semibold">{Fee}</span>
        </p>
        <button
          onClick={toggleViewDetailsExpenses}
          className="text-blue-400 hover:text-blue-700"
        >
          Hide Details
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="flex md:text-base text-sm">
        <div className="flex-1 bg-slate-50 md:p-2 md:w-[80rem] w-screen">
          <div className="p-4">
            <h1 className="transition-all delay-500 text-gray-900 font-semibold pb-4">
              Overview
            </h1>

            {/* HEADERS */}
            <div className="flex space-x-6 py-4 md:overflow-hidden overflow-scroll rounded-md">
              {/* ORDERS */}
              <div className="p-4 rounded-md bg-white space-y-2  w-full border">
                <div className="flex justify-between gap-10 text-sm border-b">
                  <div className="w-50">
                    <div className="flex space-x-5 items-center md:w-40">
                      <h1 className="py-2">New Order</h1>
                    </div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <span className="text-[0.80rem] text-gray-400">
                    Total Numbers
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="  text-blue-400 bg-blue-50 rounded-full">
                      <span className="h-12 w-12 flex items-center justify-center">
                        <Icon.Boxes />
                      </span>
                    </div>
                    <h1 className="font-semibold text-lg">192</h1>
                  </div>
                </div>
                <div className="text-[.85rem]">
                  {viewDetailsOrders ? (
                    <OrderDetails
                      Orders="1,200"
                      Revenue="1,500"
                      Value="92"
                      Product="Retro Colorblocked Track Jacket Windbreaker"
                      Time="3 days"
                    />
                  ) : (
                    <div
                      onClick={toggleViewDetailsOrders}
                      className="flex justify-center items-center flex-col"
                    >
                      <span className="text-blue-400 hover:text-blue-700">
                        View Details
                      </span>
                      <div className="w-2 h-2 border-b-2 border-r-2 transform rotate-45 hover:border-blue-500"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* TRANSACTIONS */}
              <div className="p-4 rounded-md bg-white space-y-2 w-full border">
                <div className="flex justify-between gap-10 text-sm border-b">
                  <div className="w-50">
                    <div className="flex space-x-5 items-center md:w-40">
                      <h1 className="py-2">Transaction</h1>
                    </div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <span className="text-[0.80rem] text-gray-400">
                    Today's Total Transactions
                  </span>
                  <div className="flex items-center space-x-3 w-full">
                    <div className="  text-yellow-400 bg-yellow-100 rounded-full">
                      <span className="h-12 w-12 flex items-center justify-center">
                        <Icon.ReceiptText />
                      </span>
                    </div>
                    <h1 className="font-semibold text-lg">150</h1>
                  </div>
                </div>
                <div className="text-[.85rem]">
                  {viewDetailsTransactions ? (
                    <TransactionDetails
                      OrderVal="599"
                      Frequency="3.5"
                      RRR="5%"
                      Reviews="4.5"
                    />
                  ) : (
                    <div
                      onClick={toggleViewDetailsTransactions}
                      className="flex justify-center items-center flex-col"
                    >
                      <span className="text-blue-400 hover:text-blue-700">
                        View Details
                      </span>
                      <div className="w-2 h-2 border-b-2 border-r-2 transform rotate-45 hover:border-blue-500"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* INCOME */}
              <div className="p-4 rounded-md bg-white space-y-2 w-full border">
                <div className="flex justify-between gap-10 text-sm border-b">
                  <div className="w-50">
                    <div className="flex space-x-5 items-center md:w-40">
                      <h1 className="py-2">Income</h1>
                    </div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <span className="text-[0.80rem] text-gray-400">
                    Today's Total Income
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="  text-green-400 bg-green-50 rounded-full">
                      <span className="h-12 w-12 flex items-center justify-center">
                        <Icon.Banknote />
                      </span>
                    </div>
                    <h1 className="font-semibold text-lg">
                      <span>PHP</span> 20,000
                    </h1>
                  </div>
                </div>
                <div className="text-[.85rem]">
                  {viewDetailsIncome ? (
                    <IncomeDetails
                    SalesRev="5,000" 
                    Margin="20%" 
                    ROI="150" 
                    Tax="5%"
                    />
                  ) : (
                    <div
                      onClick={toggleViewDetailsIncome}
                      className="flex justify-center items-center flex-col"
                    >
                      <span className="text-blue-400 hover:text-blue-700">
                        View Details
                      </span>
                      <div className="w-2 h-2 border-b-2 border-r-2 transform rotate-45 hover:border-blue-500"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* EXPENSES */}
              <div className="p-4 rounded-md bg-white space-y-2 w-full border">
                <div className="flex justify-between gap-10 text-sm border-b">
                  <div className="w-50">
                    <div className="flex space-x-5 items-center md:w-40">
                      <h1 className="py-2">Expenses</h1>
                    </div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <span className="text-[0.80rem] text-gray-400">
                    Today's Expenses
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="  text-pink-300 bg-pink-50 rounded-full">
                      <span className="h-12 w-12 flex items-center justify-center">
                        <Icon.HandCoins />
                      </span>
                    </div>
                    <h1 className="font-semibold text-lg">
                      <span>PHP</span> 2,300
                    </h1>
                  </div>
                </div>
                <div className="text-[.85rem]">
                  {viewDetailsExpenses ? (
                    <ExpensesDetails 
                    COGS="1,100" 
                    OpExpenses="1,200" 
                    SFCost="300" 
                    Fee="2,000"
                    />
                  ) : (
                    <div
                      onClick={toggleViewDetailsExpenses}
                      className="flex justify-center items-center flex-col"
                    >
                      <span className="text-blue-400 hover:text-blue-700">
                        View Details
                      </span>
                      <div className="w-2 h-2 border-b-2 border-r-2 transform rotate-45 hover:border-blue-500"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* END OF HEADERS */}

            {/* MAIN BODY */}
            <div className="flex md:flex-row flex-col md:space-x-6">
              {/* SALES OVERVIEW */}
              <div className="border rounded-lg bg-white my-4 w-full">
                <div className="p-4">
                  <div className="border-b">
                    <h1 className="font-semibold pb-2">Sales Overview</h1>
                  </div>
                  <div className="text-sm space-x-10 my-2 flex md:overflow-hidden overflow-scroll">
                    <OverviewButton>All time</OverviewButton>
                    <OverviewButton>This Year</OverviewButton>
                    <OverviewButton>This Month</OverviewButton>
                    <OverviewButton>Today</OverviewButton>
                  </div>
                  <div className="p-2 rounded-md space-y-4 text-sm text-gray-500 md:overflow-hidden overflow-scroll">
                    <LineChart
                      width={750}
                      height={300}
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </div>
                </div>
              </div>

              {/* LATEST SALES */}
              <div className="border rounded-lg bg-white my-4 w-full">
                <div className="p-4">
                  <div className="border-b">
                    <h1 className="font-semibold pb-2">Latest Sales</h1>
                  </div>
                  <SalesProduct
                    img="https://m.media-amazon.com/images/I/51eZnuGAOnL._AC_SX679_.jpg"
                    time="11m ago"
                    children="Retro Colorblocked Track Jacket Windbreaker"
                  />
                </div>
              </div>
            </div>

            {/* RECENT ORDERS */}
            <div className="border rounded-lg bg-white my-4 w-full overflow-x-auto">
              <div className="p-4">
                <div className="border-b">
                  <h1 className="font-semibold pb-2">Recent Orders</h1>
                </div>
                <div className="w-full">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="md:text-sm text-xs text-gray-600">
                        <th className="px-4 py-1 text-left">Item</th>
                        <th className="px-4 py-1 text-left">Date</th>
                        <th className="px-4  py-1 text-left">Price</th>
                        <th className="px-4 py-1 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <Item
                        name={
                          <SalesProduct
                            img="https://m.media-amazon.com/images/I/51eZnuGAOnL._AC_SX679_.jpg"
                            children="Retro Colorblocked Track Jacket Windbreaker"
                          />
                        }
                        price="1000"
                        date="Fri, 4 Apr"
                        status={isDelivered ? <Dilivered />: <inProgress />}
                      />
                      <Item
                        name={
                          <SalesProduct
                            img="https://m.media-amazon.com/images/I/51eZnuGAOnL._AC_SX679_.jpg"
                            children="Retro Colorblocked Track Jacket Windbreaker"
                          />
                        }
                        price="1000"
                        date="Fri, 4 Apr"
                        status={isDelivered ? <Dilivered /> : <inProgress />}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;

const Dilivered = () => {
  return (
    <div className="flex items-center">
      <span className="px-4 py-2 text-center bg-purple-100 rounded-md text-purple-700 w-[10rem] font-semibold">
        Delivered
      </span>
    </div>
  );
};

const InProgress = () => {
  return (
    <div className="flex items-center">
      <span className="px-4 py-2 text-center bg-orange-100 rounded-md text-orange-400 w-[10rem] font-semibold">
        In Progress
      </span>
    </div>
  );
};

const Item = ({ name, price, date, status }) => {
  return (
    <tr className="text-sm border">
      <td className="px-4 py-1">{name}</td>
      <td className="px-4 py-1">{date}</td>
      <td className="px-4 py-1">
        <span>PHP</span> {price}
      </td>
      <td className="px-4 py-1">{status}</td>
    </tr>
  );
};

const OverviewButton = ({ children }) => {
  return (
    <span className="hover:bg-gray-700 hover:text-white p-2 rounded-md">
      {children}
    </span>
  );
};

const SalesProduct = ({ img, children, time }) => {
  return (
    <div className="flex flex-row items-center w-full justify-between">
      <div className="text-sm flex flex-row space-x-4 items-center my-4">
        <div className="flex flex-row items-center space-x-4">
          <div className="h-10 w-10 overflow-hidden rounded-md">
            <img src={img} alt="Product Img" />
          </div>
          <p>{children}</p>
        </div>
      </div>
      <span className="text-sm text-gray-500">{time}</span>
    </div>
  );
};
