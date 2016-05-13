from django.shortcuts import render
import requests
import json
def index(request):

    grab_articles = requests.get(
        'http://www.stellarbiotechnologies.com/media/press-releases/json',
        params = {
            'limit': 10,
            'offset': 10,
        },
    )
    grab_articles.raise_for_status()

    show_articles = grab_articles.json()

    return render(request, 'index.html', {
        'articles': show_articles['news']
    })

    # for items in grab_articles.json()['news']:
    #     x = items['title']
    #     y = items['published']
    #     print items['title'], items['published']


    # show_titles2 = grab_articles.json()['news'][0]['title']
    # show_dates2 = grab_articles.json()['news'][0]['published']
    #
    # print show_titles2, show_dates2

    # show_articles = json.loads(grab_articles)
    # print show_articles[0]['title']


    # parsed_article = json.load(grab_articles)
    # print (parsed_article['title'])


    # for x in show_articles:
    #     print 'Where is this showing up?', x[1]
    #     for items in x:
    #         print items
    #     print x[0]
    #     # print x['published']


    # return render(request, 'index.html', {
    #     'grab_articles': grab_articles,
    #     'x': x,
    #     'y': y,
        # 'article_date': article_date,
        # 'article_title': article_title,
        # 'show_titles': show_titles,
        # 'show_dates': show_dates,
    # })


    # return render_to_response('index.html', read_articles, context_instance=RequestContext(request))

    # return HttpResponse(read_articles, content_type='application/json')
    #  return render(request, 'index.html')
