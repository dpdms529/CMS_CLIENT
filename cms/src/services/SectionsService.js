import api from './Api';

const getSections = async (year, semester, targetGrade, courseClassificationName, courseName) => {
    try{
        const response = await api.get(`/api/v1/sections?year=${year}&semester=${semester}&targetGrade=${targetGrade}&courseClassificationName=${courseClassificationName}&courseName=${courseName}`);
        return response.data;
    } catch(error) {
        console.error("Faild to fetch sections:", error);
        throw error;
    }
};

export {getSections};