import React from "react"

export default function Contact(props) {
    return (
        <div className="contact-card">
            {props.img && <img src={props.img}/>}
            {props.name && <h3>{props.name}</h3>}
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                {props.phone && <p>{props.phone}</p>}
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                {props.email && <p>{props.email}</p>}
            </div>
        </div>
    )
}

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/