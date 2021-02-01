import React, { useEffect, useState } from "react";
import { sampleComments } from "../ApiService";

export const CommentsBox = ({ idComents }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (idComents) {
            let requests = idComents.map(url => sampleComments(url));

            Promise.all(requests)
                .then(responses => {
                    return responses;
                })
                .then(responses => Promise.all(responses.map(r => r.json())))
                .then(stories => setData(stories));
        }
    }, [idComents]);

    return (
        data &&
        data.map(item => {
            return (
                <tr key={item.by}>
                    <td></td>
                    <td>
                        <div className="info-comment">{item.by}</div>
                        <div className="text-comment">{item.text}</div>
                    </td>
                </tr>
            );
        })
    );
};
