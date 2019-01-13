import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

export const Environment = {
    MW_END_POINT_URL : env.REACT_APP_API_ENDPOINT,
    STATIC_FILES_END_POINT_URL: nv.REACT_APP_STATIC_FILE_URL,
    GOOGLE_MAP_KEY: env.REACT_APP_GOOGLE_MAP_KEY 
}