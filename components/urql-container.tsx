import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { Client, createClient, Provider } from "urql";

let urqlClient: Client;
type UrqlContainerProps = {
  children: ReactNode;
};

export function UrqlContainer({ children }: UrqlContainerProps) {
  const token = null;
  urqlClient = useMemo(() => {
    return createClient({
      url: "https://t4sg-f21-1.hasura.app/v1/graphql",
      fetchOptions: () => {
        return {
          headers: {
            "x-hasura-admin-secret":
              "SRRv0UblVjkG425DWaRuQqrfDPNMEMzuyZnHqvRaxtWkD5J7c8o5q4F0I3Qw3Uuy",
            Authorization: token ? `Bearer ${token}` : "",
          },
        };
      },
    });
  }, [token]);
  return urqlClient ? <Provider value={urqlClient}>{children}</Provider> : null;
}
