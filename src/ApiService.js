export const allStoriesData = () => {
    return fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
};

export const sampleStories = ( id ) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
};

export const sampleComments = ( url ) => {
    return   fetch(`https://hacker-news.firebaseio.com/v0/item/${url}.json?print=pretty`)
};
