import React from "react";
import Child from "./Child";

export default class Parent extends React.Component {
    render() {
        console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a Parent Component</p>
                <Child />
                <Child />
            </div>
        )
    }
}