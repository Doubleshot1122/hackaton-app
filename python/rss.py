#!/usr/bin/python
import feedparser
import requests
import re
import sys
from bs4 import BeautifulSoup

class RSS(object):

    def __init__(self, arry):
        self.arry = arry

    def parse(self): 
        for url in self.arry:
            feed = feedparser.parse(url)
            if 'items' in feed:
                items = feed['items']
                for item in items:
                    self.format(item)
            elif 'entries' in feed:
                for item in items['summary_detail']:
                    self.format(item)

    def format(self, item, type="usa"):
        rss = {}
        rss['title'] = item['title']
        rss['description'] = item['description']
        if 'feedburner_origlink' in item:
            rss['link'] = item['feedburner_origlink']
        elif 'link' in item:
            rss['link'] = item['link']
        else:
            rss['id'] = item['id']    
        rss['keywords'] = []
        user_agent = {'User-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'}
        result = requests.get(rss['link'], headers = user_agent)
        content = result.content
        soup = BeautifulSoup(content,'html5lib')
        metas = soup.find_all('meta')
        tmp = []
        description = [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'description' ]
        if len(description) != 0:
            rss['description'] = description[0]
            tmp += rss['description']
            tmp += [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'description' ]
            tmp += [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'keywords' ]
            tmp += [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'author' ]
            png = [ meta.attrs['content'] for meta in metas if 'property' in meta.attrs and meta.attrs['property'] == 'og:image' ]
            print metas
            if len(png) > 0:
                rss['png'] = png[0]
            elif len(item['media_content']) > 0:
                rss['png'] = item['media_content'][0]['url']
            else:
                rss['png'] = ""
            for sentence in tmp:
                words = sentence.split(" ")
                for word in words:
                    subString = word.split(",")
                    for subWord in subString:
                        subWord = re.sub(r'\W+', '', subWord).lower().strip()
                        if subWord != "" and len(subWord) > 3:
                            rss['keywords'].append(subWord)
            if len(rss['keywords']) != 0:
                print rss        