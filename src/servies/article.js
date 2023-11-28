import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const rapidKEY = import.meta.env.VITE_APP_RAPIDAPIKEY;
// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//         url: 'https://time.com/6266679/musk-ai-open-letter/',
//         length: '3'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'c7fae955f0mshf5709c11a010e0cp106862jsn342640f874b6',
//         'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
// };

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidKEY);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})

export const { useLazyGetSummaryQuery } = articleApi;