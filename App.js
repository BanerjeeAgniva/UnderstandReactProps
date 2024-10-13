import React from "react"
import Contact from "./Contact"
import CatData  from "./CatData"
const ContactCatData=CatData.map(cat=> <Contact key={cat.id} img={cat.img} name={cat.name} phone={cat.phone} email={cat.email} />)
function App() {
    return (
        <div className="contacts">
            {ContactCatData}
        </div>
    )
}

export default App