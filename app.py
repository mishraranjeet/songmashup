from flask import Flask
from flask import request, jsonify, render_template, redirect
import requests
import json
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))
VIDEO_FOLDER = os.path.join(APP_ROOT, 'static/videos')
app.config['VIDEO_FOLDER'] = VIDEO_FOLDER
app.config['MAX_CONTENT_PATH'] = 1073741824


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/source')
def sound_source():
    return render_template('source.html')


@app.route('/link', methods=['GET', 'POST'])
def video_link():
    if request.method == 'POST':
        source = request.form['sources']
        if source == 'local':
            url = 'upload/' + source
            return redirect(url)
        if source == 'youtube':
            url = 'upload/' + source
            return redirect(url)

@app.route('/upload/<source>')
def upload(source):
    sources = ['youtube', 'local']
    vsource = source
    sources.remove(vsource)
    sources.insert(0, vsource)
    if vsource == 'local':
        songlist = os.listdir(app.config['VIDEO_FOLDER'])
        return render_template('file_upload.html', tracksource=sources, value=songlist, video_source=vsource)

    elif vsource == 'youtube':
        return render_template('utubevideo.html', tracksource=sources, video_source=vsource)


@app.route('/upload-video', methods=['GET', 'POST'])
def upload_video():
    if request.method == 'POST':
        sources = ['youtube', 'local']
        first= request.files['first']
        second = request.files['second']
        source = request.form['source']
        vsource = source
        sources.remove(vsource)
        sources.insert(0, vsource)
        file_first = secure_filename(first.filename)
        first.save(os.path.join(app.config['VIDEO_FOLDER'], file_first))
        file_second = secure_filename(second.filename)
        second.save(os.path.join(app.config['VIDEO_FOLDER'], file_second))
        return render_template('file_upload.html', track_first=file_first, track_second=file_second, songressource=sources)

    else:
        sources = ['youtube','local']
        songlist = os.listdir(app.config['VIDEO_FOLDER'])
        print(songlist)
        return render_template('file_upload.html', tracksource=sources)


@app.route('/search')
def youtube_search():
    query = request.query_string()
    return render_template('js/youtube.js')


if __name__ == '__main__':
    app.run()
