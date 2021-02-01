import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CommentsBox } from "../components/CommentsBox";
import { Pagination } from "../components/Pagination";
import { PER_PAGE } from "../constants";
import { LoadingSpinner } from "../loader/LoadingSpinner";
import { allStoriesData, sampleStories } from "../ApiService";

export const Home = () => {
    const [data, setData] = useState([]);
    const [showStory, setStory] = useState(false);
    const [idStory, setIdStory] = useState("");
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
                setData(stories);
                setLoading(false);
            });
    }, [page, allStories]);

    const showComents = id => {
        setIdStory(id);
        setStory(!showStory);
    };

    return (
        <div className="container">
            {loading && <LoadingSpinner />}
            {!loading && data && allStories && (
                <>
                    <table>
                        <tbody>
                            {data.map((story, index) => {
                                return (
                                    <Fragment key={story.id}>
                                        <tr>
                                            <td>
                                                <div>
                                                    <span>{allStories.findIndex(item => item === story.id) + 1}.</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="title-storie">
                                                    <a href={`${story.url}`}>{story.title}</a>
                                                </div>
                                                <div className="info-storie">
                                                    <span>{story.score} points</span>
                                                    <span> {story.kids ? story.kids.length : 0} comments</span>
                                                    {story.kids ? (
                                                        <div
                                                            className="show-comments"
                                                            onClick={() => showComents(story.id)}
                                                        >
                                                            {" "}
                                                            {showStory && idStory === story.id
                                                                ? "Hide comments"
                                                                : "Show comments"}
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                        {showStory && idStory === story.id && <CommentsBox idComents={story.kids} />}
                                    </Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                    <Pagination page={page} allStories={allStories} />
                </>
            )}
        </div>
    );
};
