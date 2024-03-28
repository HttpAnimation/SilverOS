import threading
from flask import Flask, render_template, send_from_directory
import webview
import os

app = Flask(__name__, template_folder=os.path.abspath(os.path.dirname(__file__)))

# Define the directory containing static files (e.g., photos, CSS, JS)
static_files_dir = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'static')

@app.route('/')
def index():
    return render_template('index.html')

# Route to serve static files
@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(static_files_dir, path)

def run_flask():
    app.run()

def start_flask():
    flask_thread = threading.Thread(target=run_flask)
    flask_thread.start()

def main():
    start_flask()

    webview.create_window("Web Display", "http://127.0.0.1:5000", width=800, height=600)
    webview.start()

if __name__ == "__main__":
    main()
