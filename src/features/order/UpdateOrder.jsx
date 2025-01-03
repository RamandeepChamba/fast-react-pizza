import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary" disabled={fetcher.state === "submitting"}>
        {fetcher.state === "submitting"
          ? "Updating order..."
          : "Make as priority"}
      </Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderID, data);
  return null;
}

export default UpdateOrder;
