import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

import { useQuery, useMutation } from "@apollo/client";
import { ChannelList } from "../../apollo/channel";

export default function GetStartedPage() {
  const { query } = useRouter();

  // const [dataF, setDataF] = useState([]);
  const { loading, error, data, refetch } = useQuery(ChannelList, {
    variables: { mb_id: "5f8d82bb3897c708d161151e" },
  });

  // if (typeof data !== "undefined" && dataF.length == 0) {
  //   setDataF([...data.channels]);
  //   console.log("SETDATAF");
  // }

  console.log("APOLLO DATA");
  console.log(data);

  return (
    <div>
      <p>THIS IS JUST A TABLE {query.tableId}</p>
      {data &&
        data.channels.map((ele) => {
          console.log(ele.channel_id);
        })}
    </div>
  );
}
