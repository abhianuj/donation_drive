let server = "";
switch(process.env.NODE_ENV) {
    case 'production':
        server = 'http://backend.ingress.fundraiser.i524895.shoot.canary.k8s-hana.ondemand.com';
      break;
    case 'development':
    default:
        server = 'http://localhost:8080';
}
let signup = async (data) => {

        const response = await fetch(
            `${server}/api/users`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        console.log(response.status);
        if (response.status === 200) {

            return response.json();

        }

        return response;

    },

    login = async (data) => {

        const response = await fetch(
            `${server}/api/users/login`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        console.log(response.status);
        if (response.status === 200) {

            return response.json();

        }

        return response;

    },

    startFundraiser = async (data, token) => {

        data = {
            'title': 'Abhijeet suffering from obesity',
            'cause': 'Abhijeet is a 2 year boy suffering from severe depression. Please donate atleast 2 lakhs each to save him',
            'neededAmount': 10000000,
            'endDate': '2021-10-10T12:00:27.87+00:20',
            'category': 'Children',
            'picture': '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'
        }
        const response = await fetch(
            `${server}/api/posts`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    token
                },
                body: JSON.stringify(data)
            }
        );

        console.log(response.status);
        return response;

    },

    fundraisers = async () => {

        const response = await fetch(
            `${server}/api/posts`,
            {
                method: 'GET',
                mode: 'cors'
            }
        );

        if (response.status === 200) {

            return response.json();

        }

        return response;

    },

    sendDonation = async (id, data, token) => {

        console.log(id);
        data = {
            post: {
                id: parseInt(id.id)
            },
            amount: parseInt(data)
        }
        const response = await fetch(
            `${server}/api/donations`,
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    token
                },
                body: JSON.stringify(data)
            }
        );

        console.log(response.status);
        return response;

    },

    donations = async () => {

        const response = await fetch(
            `${server}/api/donations`,
            {
                method: 'GET',
                mode: 'cors'
            }
        );

        if (response.status === 200) {

            return response.json();

        }

        return response;

    }

export {
    server,
    signup,
    login,
    startFundraiser,
    fundraisers,
    sendDonation,
    donations
}