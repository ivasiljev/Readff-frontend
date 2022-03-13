import axios from "axios"

const ARTICLE_BASE_REST_API_URL = "http://localhost:8484/api/articles";

class ArticleService {
    
    getAllArticles() {
        return axios({
            method: 'get',
            url: ARTICLE_BASE_REST_API_URL,
        })
    }

    postNewArticle(article, auth_token) {
        return axios({
            method: 'post',
            url: ARTICLE_BASE_REST_API_URL + "/new",
            headers: {
                'Authorization': `Bearer ${auth_token}`
            },
            data: article
        })
    }
}

export default new ArticleService();