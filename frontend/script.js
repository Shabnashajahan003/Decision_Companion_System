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



