"use client";

import { useEffect } from "react";
import { useData } from "@/app/(components)/Services/data-provider";

export default function One() {
  const { data, setData } = useData();
  useEffect(() => {}, [data]);
  return (
    <>
      <h1>Контекст даних:</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Дані ще не завантажені</p>
      )}{" "}
    </>
  );
}
