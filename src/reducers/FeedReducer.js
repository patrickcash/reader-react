import * as FeedActions from '../actions/FeedActions';

const initState = {
  feedList:{},
  feedItems: {},
  feedItemContent: {}
}
    
const FeedReducer = (state=initState, action) => {
  switch(action.type) {
    case FeedActions.GET_FEEDLIST:
      return {
        ...state,
        feedList: action.payload.feedList
      }
    case FeedActions.GET_FEED:
      return {
        ...state,
        feedItems: action.payload.feedItems
      }
    case FeedActions.GET_FEED_ITEM:
      return {
        ...state,
        feedItemContent: state.feedItems[action.payload.index]
      }
    default:
      return state;
  }
}

export default FeedReducer;
