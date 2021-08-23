import { gql } from "@apollo/client";

export const ChannelList = gql`
  query ChannelList($mb_id: String!) {
    channels(mb_id: $mb_id) {
      date_created
      is_active
      invitees_mb_id
      channel_id
    }
  }
`;
