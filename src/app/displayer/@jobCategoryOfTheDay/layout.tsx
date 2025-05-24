import Job from "@/app/jobofday/page";
import { ReactNode } from "react";
interface child {
  children: ReactNode;
  managementdata: ReactNode;
}
export default function Layout({ children, managementdata }: child) {
  return (
    <div>
      <div>{children}</div>
      <div>
        <Job />
      </div>
      <div>{managementdata}</div>
    </div>
  );
}
