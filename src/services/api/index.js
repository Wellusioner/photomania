import axios from 'axios'
import buildUrl from 'build-url'
import config from 'config'


axios.defaults.params = {};
axios.defaults.params['_f'] = 'json';


const queryBuilder = (
        url='',
        {
            key='',
            limit = 0,
            q='',
            page=1,
            extra={}
        } = {}
    ) => {

    let query = {};

    if(config.API_KEY){
        query['key'] = config.API_KEY
    }

    if(limit > 0){
        query['per_page'] = limit;
    }
    if(q){
        query['q'] = q
    }

    if(page > 0){
        query['page'] = page;
    }

    if(Object.keys(extra).length){
        Object.keys(extra).forEach(key => {
            if(key && extra[key]){
                query[key] = extra[key]
            }
        })
    }

    return buildUrl({
        path: url,
        queryParams: query
    })
};

export default {
    request: axios.create({
        baseURL: config.API_ROOT
    }),
    queryBuilder
}