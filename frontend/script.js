let criteria = [];
let options = [];

function startDecision() {
    document.getElementById("decisionArea").classList.remove("hidden");
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function generateCriteria() {
    let count = document.getElementById("criteriaCount").value;
    let form = document.getElementById("criteriaForm");
    form.innerHTML = "";

    for (let i = 0; i < count; i++) {
        form.innerHTML += `
        <div class="criterion-box">
            <input placeholder="Criterion Name" id="cname${i}">
            <input type="number" step="0.01" placeholder="Weight (0-1)" id="cweight${i}">
            <select id="ccost${i}">
                <option value="">Select Type</option>
                <option value="benefit">Higher is Better</option>
                <option value="cost">Lower is Better</option>
            </select>
        </div>
        `;
    }
}

function generateOptions() {
    let count = document.getElementById("optionCount").value;
    let form = document.getElementById("optionsForm");
    form.innerHTML = "";

    criteria = [];
    let cCount = document.getElementById("criteriaCount").value;

    for (let i = 0; i < cCount; i++) {
        criteria.push({
            name: document.getElementById(`cname${i}`).value,
            weight: parseFloat(document.getElementById(`cweight${i}`).value),
            type: document.getElementById(`ccost${i}`).value
        });
    }

    for (let i = 0; i < count; i++) {
        form.innerHTML += `<h4>Option ${i + 1}</h4>
        <input placeholder="Option Name" id="oname${i}">`;

        criteria.forEach((c, index) => {
            form.innerHTML += `
            <input type="number" placeholder="${c.name}" id="oval${i}_${index}">
            `;
        });
    }
}

function calculate() {
    document.getElementById("errorMsg").innerText = "";

    const decisionName = document.getElementById("decisionName").value;

    if (!decisionName) {
        document.getElementById("errorMsg").innerText =
            "Please enter decision name";
        return;
    }

    let totalWeight = 0;
    criteria.forEach(c => totalWeight += c.weight);

    if (Math.abs(totalWeight - 1) > 0.01) {
        document.getElementById("errorMsg").innerText =
            "Total weight must equal 1";
        return;
    }

    let oCount = document.getElementById("optionCount").value;
    options = [];

    for (let i = 0; i < oCount; i++) {
        let option = {
            name: document.getElementById(`oname${i}`).value,
            values: [],
            score: 0
        };

        criteria.forEach((c, index) => {
            option.values.push(
                parseFloat(document.getElementById(`oval${i}_${index}`).value)
            );
        });

        options.push(option);
    }

    criteria.forEach((c, index) => {
        let vals = options.map(o => o.values[index]);
        let min = Math.min(...vals);
        let max = Math.max(...vals);

        options.forEach(o => {
            let norm = (max === min) ? 1 :
                c.type === "cost"
                    ? (max - o.values[index]) / (max - min)
                    : (o.values[index] - min) / (max - min);

            o.score += norm * c.weight;
        });
    });

    options.sort((a, b) => b.score - a.score);

    const scores = options.map(o => o.score);

    localStorage.setItem("results", JSON.stringify(options));

    fetch("http://localhost:5000/saveDecision", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userEmail: localStorage.getItem("userEmail"),
            decisionName: decisionName,
            criteria: criteria,
            options: options.map(o => o.name),
            results: scores
        })
    });

    window.location.href = "result.html";
}