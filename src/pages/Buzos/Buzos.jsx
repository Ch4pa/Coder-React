import { useEffect, useState } from "react";
import Itemcontainer from "../../components/ItemContainer/Itemcontainer";


function Buzos({ productos, input, toggleTheme ,items  ,deleteItems,}) {

    return (
        <div>
            <Itemcontainer items={items}/>
        </div>
    );
}

export default Buzos;