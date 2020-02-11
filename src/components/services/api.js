import axios from 'axios';

module.exports = {    
    async getUpcomming()     {
        await axios.get('https://api.themoviedb.org/3/movie/upcomming/550?api_key=fd5dbadeb0fc07b3a0c2b195a21a2ac4').then(() => {
            return resizeBy.data;
        })
    }
}