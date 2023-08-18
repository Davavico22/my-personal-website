import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleVerification from "../../data/googlea0baaab2e34efdc3.html";

const VerificacionTxt = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        axios
        .get(GoogleVerification)
        .then((response) => {
            setContent(response.data);
        })
        .catch((error) => {
            console.error("Error loading app_ads.txt:", error);
        });
    }, []);
    console.log(content);

    return <div>{content}</div>;
    
};
export default VerificacionTxt;
