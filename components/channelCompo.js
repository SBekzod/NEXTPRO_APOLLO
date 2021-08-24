import React from "react";

export default function ChannelComponent(props) {
  const { channel_id } = props;
  console.log(channel_id);

  return <div>{channel_id}</div>;
}
