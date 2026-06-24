document.getElementById('refreshBtn').addEventListener('click', loadDashboardData);

function loadDashboardData() {
    // पाइथन के API एंडपॉइंट से डेटा ला रहे हैं
    fetch('/api/stats')
        .then(response => response.json())
        .then(data => {
            document.getElementById('statusVal').innerText = data.server_status;
            document.getElementById('dbVal').innerText = data.database_health;
            document.getElementById('usersVal').innerText = data.active_users;
            
            // बटन दबाने पर सक्सेस वाइब देने के लिए थोड़ा ग्लो बढ़ा देते हैं
            document.querySelectorAll('.stat-value').forEach(el => {
                el.style.textShadow = '0 0 10px rgba(0, 242, 254, 0.8)';
            });
        })
        .catch(err => {
            console.error("Error connecting to Python backend:", err);
        });
}

// साइट लोड होते ही डेटा अपने आप आ जाए
window.onload = loadDashboardData;
