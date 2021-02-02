
import {API_PREFIX} from './constants';

export const allStoriesData = () => {
    return fetch(API_PREFIX + '/topstories.json');
};

export const sampleStories = id => {
    return fetch(API_PREFIX + `/item/${id}.json`);
};

export const sampleComments = url => {
    return fetch(API_PREFIX + `/item/${url}.json`);
};
