import styled from 'styled-components'

const NewsDetails = styled.div`
    .App {
        text-align: center;
        display: flex;
    }

    img {
        border-radius: 50%;
    }

    .header {
        p {
            margin: -20px 0 20px 0;
            font-style: italic;
        }
    }

    a {
        color: #f0da50;
        font-size: 1.2rem;
    }

    .newsContent {
        padding: 0rem 35rem;

        @media (max-width: 1366px) {
            padding: 0rem 20rem;
        }

        @media (max-width: 768px) {
            padding: 0rem 10rem;
        }

        @media (max-width: 480px) {
            padding: 0rem 5rem;
        }

        @media (max-width: 320px) {
            padding: 0rem 2rem;
        }
    }
`

export default NewsDetails