import DataProvider from "@/app/(components)/Services/data-provider";

export default function Layout({ children }) {
  return <DataProvider>{children}</DataProvider>;
}
