'use client'

import handleAuth from "@/services/auth";
import {  useState } from "react"
import AppleLogin from "react-apple-login";

function Login() {
   const [payload, setPayload] = useState({email:'', password:''});

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>, key: 'email' | 'password') => {
      const value = e.target.value
      setPayload((prev) => ({...prev, [key]:value}))
    }

    // const appleResponse = response => {
    //     if (!response.error) {
    //       axios
    //         .post("/auth", response)
    //         .then(res => this.setState({ authResponse: res.data }))
    //         .catch(err => console.log(err));
    //     }
    //   };

    const handleEmailAndPasswordLogin = async () => {
        try {
           const response = await handleAuth(payload)
           console.log('response', response)
        }
        catch (e: any) {
           console.log('e',e )
        }
    }

   return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      
       <div className="flex flex-col gap-y">
            <label>Email:</label>
            <input value={payload.email} onChange={(e) => handleOnChange(e, 'email')} className="border border-black" />
       </div>

       <div className="flex flex-col gap-y">
            <label>Password:</label>
            <input value={payload.password} onChange={(e) => handleOnChange(e, 'password')} className="border border-black" />
       </div>

       <button onClick={handleEmailAndPasswordLogin}>Submit</button>

       <div>
         -------------------------OR---------------------------------
       </div>

        <AppleLogin
            clientId="YOUR_CLIENT_ID"
            redirectURI="YOUR_REDIRECT_URL"
            usePopup={true}
            // callback={this.appleResponse} // Catch the response
            scope="email name"
            responseMode="query"
            render={renderProps => (  //Custom Apple Sign in Button
                <button
                    onClick={renderProps.onClick}
                    style={{
                        backgroundColor: "white",
                            padding: 10,
                            border: "1px solid black",
                            fontFamily: "none",
                            lineHeight: "25px",
                            fontSize: "25px"
                            }}>
                            <i className="fa-brands fa-apple px-2 "></i>
                            Continue with Apple
                </button>
                )}
        />
    </div>
   )
}


export default Login