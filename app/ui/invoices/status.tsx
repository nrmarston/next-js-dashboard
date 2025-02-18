import { CheckIcon, ClockIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-[10px] py-1 text-sm",
        {
          "bg-gray-100 text-gray-700": status === "pending",
          "bg-green-100 text-green-900": status === "paid",
        }
      )}
    >
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-green-900" />
        </>
      ) : null}
    </span>
  );
}
