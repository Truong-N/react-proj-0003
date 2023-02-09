import React from "react";

export default class GrandChild extends React.Component {
    render() {
        console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
        return (
            <div>
                <p>I'm a GrandChild Component</p>
            </div>
        )
    }
}