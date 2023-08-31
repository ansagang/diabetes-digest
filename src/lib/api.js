export const api = {
    getAllUsers: (props) => getAllUsers(props)
}

export async function getAllUsers({language, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/users?lang=${language.lang}`, {
        method: 'GET',
        headers: {
            'x-api-key': process.env.API_KEY
        },
        next: {
            revalidate: revalidate
        }
    })
    const data = await res.json()

    return data
}