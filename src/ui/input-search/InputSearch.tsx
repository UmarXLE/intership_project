import React from 'react';
import styled from "./input.module.scss"
import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg"

interface Props {
    width: string
}

const InputSearch = ({width}: Props) => {
    return (
        <div 
         style={{ 'width': width } as React.CSSProperties}
         className = { styled.container } >
            <SearchIcon />
            <input type="text" placeholder='Искать на UNO' />
        </div>
    );
};

export default InputSearch;