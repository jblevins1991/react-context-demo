import * as React from "react";
import {useDynamicProps} from "./DynamicPropsProvider";
import "./PropsEditor.css";

const PropsEditor = () => {
    const {
        props,
        setProps,
    } = useDynamicProps();

    const handleOnPropsChange = (event) => {
        if (setProps !== null) {
            setProps(JSON.parse(event.target.value));
        }
    };

    return <div className={'props-editor'}>
        <label className={'props-editor-label'} id={'props-editor-label'}>
            Props Editor
        </label>

        <textarea
            aria-labelledby={'props-editor-label'}
            aria-describedby={'props-editor-hint'}
            className={'props-editor-input'}
            id={'props-editor'}
            name={'props-editor'}
            onChange={handleOnPropsChange}
            placeholder={'Edit the json values to modify the prop values that are passed to the UI on the right.'}
            value={JSON.stringify(
                props,
                null,
                2,
            )}
        />

        <span className={'props-editor-hint'} id={'props-editor-hint'}>
            Edit the json values to modify the prop values that are passed to the UI on the right.
        </span>
    </div>;
};

export default PropsEditor;
