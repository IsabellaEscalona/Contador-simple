import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

function SecondsCounter({ digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix }) {

    const counterStyle = {
        height: "400px",
        fontSize: "5em"
    }

    return (

        <div className="allCounter container-fluid vh-100">
            <div style={counterStyle} className="row bg-black text-light text-center d-flex justify-content-center align-items-center p-5">
                <div className="iconTime p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">
                    <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="six p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">{digitSix % 10}</div>
                <div className="five p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">{digitFive % 10}</div>
                <div className="four p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">{digitFour % 10}</div>
                <div className="three p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">{digitThree % 10}</div>
                <div className="two p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">{digitTwo % 10}</div>
                <div className="one p-0 pt-5 pb-5 col ms-3 bg-dark border rounded border-dark">{digitOne % 10}</div>
            </div>
        </div>
    );
};

export default SecondsCounter;