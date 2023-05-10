
const Modal = ({...props}) => {
    return(
        <div className="modal">
            <div className="modal_inner">
                <div className="modal_inner_content">
                    <div className="modal_inner_content_title">Хотите обновить интерьер своего дома? Мы поможем!</div>
                    <form className="modal_inner_content_form">
                        <button className="btn_close" onClick={props.click}>&times;</button>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" name="name" placeholder="Ваша имя" />
                        <label htmlFor="phone"></label>
                        <input type="text" id="phone" name="phone" placeholder="Ваш номер телефона"/>
                        <button className="btn_modal" type="submit">Отправить</button>
                    </form>

                </div>
            </div>
                    
        </div>
    )
}
export default Modal