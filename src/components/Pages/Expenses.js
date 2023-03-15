import { useState } from "react";

const Expense = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { amount, category, description };
    if (amount && category && description) {
      setList((prevData) => [...prevData, data]);
    }
    setAmount("");
    setCategory("");
    setDescription("");
  };
  return (
    <>
      <div className=" border-2 border-blue-300 rounded-xl bg-blue-50 shadow-2xl flex justify-center p-10 ml-60 mr-60 ">
        <form onSubmit={submitHandler}>
          <div>
            <label className="pr-1 pl-2 font-semibold">Amount: </label>
            <input
              type="number"
              placeholder="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-2 border-blue-200 hover:ring-2 rounded-lg p-2"
            />
            <label className="pr-1 pl-2 font-semibold">Category: </label>
            <input
              type="text"
              placeholder="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-blue-200 hover:ring-2 rounded-lg p-2"
            />
            <label className="pr-1 pl-2 font-semibold">Description: </label>
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 border-blue-200 hover:ring-2 rounded-lg p-2"
            />
          </div>
          <div className="flex justify-center pt-5">
          <button className="bg-slate-400 p-2 rounded-lg hover:bg-blue-500" type="submit">submit</button>
          </div>
        </form>
      </div>
      {list.map((item) => {
        return (
          <div  className="flex justify-center pt-8">
            <li className="font-semibold p-2">
              Rs.{item.amount} - {item.category} - {item.description}
              <button className=" bg-green-300 rounded-lg pl-2 pr-2">Edit</button>
              <button className=" bg-red-300 rounded-lg pl-2 pr-2">Remove</button>
            </li>
          </div>
        );
      })}
    </>
  );
};
export default Expense;
