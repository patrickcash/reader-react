export const GET_FEEDLIST = 'GET_FEEDLIST';
export const GET_FEED = 'GET_FEED';
export const GET_FEED_ITEM = 'GET_FEED_ITEM';


/**
 * returns a lit of all the feeds currently followed by the reader

 */
export function getFeedList()  {
  const feedList = {
    "feeds": [
    {
      name: "Reddit: Web Development",
      feedURL: "https://www.reddit.com/r/webdev.rss"
    },
    {
      name: "Reddit: Javascript",
      feedURL: "https://www.reddit.com/r/JavaScript.rss"
    },
    {
      name: "Reddit: React",
      feedURL: "https://www.reddit.com/r/reactjs.rss"
    },
    {
      name: "Reddit: Front-end Development",
      feedURL: "https://www.reddit.com/r/Frontend.rss"
    },
    {
      name: "Reddit: Data Science",
      feedURL: "https://www.reddit.com/r/datascience.rss"
    },
    {
      name: "Reddit: Data is beautiful",
      feedURL: "https://www.reddit.com/r/dataisbeautiful.rss"
    },
    {
      name: "Reddit: Machine Learning",
      feedURL: "https://www.reddit.com/r/MachineLearning.rss"
    },
  ]}
  return dispatch => {
    const action = {
      type: GET_FEEDLIST,
      payload: {
         feedList,
      }
    }
    dispatch(action);
  }
}

/**
 * Takes the feed URL and fetches the feed items for that feed
 * 
 * @param {string} url - The URL of the RSS feed
 */
export function getFeed(url)  {
  return dispatch => {
    if (url) {
      // use rss2json link to simulate getting json from a beakend server if this was a full RSS reader app
      const parseURL = "https://api.rss2json.com/v1/api.json?rss_url=";
      fetch(parseURL + url)
      .then(response => response.json())
      .then(json => {
        let feedItems = {}
        if(json.status === "ok"){
          feedItems = json.items
        }
        const action = {
          type: GET_FEED,
          payload: {
           feedItems
          }
        }
        dispatch(action);
        })
      .catch(error => {
        throw(error);
      })
    }
  }
}

/**
 * Takesakes the index of a feed item and sets the content in the content area
 * 
 * @param {int} index - The index of the item in the feed
 */
export function getFeedItem(index)  {
  return dispatch => {
    const action = {
      type: GET_FEED_ITEM,
      payload: {
        index
      }
    }
    dispatch(action);
  }
}

