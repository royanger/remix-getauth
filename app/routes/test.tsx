import { type LoaderArgs } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";

export async function loader(args: LoaderArgs) {
  // this will start throwing a 'JWT expired' error 1 minutes after starting server
  const user = await getAuth(args);

  // this will log error to console and route will work
  // await getAuth(args).catch((err) => { console.log(err) });


  return new Response("Raw Response", {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
}

// empty component will resolve error
// export default function Empty() {
//   return <></>
// }
