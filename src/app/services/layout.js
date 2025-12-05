import DataProvider from "../(components)/Services/data-provider";

export default function Layout({ children }) {
  return <DataProvider>{children}</DataProvider>;
}
