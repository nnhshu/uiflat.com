const BASE_URL = process.env.BASE_URL_BE;

export const API_URLS = {
    GENERAL_LIST: `${BASE_URL}/v1/api/options-general/get`,
    CONFIG_PAGE: `${BASE_URL}/v1/api/config-page/get`,
    SERVICE_LIST: `${BASE_URL}/v1/api/service/list`,
    SERVICE_DETAIL: `${BASE_URL}/v1/api/service/get-post-slug`,
    DOCTOR_LIST: `${BASE_URL}/v1/api/doctor/list`,
    DOCTOR_DETAIL: `${BASE_URL}/v1/api/doctor/slug`,
    FEEDBACK_LIST: `${BASE_URL}/v1/api/feedback/list`,
    VIDEO_LIST: `${BASE_URL}/v1/api/video/list`,
    MENU_LIST: `${BASE_URL}/v1/api/menu/get`,
    POST_LIST: `${BASE_URL}/v1/api/post/posts`,
    POST_CATEGORY: `${BASE_URL}/v1/api/post/categories`,
    POST_CATEGORY_OLD: `${BASE_URL}/v1/api/post/categories-old`,
    POST_BY_PARENT_CATEGORY: `${BASE_URL}/v1/api/post/posts-for-cat-parent`,
    POST_DETAIL: `${BASE_URL}/v1/api/post/slug`,
    RATING_POST: `${BASE_URL}/v1/api/post/rating`,
    CERTIFICATE_LIST: `${BASE_URL}/v1/api/certificate/list`,
    CERTIFICATE_DETAIL: `${BASE_URL}/v1/api/certificate/slug`,
    CERTIFICATE_INFO: `${BASE_URL}/v1/api/certificate/info`,
    DEVICE_LIST: `${BASE_URL}/v1/api/device/list`,
    GALLERY_LIST: `${BASE_URL}/v1/api/image/list`,
    GALLERY_CATEGORIES: `${BASE_URL}/v1/api/image/categories`,
    GALLERY_DETAIL: `${BASE_URL}/v1/api/image/slug`,
    AUTHOR_DETAIL :  `${BASE_URL}/v1/api/user/author`,
    PARTNER_LIST :  `${BASE_URL}/v1/api/partner-logo/get`,
    QUESTIONS_LIST :  `${BASE_URL}/v1/api/question/list`,
    SERVICE_LANDING: `${BASE_URL}/v1/api/custom/service-landing`,
};