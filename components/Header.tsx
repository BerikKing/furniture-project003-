import React from "react";
import Link from "next/link";



const Header = () => {

    return (
        <>
            <div className="header">
                <div className="container">
                    <nav>
                        <ul>
                            <li><a href="/master">Мастер-классы</a></li>
                            <li><a href="/">Мебель на заказ</a></li>
                            <a href="/"><img src="../img/logo.png" alt="logo" /></a>
                            <li><a href="/">Контакты</a></li>
                            <li><a href="/">O нас</a></li>
                        </ul>
                    </nav>
                </div>
            
            </div>

        </>
    )
}
export default Header