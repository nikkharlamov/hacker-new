import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export const Pagination = ({ page, allStories }) => {
    const currentPage = Number(page);

    return (
        <div className="pagination">
            <NavLink to={`/${currentPage > 1 ? currentPage - 1 : "1"}`}> « </NavLink>

            {currentPage - 2 >= 1 && <NavLink to={`/${currentPage - 2}`}> {currentPage - 2} </NavLink>}
            {currentPage - 1 >= 1 && <NavLink to={`/${currentPage - 1}`}> {currentPage - 1} </NavLink>}
            <NavLink className="current-page" to={`/${currentPage}`}>
                {currentPage}
            </NavLink>
            {currentPage + 1 <= allStories.length / 10 && (
                <NavLink to={`/${currentPage + 1}`}> {currentPage + 1} </NavLink>
            )}
            {currentPage + 2 <= allStories.length / 10 && (
                <NavLink to={`/${currentPage + 2}`}> {currentPage + 2} </NavLink>
            )}
            {currentPage + 3 < allStories.length / 10 && (
                <>
                    <NavLink to={`/${currentPage}`}> ... </NavLink>
                    <NavLink to={`/${Number(allStories.length / 10)}`}>{allStories.length / 10} </NavLink>
                </>
            )}
            <NavLink
                to={`/${
                    currentPage && allStories.length > currentPage * 10 + 10
                        ? currentPage + 1
                        : !currentPage
                        ? 1
                        : currentPage
                }`}
            >
                »
            </NavLink>
        </div>
    );
};
