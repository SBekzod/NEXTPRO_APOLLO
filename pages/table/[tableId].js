import { useRouter } from "next/dist/client/router";
import React from "react";

import { useQuery, useMutation } from "@apollo/client";
import { ChannelList } from "../../apollo/channel";

export default function GetStartedPage() {
  const { query } = useRouter();
  console.log(useRouter());

  const { loading, error, data, refetch } = useQuery(ChannelList, {
    variables: { mb_id: "5f8d82bb3897c708d161151e" },
  });

  return (
    <div>
      <p>THIS IS JUST A TABLE {query.tableId}</p>
    </div>
  );
}
