from flask import Flask, render_template, request
import os
from werkzeug.utils import secure_filename


app = Flask(__name__)

@app.route('/submit', methods = ['POST'])
def submit():
    if request.method == 'POST':
        result = request.form
        f = request.files['photo']
        filename = result.get('name') + secure_filename(f.filename)
        f.save(os.path.join('./uploadedFiles', filename))
        
        c = open('./candidateData/' + result.get('name') + '.csv', 'w+')

        line1String = '';
        line2String = '';

        for key in result.keys():
            line1String += key + ','
        for value in result.values():
            line2String += value + ','

        c.write(line1String.rstrip(',') + '\r\n' + line2String.rstrip(','))

        return render_template('submit.html', result = result)

@app.route('/candidate')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
