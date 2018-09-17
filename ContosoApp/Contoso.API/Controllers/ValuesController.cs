using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Contoso.API.Controllers
{
    public class ValuesController : ApiController
    {
        //[Route("call-my-api")]
        [HttpGet]
        // GET contoso/values
        public IEnumerable<string> Something()
        {
            return new string[] { "value1", "value2" };
        }

        // GET contoso/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST contoso/values
        public void Post([FromBody]string value)
        {
        }

        // PUT contoso/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE contoso/values/5
        public void Delete(int id)
        {
        }
    }
}
