import React, { useEffect, useState } from "react";
import axios from "axios";
import ResumenPDF from "../../data/app-ads.txt";

const AppAdsTxt = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        axios
        .get(ResumenPDF)
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
export default AppAdsTxt;
