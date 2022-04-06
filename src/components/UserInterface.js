import * as React from "react";
import {useDynamicProps} from "./DynamicPropsProvider";
import "./UserInterface.css";

const UI = () => {
    const {
        props,
    } = useDynamicProps();

    return <div className={'user-interface'}>
        <h1 className={'heading'}>{ props.title }</h1>

        <p className={'copy'}>
            { props.description }
        </p>


    </div>;
};

export default UI;
