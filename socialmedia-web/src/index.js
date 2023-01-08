import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {ProfileBadgeComponent} from './profiles'
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets'
import reportWebVitals from "./reportWebVitals";

const appEl = document.getElementById('root')
const root = createRoot(appEl);
if (appEl) {
    root.render(<StrictMode>
    <App />
  </StrictMode>,);
}
const e = React.createElement
const tweetsEl = document.getElementById("tweetme-2")
const tweet2 = createRoot(tweetsEl);
if (tweetsEl) {
    tweet2.render(
        e(TweetsComponent, tweetsEl.dataset));
}

const tweetFeedEl = document.getElementById("tweetme-2-feed")
const tweetsFeed = createRoot(tweetFeedEl);
if (tweetFeedEl) {
    tweetsFeed.render(
        e(FeedComponent, tweetFeedEl.dataset),);
}

const tweetDetailElements = document.querySelectorAll(".tweetme-2-detail")

tweetDetailElements.forEach(container=> {
    ReactDOM.render(
        e(TweetDetailComponent, container.dataset),
        container);
})

const userProfileBadgeElements = document.querySelectorAll(".tweetme-2-profile-badge")

userProfileBadgeElements.forEach(container=> {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset),
        container);
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reportWebVitals();