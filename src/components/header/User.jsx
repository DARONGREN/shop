import React, {useState} from "react";
import {IoSettingsOutline} from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai";
import {GrHelp} from "react-icons/gr"
import { BiLogOut } from "react-icons/bi";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

export const User = () => {
    const user = true;
    const [profileOpen, setProfileOpen] = useState(false)

    const close =() => {
        setProfileOpen(null);
    }

    const dispatch = useDispatch()
    const logoutHandler = e => {
        e.preventDefault()
        dispatch(authActions.logout())
    }
    return (
        <>
        <div className="profile">
            {user ? (
                <>
                <button className="img" onClick={() => setProfileOpen(!profileOpen)} >
                    <img src="https://img.icons8.com/office/256/user.png" alt="" />
                </button>

                {profileOpen && (
                    <div className="openProfile boxItems" onClick={close}>
                        <div className="image">
                            <Link to="/account" >
                                <div className="img">
                                    <img src="https://img.icons8.com/office/256/user.png" alt="" />
                                </div>
                            </Link>
                            <div className="text">
                                <h4>Simt</h4>
                                <label htmlFor="">Los</label>
                            </div>
                        </div>
                        <Link to="/login">
                        <button className="box">
                            <IoSettingsOutline className='icon' />
                            <h4>My accoutn</h4>
                        </button>
                        </Link>
                        <button className="box">
                            <BsBagCheck className='icon' />
                            <h4>My order</h4>
                        </button>
                        <button className="box">
                            <AiOutlineHeart className='icon' />
                            <h4>My wishlist</h4>
                        </button>
                        <button className="box">
                            <GrHelp className='icon' />
                            <h4>My Help</h4>
                        </button>
                        <button className="box" onClick={logoutHandler}>
                            <BiLogOut className='icon' />
                            <h4>log out</h4>
                        </button>
                    </div>
                )}
                </>
                )
                : (
                    <button>My Account</button>
                )
            }
        </div>
        </>
    )
}

export default User