// eslint-disable-next-line no-unused-vars
import React from "react";
import Centralized from "./Centralized";
import Decentralized from "./Decentralized";
import Degen from "./Degen";

function Allcards() {
    return (        
        <div className="h-10 w-full">
            <Centralized />
            <Decentralized />
            <Degen />
        </div>
    )
}

export default Allcards;
