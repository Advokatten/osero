var currentStep = 1;

function updateStepIndicator() {
    var stepIndicators = document.querySelectorAll('.step-indicator');
    stepIndicators.forEach(function(indicator, index) {
        if (index < currentStep - 1) {
            indicator.classList.add('completed');
        } else {
            indicator.classList.remove('completed');
        }
        if (index === currentStep - 1) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextStep() {
    if (currentStep < 4) {
        document.getElementById('step' + currentStep).classList.remove('active');
        currentStep++;
        document.getElementById('step' + currentStep).classList.add('active');
        updateStepIndicator();
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById('step' + currentStep).classList.remove('active');
        currentStep--;
        document.getElementById('step' + currentStep).classList.add('active');
        updateStepIndicator();
    }
}

function selectOption(option) {
    var selectedOptions = document.querySelectorAll('.option.selected');
    if (selectedOptions.length < 3 || option.classList.contains('selected')) {
        option.classList.toggle('selected');
    }
}

document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var name = formData.get('name');
    var email = formData.get('email');
    var phone = formData.get('phone');
    var plan = document.querySelector('.options .option.selected').innerText;
    var options = Array.from(document.querySelectorAll('#step3 .option.selected')).map(option => option.innerText);
    
    document.getElementById('summaryName').innerText = name;
    document.getElementById('summaryEmail').innerText = email;
    document.getElementById('summaryPhone').innerText = phone;
    document.getElementById('summaryPlan').innerText = plan;
    document.getElementById('summaryOptions').innerText = options.join(', ');

    nextStep();
});

updateStepIndicator();
