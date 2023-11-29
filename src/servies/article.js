import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const rapidKEY = import.meta.env.VITE_APP_RAPIDAPIKEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidKEY);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => {
                return `/summarize?url=${encodeURIComponent(params.article)}&length=3`;
            }
        })
    })
    
})

export const { useLazyGetSummaryQuery } = articleApi;