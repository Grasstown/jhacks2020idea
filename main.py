from flask import Flask, render_template, request, redirect, send_file
import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/candidateData'

app = Flask(__name__)

@app.route('/')
def hello():
    return render_template('landing.html')

@app.route('/submit', methods = ['POST'])
def submit():
    if request.method == 'POST':
        result = request.form
        f = request.files['photo']
        filename = result.get('name') + '_' + secure_filename(f.filename)
        filepath = os.path.join('static/uploadedFiles', filename)
        f.save(filepath)
        
        c = open('static/candidateData/' + result.get('name') + '.csv', 'w+')

        lineTitle = 'name, photo, issue, opinion on issue, issue importance rank\r\n'
        lineValues = result.get('name') + ',' + filepath + ','
        prefixLength = len(lineValues)

        for key in result.keys():
            if key.endswith('Stance'):
                keyL = len(key)
                lineValues += key[:-6] + ',' + result.get(key)
            elif key.endswith('Importance'):
                lineValues += ',' + result.get(key) + '\r\n' + result.get('name') + ',' + filepath + ','

        c.write(lineTitle + lineValues[:-prefixLength])

        return render_template('submit.html', result = result)

@app.route('/candidate')
def home():
    return render_template('index.html')

@app.route('/vote')
def vote():
    return render_template('CandiDate_4.html')

@app.route('/candidateData/a.csv')
def view():
    return send_file('static/candidateData/a.csv')

if __name__ == '__main__':
    app.run(debug=True)

