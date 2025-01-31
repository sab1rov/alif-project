import React from "react";

function CartPage() {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__wrapp">
          <div className="cart__comtent__one">
            <div className="cart__content">
              <div className="cart__text">
                <h1 className="cart__text__one">Savat</h1>
                <p className="cart__text__two">1 tovarlar</p>
              </div>
              <div className="cart__content__one">
                <button>
                  <p className="cart__content__text">Ulanish</p>
                </button>
                <button>
                  <p className="cart__content__text">
                    Tanlanganlarni o'chirish
                  </p>
                </button>
                <button>
                  <p className="cart__content__text">Hammasini tanlash</p>
                </button>
              </div>
            </div>
            <div className="cart__line"></div>
            <div className="cart__img__text">
              <div className="cart__img__text__one">
                <img
                  src="https://statica.alifshop.uz/shop/moderation/partner-741/1737528432-photo_2025-01-22_11-46-13.jpg"
                  alt="logo"
                  className="cart__img"
                />
                <div className="savat__text__title">
                  <h4 className="cart__h4">
                    Смартфон Apple iPhone 13 128 ГБ (eSIM/nano SIM), темная ночь
                  </h4>
                  <p className="cart__p">Narx: 8 999 000 so'm</p>
                  <p className="cart__p">Sotuvchi: ZUZU-STORE</p>
                  <p className="cart__p">
                    Toshkent bo'ylab 1 kundan boshlab. O' zbekiston bo'ylab 3
                    kundan boshlab
                  </p>
                  <div className="cart__text__subtitl">
                    <p className="cart__p__one">Muddatli to'lov</p>
                    <h5 className="cart__h4__two">656 177 so'm 24 oyga</h5>
                  </div>
                  <div className="cart__text__subtitl__one">
                    <div className="cart__text__subtitl__two">
                      <button className="cart__right__button">-</button>
                      <span className="cart__right__text">1</span>
                      <button className="cart__right__button">+</button>
                    </div>
                    <button className="cart__buttonn">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V5H9V4C9 3.73478 9.10536 3.48043 9.29289 3.29289ZM7 5V4C7 3.20435 7.31607 2.44129 7.87868 1.87868C8.44129 1.31607 9.20435 1 10 1H14C14.7956 1 15.5587 1.31607 16.1213 1.87868C16.6839 2.44129 17 3.20435 17 4V5H19H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H20V20C20 20.7957 19.6839 21.5587 19.1213 22.1213C18.5587 22.6839 17.7957 23 17 23H7C6.20435 23 5.44129 22.6839 4.87868 22.1213C4.31607 21.5587 4 20.7957 4 20V7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H5H7ZM6 7V20C6 20.2652 6.10536 20.5196 6.29289 20.7071C6.48043 20.8946 6.73478 21 7 21H17C17.2652 21 17.5196 20.8946 17.7071 20.7071C17.8946 20.5196 18 20.2652 18 20V7H16H8H6ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM15 17V11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17Z"
                          fill="#A5B1BB"
                        ></path>
                      </svg>
                      Oʻchirish
                    </button>
                  </div>
                  <div className="cart__linee"></div>
                </div>
              </div>
              <div className="cart__right__txt">
                <div className="cart__right">
                  <div className="cart__right__text">
                    <h4 className="cart__right__one">Jami</h4>
                    <p className="cart__right__two">Tovarlar soni</p>
                    <p className="cart__right__two">Yetkazib berish</p>
                  </div>
                  <div className="cart__right__text">
                    <h4 className="cart__right__one">8 999 000 so'm</h4>
                    <p className="cart__right__two">1 dona</p>
                    <p className="cart__right__two0">Bepul</p>
                  </div>
                </div>
                <div className="cart__bottom">
                  <p className="cart__bottom__one">Bepul yetkazib berish</p>
                  <p className="cart__bottom__p">
                    Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika
                    bo'ylab 3 kungacha
                  </p>
                </div>
                <div className="cart__buttons">
                  <button className="cart__button">
                    Muddatli to'lovga olish
                  </button>
                  <button className="cart__buton">
                    Karta orqali sotib olish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
