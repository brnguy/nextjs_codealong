import { useRouter } from 'next/router';

// our-domain.com/news/something-important

function DetailPage() {
    const router = useRouter();

    const newsId = console.log(router.query.newsId);

    // send a request to the backend API
    // to fetch the news item with newsId
    
    return <h1>The Details Page</h1>
}

export default DetailPage