![logo](public/assets/logo.png)

## Inspiration
Create an application that simplifies the process of Curators creating content for the Convey.

## What it does
**Brief Pin** scraps the keyword META data from any RSS or HTML data source provided and uses it to match up to the preferred keyword matching setup for each Convey's profile.  

## How we built it
We created a web crawler to parse through all of the RSS feed data.  The crawler then analyses the news article and classifies them to specific taxonomy relevant to the article.  Keywords are then generated to make the article searchable in a private cloud environment.      

We also created a front end interface display relevant news articles that can be condensed into a briefing document based on preexisting tagged keyword search preferences.

## Challenges we ran into
How to classify the incoming data feeds and then use machine learning to generate keyword and taxonomies based on the parsed news articles.

How to create a Pinterest style front end interface to allow the user to associate and display relevant news articles and ultimately create a briefing book for printing.

## Accomplishments that we're proud of
Created a full stack Pinterest like application for news articles with 4 junior developers IN just over 24 hours.


## What we learned
How a hackathon works.
Deeper understanding of materialize.
Effective use of json data type in a database.
How to scrape and parse html data from several RSS feeds.

## What's next for **Brief Pin**
Complete our vision for the feedback loop.  The initial goal for the feedback loop was to compare the keyword META data from the selected briefing news articles to the user profile and suggest additional keyword matching criteria for better relevance data pulling.
