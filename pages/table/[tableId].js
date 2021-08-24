import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";

import { useQuery, useMutation } from "@apollo/client";
import { ChannelList } from "../../apollo/channel";
import ChannelComponent from "../../components/channelCompo";

export default function GetStartedPage() {
  const { query } = useRouter();

  const [dataObj, setDataObj] = useState(null);
  const { loading, error, data, refetch } = useQuery(ChannelList, {
    variables: { mb_id: "5f8d82bb3897c708d161151e" },
  });

  // console.log("APOLLO DATA");
  // console.log(data);

  if (data && !dataObj) {
    setDataObj(data);
  }

  return (
    <div>
      <p>THIS IS JUST A TABLE {query.tableId}</p>
      {dataObj !== null &&
        dataObj.channels.map((ele) => {
          console.log(ele.channel_id);
          return <p>{ele.channel_id}</p>;
        })}
    </div>
  );
}
