function detectSQLInjection() {
    const username = document.getElementById("Sachin").value;
    const password = document.getElementById("031008").value;
    const result = document.getElementById("result");

    // Common SQL Injection patterns
    const sqlPatterns = [
        /(')|(\-\-)|(\#)/i,
        /(\bOR\b|\bAND\b).*=.*/i,
        /(UNION\s+SELECT)/i,
        /(DROP\s+TABLE)/i,
        /(SELECT\s+\*)/i,
        /(INSERT\s+INTO)/i,
        /(DELETE\s+FROM)/i,
        /(UPDATE\s+.*SET)/i
    ];

    let suspicious = false;

    for (let pattern of sqlPatterns) {
        if (pattern.test(username) || pattern.test(password)) {
            suspicious = true;
            break;
        }
    }

    if (suspicious) {
        result.innerHTML = "⚠️ Warning: Possible SQL Injection Detected!";
        result.className = "warning";
    } else {
        result.innerHTML = "✅ Input appears safe.";
        result.className = "safe";
    }
}
