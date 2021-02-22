require('dotenv').config()
const {getPortals} = require('@concentricity/media_shuttle_components')

exports.getAccountPortalsFilteredByPrefix = async (itemFilter) => {
   let response=[];
   portals = await getPortals()
   portals.map(portal => {
      if (portal.name.substring(0,3) === itemFilter) {
         response.push(
            {
               portalId: portal.id,
               name: portal.name
            }
         )
      } 
   })
   return response
}