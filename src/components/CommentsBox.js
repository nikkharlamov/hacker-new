import React, { useEffect, useState } from 'react';
import { sampleComments } from '../ApiService';
import { LoadingSpinner } from './loader/LoadingSpinner';

export const CommentsBox = ({ idComents }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (idComents) {
            setLoading(true);
            let requests = idComents.map(url => sampleComments(url));

            Promise.all(requests)
                .then(responses => {
                    return responses;
                })
                .then(responses => Promise.all(responses.map(r => r.json())))
                .then(stories => {
                    setLoading(false);
                    setData(stories);
                });
        }
    }, [idComents]);

    return (
        <>
            {loading && <LoadingSpinner />}
            {data && !loading && (
                <div className="overflow-auto h-52 md:overflow-y-visible md:h-auto md:flex md:flex-col">
                    {data.map(item => (
                        <div key={item.id} className="mx-5 md:mx-16 my-4 flex flex-col w-7/12  md:h-auto">
                            <div className="opacity-70 text-sm">{item.by}</div>
                            <div className="text-xs">{item.text}</div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
