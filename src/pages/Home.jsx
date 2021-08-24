
import Search from '../components/Search';
import uuid from "uuid/dist/v1";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { context } from '../App';




function Home() {
    const { articles } = useContext(context)
    return (
        <div className="container mt-2 p-3">
            <Search />
            <div className="row">

                {
                    articles.map(article => {
                        return <div className="col-12 col-md-6 col-lg-4 mb-2" key={uuid()}>
                            <div className="card">
                                <img src={article.urlToImage} alt={article.title} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/article/${article.id}`}>{article.title}</Link>
                                    <p className="card-text">{article.description}</p>
                                    <a className="card-link" href={article.url} target="_hakim">Learn More</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home


/**one article
 *
      "source": {
        "id": null,
        "name": "Gazeta.ru"
      },
      "author": "Газета.Ru",
      "title": "Разработчики летающих такси собрали рекордные инвестиции",
      "description": "Инвесторы вложили рекордные $4,3 млрд в стартапы, которые занимаются разработкой электрических авиатакси. Об этом сообщила газета Financial Times (FT). \n\nОбъем финансирования разработок воздушного транспорта за последние пять лет вырос на ...",
      "url": "https://www.gazeta.ru/business/news/2021/08/24/n_16425260.shtml",
      "urlToImage": "https://www.gazeta.ru//img.gazeta.ru/files3/407/11651407/tesliburn-pic905-895x505-50051.jpg",
      "publishedAt": "2021-08-24T12:45:33Z",
      "content": "$4,3  , . Financial Times (FT).\r\n    83%, $10,4 , McKinsey. ,      .\r\n .   ,  ,     — SPAC (special purpose acquisition company).\r\n —   ,  ,   , .   : , « Tesla».\r\n IDTechEx   FT ,   .   ,   , . « , … [+11 chars]"
    }
 */
