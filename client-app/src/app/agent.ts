import axios, { AxiosResponse } from 'axios'
import { Activity } from './models/activity'
import { error } from 'console'
import { AbstractView } from 'react'

axios.defaults.baseURL = 'http://localhost:5000/api'

const sleep = (delay: number) => new Promise((resolve)=> setTimeout(resolve, delay))
axios.interceptors.response.use(response=> sleep(1000).then(()=>{
    return response;
}).catch((error)=> {
    console.log(error)
    return Promise.reject(error)
}))
const responseBody = <T> (response: AxiosResponse<T>) => response.data

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: object) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: object) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
    
}

const Activities = {
    list: ()=> requests.get<Activity[]>('/activities'),
    details: (id:string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => requests.post('/activities', activity),
    update: (activity: Activity) => requests.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del(`/activities/${id}`)
}

const agent = {
    Activities
}

export default agent