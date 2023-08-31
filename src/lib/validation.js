export const loginValidation = ({ email, password, language }) => {

    const errors = []

    if (email && password) {
    } else {
        errors.push(language.res.missingFields)
    }

    return errors
}

export const registerValidation = ({ email, password, language }) => {
    const errors = []
    if (password && email) {

        // if (password === confirmPassword) {
            if (password.length < 6) {
                errors.push(language.res.passwordLengthError)
            }
        // } else {
        //     errors.push(language.res.passwordMatchError)
        // }

        if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errors.push(language.res.emailValidError)
        }
    } else {
        errors.push(language.res.missingFields)
    }

    return errors
}