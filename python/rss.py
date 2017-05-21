#!/usr/bin/python
import feedparser
from bs4 import BeautifulSoup
import requests
import re

class RSS(object):

    def __init__(self, arry):
        self.arry = arry

    def parse(self): 
        for url in self.arry:
            feed = feedparser.parse(url)
            rss = {}
            for item in feed['items']:
                rss['title'] = item['title']
                rss['description'] = item['description']
                rss['link'] = item['feedburner_origlink']
                rss['keywords'] = []
                result = requests.get(rss['link'])
                content = result.content
                soup = BeautifulSoup(content,'html5lib')
                metas = soup.find_all('meta')
                tmp = []
                description = [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'description' ]
                if len(description) != 0:
                    rss['description'] = description[0]
                    tmp += rss['description']
                    tmp += [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'keywords' ]
                    tmp += [ meta.attrs['content'] for meta in metas if 'name' in meta.attrs and meta.attrs['name'] == 'author' ]
                    png = [ meta.attrs['content'] for meta in metas if 'property' in meta.attrs and meta.attrs['property'] == 'og:image' ]
                    if len(png) > 0:
                        rss['png'] = png[0]
                    elif len(item['media_content']) > 0:
                        rss['png'] = item['media_content'][0]['url']
                    else:
                        rss['png'] = ""
                    for sentence in tmp:
                        words = sentence.split(" ")
                        for word in words:
                            word = re.sub(r'\W+', '', word).lower().strip()
                            if word != "" and len(word) > 3:
                                rss['keywords'].append(word)
                    if len(rss['keywords']) != 0:
                        print rss