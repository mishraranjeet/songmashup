from googleapiclient.discovery import build

APIKEY='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'


def youtubeapi(searchstring):
    youtube = build('youtube','v3',developerKey=APIKEY)
    search = youtube.search().list(q=str(searchstring),part='snippet',type='video')
    result = search.execute()
    return result


print(youtubeapi('avengers'))