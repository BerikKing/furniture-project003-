import React from "react";
import Link from "next/link";



const Header = () => {

    return (
        <>
            <div className="header">
                <div className="container">
                    <nav>
                        <ul>
                            <li><Link href="/master">Мастер-классы</Link></li>
                            <li><Link href="/">Мебель на заказ</Link></li>
                            <Link href="/"><img src="/img/logo.png" alt="logo" /></Link>
                            <li><Link href="/">Контакты</Link></li>
                            <li><Link href="/">O нас</Link></li>
                        </ul>
                    </nav>
                </div>
            
            </div>

        </>
    )
}
export default Header