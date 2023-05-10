import React, { useState } from "react";
import HomeLayouts from "@/layouts/HomeLayouts";
import Modal from "@/components/Modal";

const Master = () => {

    const [value, setValue] = useState<boolean>(false)
    return (
        <>
        {value === true ? <Modal claick = {() => setValue(false)}/> : null}

        <HomeLayouts>
        <div className="masterClass">
            <div className="container">
                <div className="masterClass_wrapper">
                    <div className="masterClass_wrapper_title">Нам доверяют мебель с историей в 120 лет</div>
                    <button className="btn_master" onClick={() => setValue(true)}>Смотреть мастер-классы</button>
                </div>
            </div>
        </div>
        </HomeLayouts>
        </>
    )
}
export default Master