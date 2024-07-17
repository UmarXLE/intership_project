
interface GraphQLResponse<T> {
    data: T,
    errors?: { message: string }[]
}

interface MyResultResponse {

}


export const fetchGraphQLData = async (): Promise<GraphQLResponse<MyResultResponse>> => {
    const query = `
    query Barcode {
    barcode(id: 365) {
        id
        barcodeValue
        title
        description
        deleted
        sellingPrice
        slug
        archived
        createdAt
        mute
        discountedPrice
        cost
        tags
        characteristic
        category {
            id
            name
            slug
            icon
            icon1
            isActive
            prioritization
            inTrend
            lft
            rght
            treeId
            level
            parent {
                id
                name
                slug
                icon
                icon1
                isActive
                prioritization
                inTrend
                lft
                rght
                treeId
                level
            }
        }
        images {
            id
            url
        }
        sizes {
            edges {
                node {
                    id
                    name
                    value
                }
            }
        }
    }
}
    `

    const response = await fetch('https://api.uno.kg/graphql/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const result = await response.json();
    console.log("result data", result);

    return result
}