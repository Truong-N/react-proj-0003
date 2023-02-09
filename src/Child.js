import React from "react";
import GrandChild from "./GrandChild";

export default class Child extends React.Component {
    render() {
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return (
            <div>
                <p>I'm a Child Component</p>
                <GrandChild />
                <GrandChild />
            </div>
        )
    }
}