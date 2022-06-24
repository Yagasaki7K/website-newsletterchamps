import { useEffect, useState } from 'react'
import NewsDetails from './components/NewsDetails';

// API >>> https://api-newsletter.herokuapp.com/news

function App() {

    const [DataNews, setDataNews] = useState({})

  useEffect(() => {
    async function getNews() {
        const response = await fetch('https://api-newsletter.herokuapp.com/news');

        if (response.ok) {
            const data = await response.json();
            setDataNews(data.data)
            console.log('D:', data)
            console.log(DataNews)
        }
    }

    getNews()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img src="https://github.com/filipedeschamps.png" width={200}/>
                <h1>Unofficial Newsletter Deschamps</h1>
                {DataNews.map((news, index) => {
                    return (
                        <div className="newsContent"key={index}>
                            <h2>{news.titleText}</h2>
                            <p>{news.mainText}</p>
                        </div>
                    )
                })}
            </header>
        </div>
    )
}

export default App
