import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'

const uploadImage = async(image)=>{
    try {
        const formData = new FormData()
        formData.append('image',image)
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        const response = await Axios({
            ...SummaryApi.uploadImage,
            data : formData
        })

        // console.log('formdata', formData)

        console.log('response', response);
        
        return response
    } catch (error) {
        return error
    }
}

export default uploadImage