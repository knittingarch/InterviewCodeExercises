from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import requests
import json


def index(request):

    # First list of returned articles
    grab_articles = requests.get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        # Original limitator without Paginator
        params = {
            'limit': 20,
            'offset': 0,
        },
    )
    grab_articles.raise_for_status()
    show_articles = grab_articles.json()
    # article_list = show_articles.values()

    # Second list of returned articles
    grab_articles2 = requests.get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        params = {
            'limit': 20,
            'offset': 20,
        },
    )
    grab_articles2.raise_for_status()
    show_articles2 = grab_articles2.json()
    # article_list2 = show_articles2.values()


    # Third list of returned articles
    grab_articles3 = requests.get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        params = {
            'limit': 20,
            'offset': 40,
        },
    )
    grab_articles3.raise_for_status()
    show_articles3 = grab_articles3.json()
    # article_list3 = show_articles3.values()


    # Fourth list of returned articles
    grab_articles4 = requests.get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        params = {
            'limit': 20,
            'offset': 60,
        },
    )
    grab_articles4.raise_for_status()
    show_articles4 = grab_articles4.json()
    # article_list4 = show_articles4.values()


    # Fifth list of returned articles
    grab_articles5 = requests.get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        params = {
            'limit': 20,
            'offset': 80,
        },
    )
    grab_articles5.raise_for_status()
    show_articles5 = grab_articles5.json()
    # article_list5 = show_articles5.values()


    return render(request, 'index.html', {
        'articles': show_articles['news'],
        'articles2': show_articles2['news'],
        'articles3': show_articles3['news'],
        'articles4': show_articles4['news'],
        'articles5': show_articles5['news'],
    })