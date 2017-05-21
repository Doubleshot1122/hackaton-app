#!/usr/bin/python
from rss import RSS

def main():
    urls = [
        'http://rss.cnn.com/rss/cnn_topstories.rss',
        'http://rss.cnn.com/rss/cnn_world.rss',
        'http://rss.cnn.com/rss/cnn_us.rss',
        'http://rss.cnn.com/rss/money_latest.rss',
        'http://rss.cnn.com/rss/cnn_allpolitics.rss',
        'http://rss.cnn.com/rss/cnn_tech.rss',
        'http://rss.cnn.com/rss/cnn_health.rss',
        'http://rss.cnn.com/rss/cnn_showbiz.rss',
        'http://rss.cnn.com/rss/cnn_travel.rss',
        'http://rss.cnn.com/rss/cnn_living.rss',
        'http://rss.cnn.com/rss/cnn_freevideo.rss',
        'http://feeds.reuters.com/news/artsculture',
        'http://feeds.reuters.com/reuters/businessNews',
        'http://feeds.reuters.com/reuters/companyNews',
        'http://feeds.reuters.com/reuters/entertainment',
        'http://feeds.reuters.com/reuters/environment',
        'http://feeds.reuters.com/reuters/healthNews',
        'http://feeds.reuters.com/reuters/lifestyle',
        'http://feeds.reuters.com/news/wealth',
        'http://feeds.reuters.com/reuters/MostRead',
        'http://feeds.reuters.com/reuters/oddlyEnoughNews',
        'http://feeds.reuters.com/reuters/peopleNews',
        'http://feeds.reuters.com/Reuters/PoliticsNews',
        'http://feeds.reuters.com/reuters/scienceNews',
        'http://feeds.reuters.com/reuters/sportsNews',
        'http://feeds.reuters.com/reuters/technologyNews',
        'http://feeds.reuters.com/reuters/topNews',
        'http://feeds.reuters.com/Reuters/domesticNews',
        'http://feeds.reuters.com/Reuters/worldNews',
        'http://feeds.bbci.co.uk/news/world/africa/rss.xml',
        'http://feeds.bbci.co.uk/news/world/asia/rss.xml',
        'http://feeds.bbci.co.uk/news/world/europe/rss.xml',
        'http://feeds.bbci.co.uk/news/world/latin_america/rss.xml',
        'http://feeds.bbci.co.uk/news/world/us_and_canada/rss.xml',
        'http://feeds.bbci.co.uk/news/england/rss.xml',
        'http://feeds.bbci.co.uk/news/northern_ireland/rss.xml',
        'http://feeds.bbci.co.uk/news/scotland/rss.xml',
        'http://feeds.bbci.co.uk/news/wales/rss.xmlhttp://feeds.bbci.co.uk/news/wales/rss.xml',
    ]
    dsn = "host='localhost' dbname='hacknet_db' user='postgres' password='postgres'"
    rss = RSS(urls, dsn)
    rss.parse()

if __name__  == "__main__":
    main()
