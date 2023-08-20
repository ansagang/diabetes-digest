export default function supabaseErrors ({error, language}) {
    switch (error.message) {
        case "Email not confirmed":
            return {
                success: false,
                message: language.res.emailNotConfirmedError
            }
        case "Invalid login credentials":
            return {
                success: false,
                message: language.res.passwordIncorrectError
            }
        default:
            return {
                success: false,
                message: error.message
            }
    }
}