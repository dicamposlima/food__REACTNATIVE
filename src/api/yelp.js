import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Of93FD7WMerJsmpO0k_xd2QuVTNmgVEjyuGjfELG2_ZoUQl-VpsYJS2YWa93aVnkpxVrPFPOkZgpZopwEwz8zQTl3ljsHN8I-lOhDkKfm_uXLDBU9Ap2v9Dod5EXXnYx'
    }
})
