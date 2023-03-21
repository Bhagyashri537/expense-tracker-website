import { useState,  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseAction } from "../Store/expenseSlice";
import { featureAction } from "../Store/featureSlice";

const Expense = () => {
    const expenseData = useSelector(store => store.expense.expenses)
   
  
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
 
    const dispatch = useDispatch() 
    const showthemebutton = () => {
      dispatch(featureAction.ShowActiveFeature())
    }
   
    const expense = {
           amount :amount,
            category :category,
            descroption : description ,
            
           
             }
  const submitHandler = (e) => {
    e.preventDefault();
    
   
    fetch(`https://new-react-project-75f7e-default-rtdb.firebaseio.com/expense/${localStorage.getItem('key')}.json`,{
        method: 'POST',
        body: JSON.stringify(
           expense
            
        ),
        headers : {
            'Content-Type': 'application/json'
        }
       
    }).then((res)=>{
      if(res.ok){
          return res.json();
      }else{
          return res.json().then((data)=>{
              if(data && data.error && data.error.message){
                console.log(data)
                  let errMessage = "Authentication Failed, " + data.error.message;
                  throw new Error(errMessage);
              }
          })
      }
  })
  .then(data => {
    console.log(data)
    getSaveData()

   
  })
   .catch(err => {
    alert(err.message)
  })
 
  
    setAmount("");
    setCategory("");
    setDescription("");
    
    
  };
  
  const getSaveData = () => {
    fetch(`https://new-react-project-75f7e-default-rtdb.firebaseio.com/expense/${localStorage.getItem('key')}.json`
     
      
  ).then( (res) => {
       if(res.ok){
        return res.json()
       } else {
       }
  }).then((data) => {
    console.log(data)
    const myarr = []
    
    for( let i in data){
      myarr.unshift( { 
        id: i,
        amount: data[i].amount,
        category: data[i].category,
        description: data[i].descroption})
    
    }
  
    dispatch(expenseAction.addExpenses(myarr))
  }).catch(err => {
    alert(err.message)
  })
  }

  useEffect(()=>{
     getSaveData()
  },[])
  const totalAmount =expenseData.reduce((accumulator, current) => parseInt(accumulator) + parseInt(current.amount), 0);

  const deleteHandler = (id) => {
    fetch(`https://new-react-project-75f7e-default-rtdb.firebaseio.com/expense/${localStorage.getItem('key')}/${id}.json`, {
      method: "DELETE",
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then((data) => {
       getSaveData()

    })
  }
  const Edithandler = (item)=>{

   setAmount(item.amount)
   setCategory(item.category)
   setDescription(item.description)
    deleteHandler(item.id)
}

 
  return (
    <>
      <div className=" border-2 border-blue-300 rounded-xl bg-blue-50 shadow-2xl flex justify-center p-10 ml-60 mr-60 pb-10 ">
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
          <button className="bg-slate-400 p-2 rounded-lg hover:bg-orange-300" type="submit">Add Expences</button>
          
          
          </div>
        </form>
      </div>
      {expenseData.map((item, index) => {
        
        return (
          <>
          <div key={index} className="flex justify-center ">
            {console.log(item)}
            <li className="font-semibold p-2">
              Rs.{item.amount} - {item.category} - {item.description} 

              <button  onClick={()=> Edithandler(item)} className=" bg-green-300 rounded-lg pl-2 pr-2">Edit</button>
              <button  onClick={() => {deleteHandler(item.id)}} className=" bg-red-300 rounded-lg pl-2 pr-2">Remove</button>
              
            </li>
             
          </div>
          
          </>
        );
      })}
      <div className="flex justify-center">
          <h3 className="font-bold text-lg underline ">total expense = Rs. {totalAmount} /- </h3>
          
          </div>
          <div className="flex justify-center p-2">
          {totalAmount >= 10000 && <button className=" bg-orange-300 rounded-lg p-2" onClick={showthemebutton}>premium</button>}
          </div>
    </>
  );
};
export default Expense;