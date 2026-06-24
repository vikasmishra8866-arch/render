from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

# टेस्टिंग के लिए एक लाइव बैकएंड एपीआई डेटा
@app.route('/api/stats')
def get_stats():
    return jsonify({
        "server_status": "🟢 ONLINE",
        "database_health": "100%",
        "active_users": 142
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
