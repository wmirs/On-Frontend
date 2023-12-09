import http from '@/utils/http.js'

function getCategories() {
    return http({
        url: '/home/category/head'
    })
}