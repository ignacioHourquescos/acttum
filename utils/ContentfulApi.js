




// YA ESTA CREADO EL CONTENTFUL DE CARO, PERO NO ESTA COENCTADO TODAVIA!!!!!!!!!!!!!!!!!!!!!!!!

export default class ContentfulApi {

   static async callContentful(query) {
     const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/bzoc6ticc5do`;
 
     const fetchOptions = {
       method: "POST",
       headers: {
         Authorization: `Bearer yXJkQSq7ppHBqlQc3IK7gXt0HY_wcXtXn4z0BgHEC2Y`,
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ query }),
     };
 
     try {
       const data = await fetch(fetchUrl, fetchOptions).then((response) =>
         response.json(),
       );
       return data;
     } catch (error) {
       throw new Error("Could not fetch data from Contentful!");
     }
   }
 }


 export default class ContentfulApi {

   static async callContentful(query) { /* GQL call described above */ }
 
   static async getTotalPostsNumber() {
     // Build the query
     const query = `
       {
         blogPostCollection {
           total
         }
       }
     `;
 
     // Call out to the API
     const response = await this.callContentful(query);
     const totalPosts = response.data.blogPostCollection.total
       ? response.data.blogPostCollection.total
       : 0;
 
     return totalPosts;
   }
 }