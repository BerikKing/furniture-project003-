import React from "react";
import HomeLayouts from "@/layouts/HomeLayouts";

const Master = () => {
    return (
        <>
        <HomeLayouts>
        <div className="masterClass">
            <div className="container">
                <div className="masterClass_wrapper">
                    <div className="masterClass_wrapper_title">Нам доверяют мебель с историей в 120 лет</div>
                    <button className="btn_master">Смотреть мастер-классы</button>
                </div>
            </div>
        </div>
        </HomeLayouts>
        </>
    )
}
export default Master