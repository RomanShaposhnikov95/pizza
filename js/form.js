(function() {
    const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

    const {form} = document.forms;

    function retrieveFormValue(e){
        e.preventDefault()
        let values = {};

        for (let field of form) {
            const {name} = field;

            if (name) {
                const {type, checked, value} = field;

                values[name] = isCheckboxOrRadio(type) ? checked : value;

                if(type === 'radio') {
                    values = {
                        ...values,
                        [name]: getRadioValue(name)
                    }
                }
            }
        }
        console.log('data', values);
    }

    function getRadioValue(val = null) {
        let radio = document.getElementsByName(`${val}`);
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked)
                return radio[i].value;
        }
    }

    form.addEventListener('submit', retrieveFormValue);

})();