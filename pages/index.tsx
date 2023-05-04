import HomeLayouts from "@/layouts/HomeLayouts"

const Main = () => {
    return (
        <>
        <div>
            <HomeLayouts>
                <div className="main">
                        <img src="../img/main-bg.jpeg" alt="first photo" />
                        <div className="container">
                            <div className="main_wrapper">
                                <div className="main_wrapper_title">
                                Столярная мастерская NIKASON BRAND
                                </div>
                                <div className="main_wrapper_nameSite">Изготовление и <br/> реставрация мебели</div>
                                <div className="main_wrapper_descr">Авторская мебель ручной работы, сделанная с душой и трепетом.</div>
                                <button className="btn">Смотреть услуги</button>
                            </div>
                        </div>
                </div>
            </HomeLayouts>
        </div>
        </>
    )
}
export default Main