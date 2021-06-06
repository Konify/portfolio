import React from 'react'

export function MainTitle({title, title2}) {
    return (
        <div className="title-container text-center">
            <h1 className="title"><span className="borer-color">{title}</span>   <span className="color-span">{title2}</span></h1>
        </div>
    )
}
