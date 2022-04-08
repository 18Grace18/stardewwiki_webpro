const dbConnection = require('../dbConnection');

class SearchMng{
    async getAllInformation(){
        // Get the connection
        let connection = await dbConnection();
        try {
            let sql = "SELECT * FROM information";
            let results = await connection.query(sql);
            return results;
        }
        catch (error) {
            throw error;
        }
    }
/* More SQL Methods here */
}
module.exports.SearchMng = SearchMng;