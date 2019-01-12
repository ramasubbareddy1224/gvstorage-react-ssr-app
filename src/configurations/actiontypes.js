export const ACTIONTYPES = {
    'PROFILE': {
        SET_CURRENT_PROFILE : 'auth/SET_CURRENT_PROFILE'
    },
    'HOME':{
        GET_ALL_DISCOUNTS: 'GET_ALL_DISCOUNTS',
        GET_ALL_PINCODES: 'GET_ALL_PINCODES',
        GET_ALL_SITES: 'GET_ALL_SITES',
        GET_ALL_PINCODES_SITES: 'GET_ALL_PINCODES_SITES'
    },
    'SEARCH': {
        GET_ALL_SITES_BY_FILTER: 'GET_ALL_SITES_BY_FILTER',
        GET_ALL_SITES_BY_CHECKBOXES: 'GET_ALL_SITES_BY_CHECKBOXES'
    },
    'SELF_STORAGE':{
        GET_ALL_UNITS_LOCATION_CODE: 'GET_ALL_UNITS_LOCATION_CODE'
    },
    'RESERVE':{
        GET_ALL_MOVEIN_CHARGES: 'GET_ALL_MOVEIN_CHARGES'
    },
    'SHARED': {
        GET_FILTER_INFO: 'GET_FILTER_INFO'
    }
}