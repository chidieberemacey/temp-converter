document.querySelector('#clear').addEventListener('click', run)
    function run(){
        fInput.value = ""
        kInput.value = ""
        cInput.value = ""
}


    const cInput = document.getElementById("celcius");
    const fInput = document.getElementById("fahrenheit");
    const kInput = document.getElementById("kelvin");

    const inputs = document.getElementsByClassName("input");
    
    for(let i = 0; i < inputs.length; i++){
        let input = inputs[i];

        input.addEventListener("input", function(e){
            let value = parseFloat(e.target.value);

            switch(e.target.name){
                case "celcius":
                    fInput.value = (value * 1.8) + 32;
                    kInput.value = value + 273.15;
                      
                    break;
                case "fahrenheit":
                    cInput.value = (value - 32) / 1.8;
                    kInput.value = ((value - 32) / 1.8) + 273.15;
                    break;
                case "kelvin":
                    cInput.value = value - 273.15;
                    fInput.value = ((value - 273.15) * 1.8) + 32;
                    break;
            };
        });
    };

// }







