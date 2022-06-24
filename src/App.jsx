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
        <NewsDetails>
            <div className="App">
                <header className="App-header">
                    <a href="https://filipedeschamps.com.br/newsletter" target="_blank">
                        <img src="https://github.com/filipedeschamps.png" width={200}/>
                    </a>
                    <div className="header">
                        <h1>Newsletter by Filipe Deschamps</h1>
                        <p>Atualizadas de Segunda a Sexta às 11 horas da manhã</p>
                    </div>
                    <a href="https://filipedeschamps.com.br/newsletter" target="_blank">Receba as notícias em seu e-mail</a>
                    {
                        DataNews && DataNews.length > 0 &&DataNews.map((news, index) => {
                            return (
                                <div className="newsContent"key={index}>
                                    <h2>{news.titleText}</h2>
                                    <p>{news.mainText}</p>
                                </div>
                            )
                        })
                    }
                </header>
            </div>
        </NewsDetails>
    )
}

export default App
