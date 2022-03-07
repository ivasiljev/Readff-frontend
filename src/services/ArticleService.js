import axios from "axios"

const ARTICLE_BASE_REST_API_URL = "http://localhost:8080/api";

class ArticleService {
    
    getAllArticles() {
        return axios.get(ARTICLE_BASE_REST_API_URL)
    }

    postNewArticle(article) {
        axios.post(ARTICLE_BASE_REST_API_URL, article)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default new ArticleService();