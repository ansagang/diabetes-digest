export const api = {
    getAllUsers: (props) => getAllUsers(props),
    getTip: (props) => getTip(props),
    getTips: (props) => getTips(props),
    getTeam: (props) => getTeam(props)
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

export async function getTips({language, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/tips?lang=${language.lang}`, {
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

export async function getTip({language, revalidate, id}) {
    const res = await fetch(`${process.env.URL}/api/tips/${id ? id : 'random'}?lang=${language.lang}`, {
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

export async function getTeam({language, revalidate}) {
    const res = await fetch(`${process.env.URL}/api/team?lang=${language.lang}`, {
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