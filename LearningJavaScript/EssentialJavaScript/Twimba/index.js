import { tweetsData } from "./data.js";
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetInput.value);

    tweetInput.value = "";
})

document.addEventListener('click',function(){
    console.log(e.target.dataset.like)
})

function getFeedHtml(){
    let feedHtml = ``

    tweetsData.forEach(function(tweet){
        feedHtml +=  `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <i class="fa-regular fa-comment-dots" data-reply="${tweet.uid}"></i>
                            <span class="tweet-detail">
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-heart" data-like="${tweet.uid}"></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" data-retweet="${tweet.uid}"></i>
                                ${tweet.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
            </div>`
    })

    return feedHtml
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()