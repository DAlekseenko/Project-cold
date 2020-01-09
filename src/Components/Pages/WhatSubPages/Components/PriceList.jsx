import React from "react"

export default function PriceList({header, list}) {
    return (
        <div className="prices__wrap">
            <h3 className="prices__quotient">{header}</h3>
            <hr className="prices__hr"/>
            <div className="prices__content">
                <div className="prices__table">
                    <div className="price__tr --title">
                        <div>Наименование</div>
                        <div>Цена</div>
                    </div>
                    {list && list.map((item, index) =>
                        <div className="price__tr" key={index}>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}


