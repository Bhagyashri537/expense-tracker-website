import { useRef } from "react";

const CompleteProfile = () => {

    let token = localStorage.getItem('token')
    const nameRef = useRef()
    const photourlRef = useRef()
    const submitHandler = (e) => {
        e.preventDefault();

        var enteredName = nameRef.current.value;
        var enteredUrl = photourlRef.current.value;

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
      <form onSubmit={submitHandler}>
        <div>
            <h2>Contact Detail</h2>
            <div className="flex">
                
                <img className="w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCbjdEAA_iKW6KLEBOB_01XOdQjvnBqdUslNPycIanwQqvji_15mW5kfPQsziLLhdGwvA&usqp=CAU" alt="logo"/>
                <label className="font-bold">  Full Name</label>
                <input type="text" ref={nameRef}/>
                <img  className="w-8" src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="logo2"/>
                <label>Profile Photo URL</label>
                <input type="text" ref={photourlRef}/>
            </div>
            <button>Update</button>
        </div>
      </form>
    </>
  );
};
export default CompleteProfile;
