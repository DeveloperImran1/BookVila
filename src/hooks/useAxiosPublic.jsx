import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://wom-job-task-server.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;