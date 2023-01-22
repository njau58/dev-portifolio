
 const {getBlogs} = require('../utils/getBlog')
exports.handler =  async() =>{
   
  var data = getBlogs()
    
   return { statusCode:200,
    body: JSON.stringify(data) }

}