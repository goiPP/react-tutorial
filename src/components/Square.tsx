import React from "react";
import "./Square.css"

interface Props {
    index: number;
}

function alertText(index: number): void {
    alert('You click at ' + index);
}

export const Square: React.FC<Props> = ({index}) => {
    return (
        <button className="square" onClick={() => alertText(index)}>
            {index}
        </button>
    );
}
