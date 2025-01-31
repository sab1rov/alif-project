import React from "react";
import { CardsCommonData } from "../constants/data";
import RightButton from "../assets/icons/chevron-right";
import GlobalCart from "../assets/icons/Cart";
import GlobalIcon from "../assets/icons/GlobalHeart";

function Cards() {
    return (
        <section className='cards'>
            <div className='container'>
                <div className='cards__wrap'>
                    <h1 className='cards__title'>Скидки</h1>
                    <a href='' className='cards__link'>
                        Смотреть все
                        <RightButton />
                    </a>
                    <div className='cards__card'>
                        {CardsCommonData.map((item) => (
                            <div className='cards__item' key={item.id}>
                                <div className='cards__map'>
                                    <div className='cards__image'>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className='cards__images'
                                        />
                                        <span className='cards__icon'>
                                            <GlobalIcon />
                                        </span>
                                    </div>
                                    <p className='cards__text'>{item.text}</p>
                                    <a className='cards__price'>{item.price}</a>
                                    <button className='cards__buy'>
                                        <GlobalCart />В корзину
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;
