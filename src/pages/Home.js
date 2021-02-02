import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CommentsBox } from '../components/CommentsBox';
import { Pagination } from '../components/Pagination';
import { PER_PAGE } from '../constants';
import { LoadingSpinner } from '../components/loader/LoadingSpinner';
import { allStoriesData, sampleStories } from '../ApiService';

export const Home = () => {
    const [data, setData] = useState([]);
    const [showStory, setStory] = useState(false);
    const [idStory, setIdStory] = useState('');
    const [allStories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    const { page } = useParams();

    useEffect(() => {
        allStoriesData()
            .then(response => {
                return response.json();
            })
            .then(result => {
                setStories(result);
            });
    }, []);

    useEffect(() => {
        setLoading(true);

        const post = Number(page) * PER_PAGE;
        const prev = post - PER_PAGE;
        const requests = allStories.slice(prev, post).map(id => sampleStories(id));

        Promise.all(requests)
            .then(responses => Promise.all(responses.map(r => r.json())))
            .then(stories => {
                setLoading(false);
                setData(stories);
            });
    }, [page, allStories]);

    const showComents = id => {
        setIdStory(id);
        setStory(!showStory);
    };

    return (
        <div className="md:container mt-6 md:pl-1 bg-body min-h-content md:min-h-full md:pb-3 last:mb-9">
            {loading && <LoadingSpinner />}
            {!loading && data && allStories && (
                <>
                    {data.map(story => {
                        return (
                            <Fragment key={story.id}>
                                <div className="flex px-2 ">
                                    <div className="w-1/12 md:w-7">
                                        {allStories.findIndex(item => item === story.id) + 1}.
                                    </div>
                                    <div className="w-11/12 ml-1 md:ml-2">
                                        <div>
                                            <a
                                                className="text-black hover:underline"
                                                href={`${story.url}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {story.title}{' '}
                                            </a>
                                        </div>
                                        <div className="flex text-xs text-gray-600">
                                            <span className="pr-1">{story.score} points</span>
                                            <span className="pr-1">{story.kids ? story.kids.length : 0} comments</span>
                                            {story.kids && (
                                                <div
                                                    className="ml-1 hover:text-red-500 cursor-pointer"
                                                    onClick={() => showComents(story.id)}
                                                >
                                                    {' '}
                                                    {showStory && idStory === story.id
                                                        ? 'Hide comments'
                                                        : 'Show comments'}
                                                </div>
                                            )}
                                        </div>
                                        {showStory && idStory === story.id && <CommentsBox idComents={story.kids} />}
                                    </div>
                                </div>
                            </Fragment>
                        );
                    })}

                    <Pagination page={page} allStories={allStories} />
                </>
            )}
        </div>
    );
};
