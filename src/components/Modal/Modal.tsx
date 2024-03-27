import { ReactNode } from 'react';
import './Modal.scss';

const Modal = ({ title, children }: { title:string, children: ReactNode }) => {
    return (
        <section className='modal'>
            <div className='modal__container'>
                <h2 className='modal__title'>{title}</h2>
                <div className='modal__content'>
                    { children }
                </div>
            </div>
        </section>
    )
}

export default Modal;