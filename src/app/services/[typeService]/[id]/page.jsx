import MoreInfo from "@/app/(components)/Services/MoreInfo";
import getPrice from "../../../(components)/Functions/GetPrice";

export default async function MoreInfoPage({ params }) {
  const price = await getPrice();
  const { typeService, id } = params;

  return (
    <>
      <MoreInfo list={price} id={id} type={typeService} />
    </>
  );
}
