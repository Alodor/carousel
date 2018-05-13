$(document).ready(() => {
    var currentStep = 1
    
    // ciclo
    setInterval(() => {
        $(".step-container .step[data-step='" + currentStep + "']").removeClass('active')
        $(".step-content[data-step='" + currentStep + "']").removeClass('active')
        currentStep++
        $(".step-container .step[data-step='" + currentStep + "']").addClass('active')
        $(".step-content[data-step='" + currentStep + "']").addClass('active')

        if(currentStep === 5) {
            currentStep = 1
            $(".step-container .step[data-step='" + currentStep + "']").addClass('active')
            $(".step-content[data-step='" + currentStep + "']").addClass('active')
        }
    }, 2000)              
})