import api from './Api';

const getTakes = async (studentId) => {
    try{
        const response = await api.get(`/api/v1/takes?studentId=${studentId}`);
        return response.data;
    } catch(error) {
        console.error("Faild to fetch takes:", error);
        throw error;
    }
};

export {getTakes};