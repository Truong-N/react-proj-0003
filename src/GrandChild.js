import React from "react";

export default class GrandChild extends React.Component {
    render() {
        console.log("[ ]   [ ]   [ ]   [πΆπ»] rendered")
        return (
            <div>
                <p>I'm a GrandChild Component</p>
            </div>
        )
    }
}