import React, {Fragment} from "react";

const InteractiveView = ({value, onAction, actionText}) => (
    <Fragment>
        <h1>testy</h1>
        <p>{value}</p>
        <button onClick={onAction}>{actionText}</button>
    </Fragment>
)

export default InteractiveView;
