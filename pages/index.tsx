import { CircularProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import PublicLayout from "@components/Layout/PublicLayout";

export default function Index() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    if (session) {
      window.location.replace("/jobs");
    } else {
      window.location.replace("/auth/login");
    }
  }, [loading, session]);

  return (
    <PublicLayout title="Homepage">
      <div className="relative flex items-center justify-center min-w-full min-h-screen">
        <CircularProgress size={24} style={{ color: "#000000" }} />
      </div>
    </PublicLayout>
  );
}
