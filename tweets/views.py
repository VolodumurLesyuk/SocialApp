from django.http import JsonResponse
from django.shortcuts import render

from tweets.models import Tweet
from tweets.forms import TweetForm


def home_page(request, *args, **kwargs):
    return render(request, 'pages/home.html')


def create_tweet(request, *args, **kwargs):
    form = TweetForm(request.POST or None)
    if form.is_valid():
        obj = form.save(commit=False)
        obj.save()
        form = TweetForm()
    return render(request, 'components/form.html', context={'form': form})


def tweet_list_view(request, *args, **kwargs):
    qs = Tweet.objects.all()
    tweets_list = [{'id': x.id, 'context': x.context} for x in qs]
    data = {
        'response': tweets_list
    }
    return JsonResponse(data)
