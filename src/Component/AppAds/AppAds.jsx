import React, { useEffect, useState } from 'react';
import axios from "axios";
import AppAds from '../../data/app-ads.txt';

const AppAdsTxt = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        var contenido='';
        axios
            .get(AppAds)
            .then((response) => {
                setContent(response.data);
                contenido=response.data;
            })
            .catch((error) => {
                console.error("Error loading app_ads.txt:", error);
            });

        const content = contenido; // Utilizamos el contenido del archivo importado
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'app-ads.txt';
        a.click();

        URL.revokeObjectURL(url);

    }, []);
    return <pre>{content}</pre>;

};

export default AppAdsTxt;
