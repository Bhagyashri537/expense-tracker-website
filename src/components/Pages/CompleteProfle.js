import { useRef, useEffect } from "react";
import { useState } from "react";

const CompleteProfile = () => {

     const [displayName, setDisplayName] = useState("");
  const [urlLink, setUrlLink] = useState("");

    let token = localStorage.getItem('token')
    const nameRef = useRef()
    const photourlRef = useRef()
    
        const getSaveData = () => {
            let url = "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg"

            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    idToken: token,

                }),
                headers:{
                    'Content-Type':'application/json'
                }
            }).then(res => {
                if(res.ok){
                    return res.json()
                }
            }).then (data => {
                  setDisplayName(data.users[0].displayName);
                  setUrlLink(data.users[0].photoUrl);
            }).catch((err) => {
                 console.log(err);
             });
         }
                useEffect(() => {
                 getSaveData();
                 }, []);

                 const submitHandler = (e) => {
        e.preventDefault();
     
        localStorage.getItem('token')
        const enteredName = nameRef.current.value;
        const enteredUrl = photourlRef.current.value; 


    let url='https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg';
        fetch(url,{
            method:"POST",
            body:JSON.stringify({
                idToken:token,
                displayName:enteredName,
                photoUrl:enteredUrl,
                returnSecureToken:true,
              }),
            headers:{
                'Content-Type':'application/json'
            }})
            .then(res=>{
                if(res.ok){
                    return res.json();
                }else{
                    return res.json().then((data)=>{
                        if(data && data.error && data.error.message){
                            let errMessage = "Authentication Failed, " + data.error.message;
                            throw new Error(errMessage);
                        }
                    })
                }
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            alert(err.message);
        })
    }

  return (
    <>
    <div className="">
      <form onSubmit={submitHandler} className="m-10">
        <div className="border-2 border-indigo-600 p-7 shadow-lg ">
            <h2 className="font-bold">Contact Detail</h2>
            <div className="flex mt-5">
                
                <img className="w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU" alt="logo"/>
                <label className="font-bold p-3">  Full Name</label>
                <input type="text" ref={nameRef} defaultValue={displayName} className="border-2 border-rose-600 rounded-lg"/>
                <img  className="w-8 pl-4" src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="logo2"/>
                <label className="font-bold p-3">Profile Photo URL</label>
                <input type="text" ref={photourlRef} defaultValue={urlLink} className="border-2 border-rose-600 rounded-lg"/>
            </div>
            <div className="pt-3">
            <button className="bg-pink-300 p-3 rounded-lg">Update</button></div>
        </div>
      </form>
      </div>
    </>
  );
};
export default CompleteProfile;
