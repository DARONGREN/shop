import React from "react";
import "./account.css"

export const Account = () => {
    return (
        <>
        <section className="accountInfo">
            <div className="container boxItems">
                <h1>Account Information</h1>
                <div className="content">
                    <div className="left">
                        <div className="img flexCenter">
                            <input type='file' accept="img/*" src="https://steamuserimages-a.akamaihd.net/ugc/808803442773500680/9B2BCD4CE39ABB62D5CB19DBDB0E1140F18BB584/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt="" />
                            <img src="https://steamuserimages-a.akamaihd.net/ugc/808803442773500680/9B2BCD4CE39ABB62D5CB19DBDB0E1140F18BB584/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt='' className="image-preview"/>
                        </div>
                    </div>
                    <div className="right">
                        <label>Username</label>
                        <input type="text" required/>
                        <label>Email</label>
                        <input type="text" required/>
                        <label>Password</label>
                        <input type="text" required/>
                        <button className="button">update</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}